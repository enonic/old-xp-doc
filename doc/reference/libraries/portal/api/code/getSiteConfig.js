var portalLib = require('/lib/xp/portal');
var result = portalLib.getSiteConfig();

log.info('Field value for the current site config = ' + result.Field);
