var lib = require('/lib/xp/portal');

var url = lib.pageUrl({
  path: '/my/page',
  params: {
    a: 1,
    b: [1, 2]
  }
});
