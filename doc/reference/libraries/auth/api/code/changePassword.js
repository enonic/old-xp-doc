var auth = require('/lib/xp/auth');
var user = auth.getUser();

auth.changePassword({
    userKey: user.key,
    password: 'new-secret-password'
});
