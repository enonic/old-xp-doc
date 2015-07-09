var view = resolve('view/fruit.html');

var thymeleaf = require('/lib/xp/thymeleaf');
var result = thymeleaf.render({
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
