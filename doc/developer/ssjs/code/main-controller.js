var mustache = require('/lib/xp/mustache');

// Handles a GET request
exports.get = function (req) {

    var view = resolve('my-page.html');
    var params = {
        appId: app.name,
        title: 'Hello world'
    };

    return {
        body: mustache.render(view, params),
        contentType: 'text/html'
    };
};

// Handles a POST request
exports.post = function (req) {
    var name = request.params.name;

    return {
        body: {'Hello': name},
        contentType: 'application/json'
    };
};
