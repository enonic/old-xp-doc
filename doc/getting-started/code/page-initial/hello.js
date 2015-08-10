var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function(req) {
    var view = resolve('hello.html');
    var model = {};

    var body = thymeleaf.render(view, model);

    return {
        body: body
    }
};