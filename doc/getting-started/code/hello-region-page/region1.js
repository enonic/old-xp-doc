var portalLib = require('/lib/xp/portal'); // Import the portal functions
var thymeleafLib = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function

// Handle the GET request
exports.get = function (req) {

    // Get the content that is using the page
    var content = portalLib.getContent();

    // Extract the main region which contains component parts
    var mainRegion = content.page.regions.main;

    // Prepare the model that will be passed to the view
    var model = {
        mainRegion: mainRegion
    }

    // Specify the view file to use
    var view = resolve('hello-region.html');

    // Render the dynamic HTML with values from the model
    var body = thymeleafLib.render(view, model);

    // Return the response object
    return {
        body: body
    }
};