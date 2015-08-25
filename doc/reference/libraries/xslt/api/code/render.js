var view = resolve('view/fruit.xsl');

var xsltLib = require('/lib/xp/xslt');
var result = xsltLib.render({
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
