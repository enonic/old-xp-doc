var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var util = require('utilities');

exports.get = function(req) {
    var view = resolve('country.html');
    var model = {};

    model.content = portal.getContent();
    util.log(model.content);

    model.mainRegion = model.content.page.regions.main;

    var body = thymeleaf.render(view, model);

    return {
        body: body
    }
};