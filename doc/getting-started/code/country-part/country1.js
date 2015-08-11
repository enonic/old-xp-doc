// Get the portal and thymeleaf libraries
var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function(req) {
    var view = resolve('country.html');
    var model = {
        country: portal.getContent() // This portal function gets a JSON object of the country content
    };

    var body = thymeleaf.render(view, model); // Passes the JSON object to the HTML view file

    return {
        body: body
    }
};
// TODO: Make the imageUrl