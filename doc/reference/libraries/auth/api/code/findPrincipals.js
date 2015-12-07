var auth = require('/lib/xp/auth');

var results = auth.findPrincipals({
    type: 'user',
    userStore: 'user-store',
    start: 0,
    count: 10,
    name: 'user1'
});
