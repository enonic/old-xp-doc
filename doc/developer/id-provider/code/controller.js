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

exports.login = function (req) {

    // If this function was called with a parameter "redirect", a validation of the origin is performed. 
    // The result of the validation is passed to the ID Provider as a request property "validTicket".
    var redirectUrl = req.validTicket ? req.params.redirect : undefined;

    var body = generateLoginPage(redirectUrl);
    return {
        contentType: 'text/html',
        body: body
    };
};

exports.logout = function (req) {

    // Calling "authLib.logout()" will log out the current user from Enonic XP.
    authLib.logout();

    // If this function was called with a parameter "redirect", a validation of the origin is performed. 
    // The result of the validation is passed to the ID Provider as a request property "validTicket".
    var redirectUrl = req.validTicket ? req.params.redirect : undefined;

    if (redirectUrl) {
        return {
            redirect: redirectUrl
        };
    } else {
        var body = generateLoginPage();
        return {
            contentType: 'text/html',
            body: body
        };
    }
};

exports.autoLogin = function (req) {
    log.info('Auto login. Invoked only when user is not authenticated');
};

function generateLoginPage(redirectUrl) {
    var authConfig = authLib.getIdProviderConfig();
    var title = authConfig.title || "User Login";
    var redirectionLink = redirectUrl ? '<a href="' + redirectUrl + '">Return</a>' : '';
    return '<html><head></head><body><h1>' + title + '</h1>' + redirectionLink + '</body></html>';
};