var view = resolve('view/fruit.html');

var mustacheLib = require('/lib/xp/mustache');
var result = mustacheLib.render({
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
