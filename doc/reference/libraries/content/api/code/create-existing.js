var contentLib = require('/lib/xp/content');

try {
    var result = contentLib.create({
        name: 'content_name',
        parentPath: '/some/content/path',
        displayName: 'My content',
        contentType: 'base:unstructured',
        data: {}
    });

    log.info('Content created with id ' + result._id);

} catch (e) {
    if (e.code == 'contentAlreadyExists') {
        errorMsg = 'There is already a content with that name';
    } else {
        errorMsg = 'Unexpected error: ' + e.message;
    }
}
