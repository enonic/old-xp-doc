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

var thymeleaf = require('/lib/xp/thymeleaf');
var result = thymeleaf.render(view, model);
