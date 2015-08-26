var contentLib = require('/lib/xp/content');

var result = contentLib.getChildren({
    key: '/a/b/mycontent',
    start: 5,
    count: 3,
    sort: '_modifiedTime ASC'
});

log.info('Found ' + result.total + ' number of contents');

for (var i = 0; i < result.contents.length; i++) {
    var content = result.contents[i];
    log.info('Content ' + content._name + ' loaded');
}
