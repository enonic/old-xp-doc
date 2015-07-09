var lib = require('/lib/xp/content');

var result = lib.query({
    start: 0,
    count: 100,
    query: "type = 'article' AND fulltext('myField', 'searching for cheese', 'AND')",
    sort: "modifiedTime DESC, geodistance('p1', 'p2')",
    contentTypes: [
        "mymodule:article",
        "mymodule:comment"
    ],
    aggregations: {
        genders: {
            terms: {
                field: "gender",
                order: "_count asc",
                size: 2
            }
        },
        by_month: {
            date_histogram: {
                field: "init_date",
                interval: "1m",
                minDocCount: 0
            }
        }
    }
});

log.info('Found ' + result.total + ' number of contents');

for (var i = 0; i < result.contents.length; i++) {
    var content = result.contents[i];
    log.info('Content ' + content._name + ' loaded');
}
