var mustache = require('/lib/xp/mustache');
var portalLib = require('/lib/xp/portal');
var timestamp = Date.now();

function handleGet() {
    var view = resolve('./my-view.html');

    var params = {
        adminUrl: portalLib.url({path: "/admin"}),
        assetsUri: portalLib.url({path: "/admin/assets/" + timestamp}),
        appId: 'my-custom-tool',
        appName: 'My custom tool'
    };
    return {
        contentType: 'text/html',
        body: mustache.render(view, params)
    };
}

exports.get = handleGet;
