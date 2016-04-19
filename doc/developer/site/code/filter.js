exports.responseFilter = function (req, res) {
    var trackingScript = '<script src="http://some.site/js/tracking.js"></script>';

    var bodyEnd = res.pageContributions.bodyEnd;
    if (!bodyEnd) {
        res.pageContributions.bodyEnd = [];
    }
    if (typeof bodyEnd == 'string') {
        res.pageContributions.bodyEnd = [ bodyEnd ];
    }
    res.pageContributions.bodyEnd.push(trackingScript);

    if (req.params.debug === 'true') {
        res.applyFilters = false; // skip other filters
    }

    return res;
};
