var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function

// Handle the GET request
exports.get = function(req) {

    // Get the country content and extract the needed data from the JSON
    var content = portal.getContent();

    var name = content.displayName;
    var description = content.data.description;
    var population = content.data.population;

    // Prepare the model object that will be passed to the view file
    var model = {
        name: name,
        description: description,
        population: population
    };

    // Specify the view file to use
    var view = resolve('country.html');

    // Return the response object
    return {
        body: thymeleaf.render(view, model)
    }
};