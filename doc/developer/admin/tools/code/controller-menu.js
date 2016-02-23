var portalLib = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function (req) {

    var params = {
        adminUiAssetsUrl: portalLib.assetUrl({path: "", application: "com.enonic.xp.admin.ui"}),
        launcherJsUrl: portalLib.assetUrl({path: "/js/launcher.js", application: "com.enonic.xp.admin.ui"})
    }

    return {
        body: thymeleaf.render(view, params)
    };
};