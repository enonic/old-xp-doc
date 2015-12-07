var auth = require('/lib/xp/auth');

function editor(c) {
    c.displayName = 'Modified display name';

    return c;
}

var updatedGroup = auth.modifyGroup({
    key: 'group:enonic:groupId',
    editor: editor
});