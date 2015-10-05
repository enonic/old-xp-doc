var contentLib = require('/lib/xp/content');

var result = contentLib.query({
    start: 0,
    count: 2,
    sort: "_modifiedTime DESC, geoDistance('data.location', '59.91,10.75')",
    query: "data.city = 'Oslo' AND fulltext('data.description', 'garden', 'AND') ",
    branch: "draft",
    contentTypes: [
        app.name + ":house",
        app.name + ":apartment"
    ],
    aggregations: {
        floors: {
            terms: {
                field: "data.number_floor",
                order: "_count asc"
            },
            aggregations: {
                prices: {
                    histogram: {
                        field: "data.price",
                        interval: 1000000,
                        extendedBoundMin: 1000000,
                        extendedBoundMax: 3000000,
                        minDocCount: 0,
                        order: "_key desc"
                    }
                }
            }
        },
        by_month: {
            dateHistogram: {
                field: "data.publish_date",
                interval: "1M",
                minDocCount: 0,
                format: "MM-yyyy"
            }
        },
        price_ranges: {
            range: {
                field: "data.price",
                ranges: [
                    {to: 2000000},
                    {from: 2000000, to: 3000000},
                    {from: 3000000}
                ]
            }
        },
        my_date_range: {
            dateRange: {
                field: "data.publish_date",
                format: "MM-yyyy",
                ranges: [
                    {to: "now-10M/M"},
                    {from: "now-10M/M"}
                ]
            }
        },
        price_stats: {
            stats: {
                field: "data.price"
            }
        }
    }
});

log.info('Found ' + result.total + ' number of contents');

for (var i = 0; i < result.hits.length; i++) {
    var content = result.hits[i];
    log.info('Content ' + content._name + ' found');
}
