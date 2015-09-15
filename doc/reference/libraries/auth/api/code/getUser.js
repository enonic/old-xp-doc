var auth = require('/lib/xp/auth');

var user = auth.getUser();

if (user) {
    log.info('User logged in: %s', user.displayName);
}
