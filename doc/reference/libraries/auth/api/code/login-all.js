var auth = require('/lib/xp/auth');

// attempt to login to any of the existing user stores
var result = auth.login({
    user: 'user1@enonic.com',
    password: 'secret'
});
