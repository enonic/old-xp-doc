var portalLib = require('/lib/xp/portal');
var result = portalLib.getComponent();

log.info('Current component name = ' + result.name);
