var contentLib = require('/lib/xp/content');

var result = contentLib.getPermissions({
    key: '/features/js-libraries/mycontent'
});

if (result) {
    log.info('Content inherits permissions: ' + result.inheritPermissions);
} else {
    log.info('Content not found');
}