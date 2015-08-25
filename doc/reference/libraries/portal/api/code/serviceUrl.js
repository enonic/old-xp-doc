var portalLib = require('/lib/xp/portal');

var url = portalLib.serviceUrl({
    service: 'myservice',
    params: {
        a: 1,
        b: 2
    }
});
