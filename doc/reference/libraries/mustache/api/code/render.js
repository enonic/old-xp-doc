var view = resolve('view/fruit.html');

var mustache = require('/lib/xp/mustache');
var result = mustache.render({
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
