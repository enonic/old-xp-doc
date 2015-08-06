// in 5.x, using 'portal.getSite' script command
var site = execute('portal.getSite');


// in 6.0, using 'portal' library and 'getSite' function
var portal = require('/lib/xp/portal'); // usually at the beginning of the file
// ...
var site = portal.getSite();
