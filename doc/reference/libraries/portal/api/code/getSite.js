var portalLib = require('/lib/xp/portal');
var result = portalLib.getSite();

log.info('Current site name = ' + result._name);
