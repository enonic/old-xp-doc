var portal = require('/lib/xp/portal');
var result = portal.getSiteConfig();

log.info('Field value for the current site config = ' + result.Field);
