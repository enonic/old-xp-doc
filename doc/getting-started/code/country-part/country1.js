var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function

exports.get = function(req) {
    var view = resolve('country.html');
    var model = {};
    var country = {};

    var content = portal.getContent();

    country.name = content.displayName;
    country.description = content.data.description;
    country.population = content.data.population;

    var tags = content.data.tags;

    // Prevent <ul> from rendering when there are no tags.
    if (tags) {
        // If there is only one tag, it must be converted to an array.
        if (!Array.isArray(tags)) {
            tags = [tags];
        }
    } else {
        tags = null;
    }

    country.tags = tags;

    // Todo: Temporary hack to prevent contents without pictures from producing broken images on the page.
    var imageUrl = portal.imageUrl({
        id: content.data.photo,
        scale: 'width(300)'
    });

    if(content.data.photo) {
        country.imageUrl = imageUrl;
    }

    model.country = country;

    var body = thymeleaf.render(view, model);

    return {
        body: body
    }
};