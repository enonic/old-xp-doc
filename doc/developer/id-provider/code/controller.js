var authLib = require('/lib/xp/auth');
var portalLib = require('/lib/xp/portal');

exports.handle401 = function (req) {
    var body = generateLoginPage();

    return {
        status: 401,
        contentType: 'text/html',
        body: body
    };
};

exports.get = function (req) {
    var body = generateLoginPage();

    return {
        contentType: 'text/html',
        body: body
    };
};

exports.logout = function (req) {
    authLib.logout();
    var redirectUrl = generateRedirectUrl();
    return {
        redirect: redirectUrl
    };
};

function generateRedirectUrl() {
    var site = portalLib.getSite();
    if (site) {
        return portalLib.pageUrl({id: site._id});
    }
    return '/';
}


exports.autoLogin = function (req) {
    log.info('Auto login. Invoked only when user is not authenticated');
};

function generateLoginPage() {
    var authConfig = authLib.getIdProviderConfig();
    var title = authConfig.title || "User Login";
    return '<html><head></head><body><h1>' + title + '</h1></body></html>';
};