
// Absolute path
var lib1 = require('/cms/lib/mylib.js');

// Relative path
var lib2 = require('mylib.js');

// Relative path (same as above)
var lib3 = resolve('./mylib.js');

// Relative path
var lib4 = resolve('../mylib.js');
