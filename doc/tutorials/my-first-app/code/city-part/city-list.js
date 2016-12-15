var contentLib = require('/lib/xp/content'); // Import the content library functions
var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function

// Handle the GET request
exports.get = function (req) {

    // Get the part configuration for the map
    var config = portal.getComponent().config;
    var zoom = parseInt(config.zoom) || 10;
    var mapType = config.mapType || 'ROADMAP';

    // Get the site configuration for the app
    var siteConfig = portal.getSiteConfig();
    var googleApiKey = siteConfig.googleApiKey;

    // String that will be inserted to the head of the document
    var googleMaps = '<script src="http://maps.googleapis.com/maps/api/js?key=' + googleApiKey + '"></script>';

    var countryPath = portal.getContent()._path;

    // Get all the country's cities
    var result = contentLib.query({
        start: 0,
        count: 100,
        contentTypes: [
            app.name + ':city'
        ],
        query: "_path LIKE '/content" + countryPath + "/*'",
        sort: "modifiedTime DESC"
    });

    var hits = result.hits;

    var cities = [];

    if (hits.length > 0) {
        googleMaps += '<script>function initialize() {';

        // Loop through the contents and extract the needed data
        for (var i = 0; i < hits.length; i++) {

            var city = {};
            city.name = hits[i].displayName;
            city.location = hits[i].data.location;
            city.population = hits[i].data.population ? 'Population: ' + hits[i].data.population : null;

            cities.push(city);

            if (city.location) {
                city.mapId = 'googleMap' + i;

                googleMaps += 'var center' + i + ' = new google.maps.LatLng(' + city.location + '); ';

                googleMaps += 'var mapProp = {center:center' + i + ', zoom:' + zoom +
                              ', mapTypeId:google.maps.MapTypeId.' + mapType + ', scrollwheel: false };' +
                              'var map' + i + ' = new google.maps.Map(document.getElementById("googleMap' + i + '"),mapProp); ' +
                              'var marker = new google.maps.Marker({ position:center' + i + '}); marker.setMap(map' + i + ');';
            }

        }

        googleMaps += '} google.maps.event.addDomListener(window, "load", initialize);</script>';
    }

    // Prepare the model object that will be passed to the view file
    var model = {
        cities: cities
    };

    // Specify the view file to use
    var view = resolve('city-list.html');

    // Return the response object
    return {
        body: thymeleaf.render(view, model),
        // Put the maps' javascript into the head of the document
        pageContributions: {
            headEnd: googleMaps
        }
    }
};