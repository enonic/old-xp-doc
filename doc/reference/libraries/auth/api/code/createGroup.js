var auth = require('/lib/xp/auth');

var group = auth.createGroup({
    userStore: 'myUserStore',
    name: 'groupName',
    displayName: 'Group display name'
});