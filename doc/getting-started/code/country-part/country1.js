var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function

exports.get = function(req) {
    var view = resolve('country.html');
    var model = {};

    var content = portal.getContent();

    model.name = content.displayName;
    model.description = content.data.description;
    model.population = content.data.population;

    var body = thymeleaf.render(view, model);

    return {
        body: body
    }
};