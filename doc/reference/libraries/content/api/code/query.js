var lib = require('/lib/xp/content');

var result = lib.query({
            "start": 0,
            "count": 3,
            "sort": "_modifiedTime DESC, geodistance('p1', 'p2')",
            "query": "type = 'article' AND fulltext('myField', 'searching for cheese', 'AND') ",
            "contentTypes": [
                "article",
                "comment"
            ],
            "aggregations": {
                "genders": {
                    "terms": {
                        "field": "gender",
                        "order": "_count asc",
                        "size": 2
                    },
                    "aggregations": {
                        "prices": {
                            "histogram": {
                                "field": "price",
                                "interval": 50,
                                "extendedBoundMin": 0,
                                "extendedBoundMax": 500,
                                "minDocCount": 0,
                                "order": "_key desc"
                            }
                        }
                    }
                },
                "by_month": {
                    "date_histogram": {
                        "field": "init_date",
                        "interval": "1M",
                        "minDocCount": 0,
                        "format": "MM-yyy"
                    }
                },
                "price_ranges": {
                    "range": {
                        "field": "price",
                        "ranges": [
                            {"to": 50},
                            {"from": 50, "to": 100},
                            {"from": 100}
                        ]
                    }
                },
                "my_date_range": {
                    "date_range": {
                        "field": "date",
                        "format": "MM-yyy",
                        "ranges": [
                            {"to": "now-10M/M"},
                            {"from": "now-10M/M"}
                        ]
                    }
                },
                "time_stats": {
                    "stats": {
                        "field": "item_count"
                    }
                }
            }
        });

log.info('Found ' + result.total + ' number of contents');

for (var i = 0; i < result.contents.length; i++) {
    var content = result.contents[i];
    log.info('Content ' + content._name + ' loaded');
}


