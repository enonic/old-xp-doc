var portal = require('/lib/xp/portal'); // usually at the beginning of the file
// ...
var requestUri = portal.pageUrl({
    type: 'absolute',
    params: request.params
});