var lib = require('/lib/xp/portal');
var result = lib.getSite();

log.info('Current site module config = ' + result.moduleConfigs['myModule']);
