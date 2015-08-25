var contentLib = require('/lib/xp/content');

var result = contentLib.get({
    key: '123456'
});

if (result) {
    log.info('Display Name = ' + result.displayName);
} else {
    log.info('Content was not found');
}
