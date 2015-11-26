var contentLib = require('/lib/xp/content');
var contextLib = require('/lib/xp/context');

function getNumberOfContents() {
    return {
        total: contentLib.query({count: 0}).total
    }
}

var result = contextLib.run({
    branch: 'master'
}, getNumberOfContents);

if (result) {
    log.info('Number of contents on master: ' + result.total);
}