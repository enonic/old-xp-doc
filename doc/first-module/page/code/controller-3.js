exports.get = function(req) {

  // Resolve the view
  var view = resolve('/cms/view/my-first-page.html');

  // Define the model
  var model = {
    name: "John Doe"
  };

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
