/*
There are two ways to get content. This way only works when a page
with this `part` supports the content type. Then a URL that leads to
any `Person` content will reach this page and the content is
retrievable with `portal.getContent`. You can see this in action when
you click on a `Person` content in the admin console and it is
previewed in the page.
*/
var contentSvc = require('/lib/xp/content');
var portal = require('/lib/xp/portal');

var content = portal.getContent();

// Find the related person id
var personId = component.config['person'];

// Fetch the actual person content
var person = contentSvc.get({
  key: personId
});
