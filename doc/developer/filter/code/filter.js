exports.responseFilter = function (req, res) {
    var trackingScript = '<script src="http://some.site/js/tracking.js"></script>';

    if (!res.pageContributions.bodyEnd) {
        res.pageContributions.bodyEnd = [];
    }
    res.pageContributions.bodyEnd.push(trackingScript);

    if (req.params.debug === 'true') {
        res.applyFilters = false; // skip other filters
    }

    return res;
};
