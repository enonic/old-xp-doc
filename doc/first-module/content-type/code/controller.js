var contentSvc = require('/lib/xp/content');
var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function(req) {

  // Find the current component
  var component = portal.getComponent();

  // Find the right content
  var person = contentSvc.get({
    key: '/my-first-site/people/edvard-munch'
  });

  // Combine the first and last name
  var personName = [
    person.data['first-name'],
    person.data['last-name']
  ].join(' ').trim();

  // Retrieve the image ID from the content used to create a image URL
  var imageId = person.data['image'];

  // Create a URL to the image
  var imageUrl = portal.imageUrl({
    id: imageId,
    filter: 'scaleblock(400,400)'
  });

  // Create view model
  var model = {
    component: component,
    person: {
      name: personName,
      image: imageUrl,
      bio: person.data['bio']
    }
  };

  // Resolve the view
  var view = resolve('person-show.html');

  // Render a thymeleaf template
  var body = thymeleaf.render(view, model);

  // Return the result
  return {
    body: body,
    contentType: 'text/html'
  }

};
