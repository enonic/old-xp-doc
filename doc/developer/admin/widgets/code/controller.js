var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

function handleGet(req) {
    var view = resolve('ga-report.html');

    var params = {
        googleAnalyticsCssUrl: portal.assetUrl({path: 'css/google-analytics.css'})
    }

    return {
        contentType: 'text/html',
        body: thymeleaf.render(view, params)
    };
}
exports.get = handleGet;
