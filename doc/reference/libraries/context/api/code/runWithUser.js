var authLib = require('/lib/xp/auth');
var contextLib = require('/lib/xp/context');

var result = contextLib.runWith({
    user: 'su'
}, authLib.getUser);

if (result) {
    log.info('Current user name: ' + result.displayName);
} else {
    log.info('No current user');
}