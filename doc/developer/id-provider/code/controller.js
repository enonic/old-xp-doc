var authLib = require('/lib/xp/auth');

exports.login = function (req) {
    var authConfig = authLib.getIdProviderConfig();
    var title = authConfig.title || "User Login";
    return {
        status: 403,
        body: '<html><head></head><body><h1>' + title + '</h1></body></html>',
        contentType: 'text/html'
    };
};

exports.authFilter = function (req) {
    log.info('Auth filter. Invoked only when user is not authenticated');
};

exports.sync = function (req) {
    var userStoreKey = authLib.getUserStore().key;
    log.info('Userstore "' + userStoreKey + '" synchronization');
}

exports.logout = function (req) {
    authLib.logout();
    if (req.params.redirect) {
        return {
            redirect: req.params.redirect
        }
    }
};