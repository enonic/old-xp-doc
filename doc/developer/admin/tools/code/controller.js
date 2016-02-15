var mustache = require('/lib/xp/mustache');
var portal = require('/lib/xp/portal');

function handleGet(req) {
    var view = resolve('../common/admin-app.html');

    var params = {
        portalAssetsUrl: portal.assetUrl({path: ""}),
        appId: 'content-studio',
        appName: 'Content Studio'
    };
    return {
        contentType: 'text/html',
        body: mustache.render(view, params)
    };
}
exports.get = handleGet;