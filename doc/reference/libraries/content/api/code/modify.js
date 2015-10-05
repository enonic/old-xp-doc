function editor(c) {
    c.displayName = 'Modified';
    c.language = 'en';
    c.data.myCheckbox = false;
    c.data["myTime"] = "11:00";
    return c;
}

var contentLib = require('/lib/xp/content');

var result = contentLib.modify({
    key: '/features/js-libraries/mycontent',
    editor: editor
});

if (result) {
    log.info('Content modified. New title is ' + result.displayName);
} else {
    log.info('Content not found');
}
