var lib = require('/lib/xp/content');

var result = lib.get({
        key: '123456'
});

if (result) {
    log.info('Display Name = ' + result.displayName);
} else {
    log.info('Content was not found');
}
