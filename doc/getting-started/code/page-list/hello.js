var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf render function
var contentSvc = require('/lib/xp/content'); // Import the content service functions
var portal = require('/lib/xp/portal'); // Import the portal functions

// Handle the GET request
exports.get = function(req) {
    var model = {};

    // Get all the country contents
    var result = contentSvc.query({
        start: 0,
        count: 100,
        contentTypes: [
            module.name + ':country'
        ]
    });

    var contents = result.contents;
    var countries = new Array();

    // Loop through the contents and extract the needed data
    for(var i = 0; i < contents.length; i++) {

        var country = {};
        country.name = contents[i].displayName;
        country.contentUrl = portal.pageUrl({
            id: contents[i]._id
        });
        countries.push(country);
    }

    // Add the country data to the model
    model.countries = countries;

    // Specify the view file to use
    var view = resolve('hello.html');

    // Compile HTML from the view with dynamic data from the model
    var body = thymeleaf.render(view, model);

    // Return the response object
    return {
        body: body
    }
};