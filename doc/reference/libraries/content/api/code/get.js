var contentLib = require('/lib/xp/content');

var result = contentLib.get({
    key: '/features/js-libraries/mycontent',
    branch: 'draft'
});

if (result) {
    log.info('Display Name = ' + result.displayName);
} else {
    log.info('Content was not found');
}
