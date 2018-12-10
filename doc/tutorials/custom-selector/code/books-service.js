var portalLib = require('/lib/xp/portal');
var httpClient = require('/lib/xp/http-client');
var cacheLib = require('/lib/xp/cache');

var bookIdCache = cacheLib.newCache({
    size: 100
});

var searchQueriesCache = cacheLib.newCache({
    size: 100,
    expire: 60 * 10
});

var apiKey = "AIzaSyDZnJCAzEXznkeBzaDDoKdj0u6nfEDFcAU";

exports.get = handleGet;

function handleGet(req) {

    var params = req.params;
    var ids;
    try {
        ids = params.ids.split(',') || []
    } catch (e) {
        ids = [];
    }

    var tracks;
    if (ids.length > 0) {
        tracks = fetchBooksByIds(ids);
    } else {
        tracks = searchBooks(params.query, params.start || 0, params.count || 10);
    }

    return {
        contentType: 'application/json',
        body: tracks
    }
}

function fetchBooksByIds(ids) {
    var tracks = [];

    for (var i = 0; i < ids.length; i++) {
        var id = ids[i];

        var track = bookIdCache.get(id, function () {
            var bookResponse = fetchBookById(id);
            return bookResponse ? parseBookResponse(bookResponse) : null;
        });

        if (track) {
            tracks.push(track);
        }
    }

    return {
        count: tracks.length,
        total: tracks.length,
        hits: tracks
    };
}

function searchBooks(text, start, count) {
    text = (text || '').trim();
    if (!text) {
        return {
            count: 0,
            total: 0,
            hits: []
        };
    }

    return searchQueriesCache.get(searchKey(text, start, count), function () {
        var googleResponse = fetchBooks(text, start, count);
        return parseSearchResults(googleResponse);
    });
}

function searchKey(text, start, count) {
    return start + '-' + count + '-' + text;
}

function fetchBookById(id) {
    log.info('Fetching books from Google Bookds API by id: ' + id);
    try {
        var response = httpClient.request({
            url: 'https://www.googleapis.com/books/v1/volumes/' + id,
            method: 'GET',
            contentType: 'application/json',
            connectTimeout: 5000,
            readTimeout: 10000
        });
        if (response.status === 200) {
            return JSON.parse(response.body);
        }

    } catch (e) {
        log.error('Could not retrieve the book', e);
    }

    return null;
}

function fetchBooks(text, start, count) {
    if (!text) {
        return emptyResponse();
    }

    log.info('Querying Google Books API: ' + start + ' + ' + count + ' "' + text + '"');
    try {
        var response = httpClient.request({
            url: 'https://www.googleapis.com/books/v1/volumes',
            method: 'GET',
            contentType: 'application/json',
            connectTimeout: 5000,
            readTimeout: 10000,
            params: {
                'key': apiKey,
                'q': text,
                'printType': 'books',
                'maxResults': count,
                'startIndex': start
            }
        });

        if (response.status === 200) {
            return JSON.parse(response.body);
        }
        log.error('Could not fetch books: error ' + JSON.parse(response));

    } catch (e) {
        log.error('Could not fetch books: ', e);
    }

    return emptyResponse();
}

function emptyResponse() {
    return {
        "kind": "books#volumes",
        "totalItems": 0
    };
}

function parseSearchResults(resp) {
    var options = [];
    var books = resp.items, i, option, book;
    for (i = 0; i < books.length; i++) {
        book = books[i];
        option = bookIdCache.get(book.id, function () {
            return parseBook(book);
        });
        options.push(option);
    }

    return {
        count: resp.items.length,
        total: resp.totalItems,
        hits: options
    };
}

function parseBookResponse(resp) {

    if (!resp.id) {
        return null;
    }

    return parseBook(resp);
}

function parseBook(book) {
    var option = {};
    option.id = book.id;
    var volume = book.volumeInfo;

    var author = volume.authors && volume.authors.length > 0 ? volume.authors[0] : '';
    option.displayName = volume.title + (author ? ' (by ' + author + ')' : '');
    option.description = volume.description;

    if (volume.imageLinks) {
        option.iconUrl = volume.imageLinks.thumbnail || volume.imageLinks.smallThumbnail;
    } else {
        option.iconUrl = defaultIcon();
    }

    return option;
}

function defaultIcon() {
    return portalLib.assetUrl({path: 'noimage.png'});
}
