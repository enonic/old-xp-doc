var lib = require('/lib/xp/portal');

var url = lib.serviceUrl({
  service: 'myservice',
  params: {
    a: 1,
    b: 2
  }
});
