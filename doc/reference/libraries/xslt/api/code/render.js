var view = resolve('view/fruit.xsl');
var model = {
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
};

var xslt = require('/lib/xp/xslt');
var result = xslt.render(view, model);
