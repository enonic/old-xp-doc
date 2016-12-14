var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf library

// Handle the GET request
exports.get = function(req) {

    // Specify the view file to use
    var view = resolve('hello.html');

    // Render HTML from the view file
    var body = thymeleaf.render(view, {});

    // Return the response object
    return {
        body: body
    }
};