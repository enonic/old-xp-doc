var auth = require('/lib/xp/auth');

// attempt to login with a explicit user store
var result = auth.login({
    user: 'user1@enonic.com',
    password: 'secret',
    userStore: 'enonic'
});

if (result.authenticated) {
    log.info('User logged in: %s', result.user.displayName);
}
