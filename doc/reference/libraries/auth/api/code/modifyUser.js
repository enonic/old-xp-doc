var auth = require('/lib/xp/auth');

function editor(c) {
    c.displayName = 'Modified display name';
    c.email = "new_email@enonic.com";

    return c;
}

var updatedUser = auth.modifyUser({
    key: 'user:enonic:userId',
    editor: editor
});