var view = resolve('view/fruit.html');

var thymeleafLib = require('/lib/xp/thymeleaf');
var result = thymeleafLib.render({
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
