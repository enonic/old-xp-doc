var view = resolve('view/fruit.html');
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

var mustache = require('/lib/xp/mustache');
var result = mustache.render(view, model);
