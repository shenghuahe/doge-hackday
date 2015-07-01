var map = null;

/**
 * Currently shown routes.
 */
var lines = [];

function enableMap() {
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'biniamasnake.277e71e8',
        accessToken: 'pk.eyJ1IjoiYmluaWFtYXNuYWtlIiwiYSI6IjQ4MTBkMzEzODRmMjc4MDlhNDg2YjM5ZGYwNGI3ODAyIn0.VySGSb0I-di8iVRADpf-pg'
    }).addTo(map);
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

        var carIcon = L.icon({
            iconUrl: 'car_icon.png',
            iconAnchor: [22, 10]
        });

        var animatedMarker = L.animatedMarker(line.getLatLngs(), {
            icon: carIcon
        });

        map.addLayer(animatedMarker);

    });
}
