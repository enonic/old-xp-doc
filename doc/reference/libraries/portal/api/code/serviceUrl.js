var portal = require('/lib/xp/portal');

var url = portal.serviceUrl({
  service: 'myservice',
  params: {
    a: 1,
    b: 2
  }
});
