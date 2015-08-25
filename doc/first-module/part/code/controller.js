var portalLib = require('/lib/xp/portal');
var thymeleafLib = require('/lib/xp/thymeleaf');

exports.get = function (req) {

    // Find the current component from request
    var component = portalLib.getComponent();

    // Find a config variable for the component
    var things = component.config["thing"] || [];

    // Define the model
    var model = {
        component: component,
        things: things
    };

    // Resolve the view
    var view = resolve('/site/view/my-favorite-things.html');

    // Render a thymeleaf template
    var body = thymeleafLib.render(view, model);

    // Return the result
    return {
        body: body,
        contentType: 'text/html'
    };

};
