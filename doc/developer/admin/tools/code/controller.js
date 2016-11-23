var mustache = require('/lib/xp/mustache');
var portalLib = require('/lib/xp/portal');

function handleGet() {
    var view = resolve('./my-view.html');

    var params = {
        adminUrl: portalLib.url({path: "/admin"}),
        assetsUri: portalLib.url({path: "/admin/assets"}),
        appId: 'my-custom-tool'
    };
    return {
        contentType: 'text/html',
        body: mustache.render(view, params)
    };
}

exports.get = handleGet;
