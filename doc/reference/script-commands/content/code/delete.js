var result = execute('content.delete', {
    key: '/my/content'
});

if (result) {
    log.info('Content deleted');
} else {
    log.info('Content was not found');
}
