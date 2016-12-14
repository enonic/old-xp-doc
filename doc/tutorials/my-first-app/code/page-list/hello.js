var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf library
var contentLib = require('/lib/xp/content'); // Import the content service library
var portal = require('/lib/xp/portal'); // Import the portal library

// Handle the GET request
exports.get = function(req) {
    var model = {};

    var site = portal.getSite();

    // Get all the country contents (in the current site)
    var result = contentLib.query({
        start: 0,
        count: 100,
        contentTypes: [
            app.name + ':country'
        ],
        "query": "_path LIKE '/content" + site._path + "/*'"
    });

    var hits = result.hits;
    var countries = [];

    // Loop through the contents and extract the needed data
    for(var i = 0; i < hits.length; i++) {

        var country = {};
        country.name = hits[i].displayName;
        country.contentUrl = portal.pageUrl({
            id: hits[i]._id
        });
        countries.push(country);
    }

    // Add the country data to the model
    model.countries = countries;

    // Specify the view file to use
    var view = resolve('hello.html');

    // Return the merged view and model in the response object
    return {
        body: thymeleaf.render(view, model)
    }
};