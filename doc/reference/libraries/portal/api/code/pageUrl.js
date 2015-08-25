var portalLib = require('/lib/xp/portal');

var url = portalLib.pageUrl({
    path: '/my/page',
    params: {
        a: 1,
        b: [1, 2]
    }
});
