var authLib = require('/lib/xp/auth');

exports.handle401 = function (req) {
    var body = generateLoginPage();

    return {
        status: 401,
        contentType: 'text/html',
        body: body
    };
};

exports.get = function (req) {
    var body = generateLoginPage(req.params.redirect);

    return {
        contentType: 'text/html',
        body: body
    };
};

exports.logout = function (req) {
    authLib.logout();

    return {
        redirect: req.params.redirect
    };
};

exports.authFilter = function (req) {
    log.info('Auth filter. Invoked only when user is not authenticated');
};

function generateLoginPage(redirectUrl) {
    var authConfig = authLib.getIdProviderConfig();
    var title = authConfig.title || "User Login";
    return '<html><head></head><body><h1>' + title + '</h1></body></html>';
};