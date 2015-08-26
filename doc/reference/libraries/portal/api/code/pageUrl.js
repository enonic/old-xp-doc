var portal = require('/lib/xp/portal');

var url = portal.pageUrl({
  path: '/my/page',
  params: {
    a: 1,
    b: [1, 2]
  }
});
