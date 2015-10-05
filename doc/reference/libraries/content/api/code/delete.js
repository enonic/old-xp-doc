var contentLib = require('/lib/xp/content');

var result = contentLib.delete({
    key: '/features/js-libraries/mycontent',
    branch: 'draft'
});

if (result) {
    log.info('Content deleted');
} else {
    log.info('Content was not found');
}
