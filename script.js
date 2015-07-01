var map = null;

/**
 * Currently shown routes.
 */
var lines = [];

/**
 * Colours from which we randomly select line/circle/marker colours.
 */
var colours = [
    'red', 'purple', 'green', 'blue',
    'orange', 'pink', 'yellow', 'grey'
];

/**
 * Array pointer for colours.
 */
var _colourMarker = 0;

function enableMap() {
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'biniamasnake.277e71e8',
        accessToken: 'pk.eyJ1IjoiYmluaWFtYXNuYWtlIiwiYSI6IjQ4MTBkMzEzODRmMjc4MDlhNDg2YjM5ZGYwNGI3ODAyIn0.VySGSb0I-di8iVRADpf-pg'
    }).addTo(map);
}

/**
 * Generate a random colour.
 */
function colour() {
    var colour = colours[_colourMarker];

    _colourMarker = (_colourMarker + 1) % colours.length;
    return colour;
}

function bindCoodinatesToMap() {
    $.getJSON('/data/coodinates-by-time.json', function (data) {
        var route = [];
        for (i = 0; i < data.length; i++) {
            var point = new L.LatLng(data[i].values[0].latitude, data[i].values[0].longitude);
            route.push(point);
        }
        var line = new L.Polyline(route, {
            color: 'red',
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1
        });
        var animatedMarker = L.animatedMarker(line.getLatLngs());
        map.addLayer(animatedMarker);

    });
}
