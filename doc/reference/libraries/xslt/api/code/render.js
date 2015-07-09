var view = resolve('view/fruit.xsl');

var xslt = require('/lib/xp/xslt');
var result = xslt.render({
    view: view,
    model: {
        fruits: [
            {
                name: 'Apple',
                color: 'Red'
            },
            {
                name: 'Pear',
                color: 'Green'
            }
        ]
    }
});
