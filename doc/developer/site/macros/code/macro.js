// Example usage: [currentUser defaultText="Anonymous"/]
var authLib = require('/lib/xp/auth');
var portalLib = require('/lib/xp/portal');

exports.macro = function (context) {
    var defaultText = context.params.defaultText;

    var user = authLib.getUser();
    var body = '<span>' + (user ? user.displayName : defaultText) + '</span>';

    var doc = context.document; // HTML document containing the current macro
    var lineCount = doc.split(/\r\n|\r|\n/).length;
    if (lineCount <= 1) {
        return {
            body: ''
        }
    }

    return {
        body: body,
        pageContributions: {
            headEnd: [
                '<link href="' + portalLib.assetUrl({path: 'css/current-user.css'}) + '"/>'
            ]
        }
    }
};