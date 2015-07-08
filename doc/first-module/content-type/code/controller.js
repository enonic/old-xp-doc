exports.get = function(req) {

  // Find the current component
  var component = execute('portal.getComponent');

  // Find the right content
  var person = execute('content.get', {
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
  var imageUrl = execute('portal.imageUrl', {
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

  // Return the result
  return {
    body: execute('thymeleaf.render', {
      view: resolve('person-show.html'),
      model: model
    }),
    contentType: 'text/html'
  }

};
