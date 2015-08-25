var contentLib = require('/lib/xp/content');

var result = contentLib.delete({
    key: '/my/content'
});

if (result) {
    log.info('Content deleted');
} else {
    log.info('Content was not found');
}
