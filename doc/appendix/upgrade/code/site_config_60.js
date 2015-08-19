// in 5.x, using 'portal.getSite' script command and the attribute moduleConfigs
var site = execute('portal.getSite');
var config = site.moduleConfigs[module.name];


// in 6.0, using 'portal' library and 'getSiteConfig' function
var portal = require('/lib/xp/portal'); // usually at the beginning of the file
// ...
var config = portal.getSiteConfig();
