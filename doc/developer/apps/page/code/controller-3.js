var thymeleafLib = require('/lib/xp/thymeleaf');

exports.get = function(req) {

  // Resolve the view
  var view = resolve('/site/view/my-first-page.html');

  // Define the model
  var model = {
    name: "John Doe"
  };

  // Render a thymeleaf template
  var body = thymeleafLib.render(view, model);

  // Return the result
  return {
    body: body,
    contentType: 'text/html'
  };

};
