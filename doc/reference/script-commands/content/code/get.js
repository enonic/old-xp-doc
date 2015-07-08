var result = execute('content.get', {
    key: '/my/content'
});

if (result) {
    log.info('Display Name = ' + result.displayName);
} else {
    log.info('Content was not found');
}
