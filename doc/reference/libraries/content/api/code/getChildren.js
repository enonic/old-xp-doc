var contentLib = require('/lib/xp/content');

var result = contentLib.getChildren({
    key: '/features/js-libraries/houses',
    start: 0,
    count: 2,
    sort: '_modifiedTime ASC',
    branch: 'draft'
});

log.info('Found ' + result.total + ' number of contents');

for (var i = 0; i < result.hits.length; i++) {
    var content = result.hits[i];
    log.info('Content ' + content._name + ' loaded');
}
