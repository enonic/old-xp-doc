var portalLib = require('/lib/xp/portal');

var url = portalLib.imageUrl({
    id: '1234',
    scale: 'block(1024,768)',
    filter: 'rounded(5);sharpen()'
});
