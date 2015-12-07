var auth = require('/lib/xp/auth');

var user = auth.createUser({
    userStore: 'myUserStore',
    name: 'userName',
    displayName: 'User display name',
    email: 'userName@enonic.com'
});