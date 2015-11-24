var contentLib = require('/lib/xp/content');

var result = contentLib.setPermissions({
    key: '/features/js-libraries/mycontent',
    permissions: [{
        principal: 'user:system:anonymous',
        allow: ['READ'],
        deny: []
    }]
});

if (result) {
    log.info('Permissions set on ' + result.displayName);
} else {
    log.info('Content not found');
}