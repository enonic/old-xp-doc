var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function(req) {
    var view = resolve('hello.html');
    var model = {};

    var body = thymeleaf.render(view, model);

    return {
        contentType: 'text/html',
        status: 200,
        body: body
    }
};