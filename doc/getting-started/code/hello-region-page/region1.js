var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function

exports.get = function(req) {
    var view = resolve('country.html');
    var model = {};

    var content = portal.getContent();

    model.mainRegion = content.page.regions.main;

    var body = thymeleaf.render(view, model);

    return {
        body: body
    }
};