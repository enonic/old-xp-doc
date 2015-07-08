exports.get = function(portal) {

  // Find the current component from request
  var component = execute('portal.getComponent');

  // Find a config variable for the component
  var things = component.config["thing"] || [];

  // Define the model
  var model = {
    component: component,
    things: things
  };

  // Resolve the view
  var view = resolve('/cms/view/my-favorite-things.html');

  // Render a thymeleaf template
  var body = execute('thymeleaf.render', {
    view: view,
    model: model
  });

  // Return the result
  return {
    body: body,
    contentType: 'text/html'
  };

};
