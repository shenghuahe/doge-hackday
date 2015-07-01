var map = null;

function enableMap() {
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'biniamasnake.277e71e8',
        accessToken: 'pk.eyJ1IjoiYmluaWFtYXNuYWtlIiwiYSI6IjQ4MTBkMzEzODRmMjc4MDlhNDg2YjM5ZGYwNGI3ODAyIn0.VySGSb0I-di8iVRADpf-pg'
    }).addTo(map);
}

function startJourney(triggerId, sourceData) {
    $.getJSON(sourceData, function (data) {
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
            iconUrl: 'car_map.png',
            iconAnchor: [0, 60]
        });

        var animatedMarker = L.animatedMarker(line.getLatLngs(), {
            icon: carIcon,
            interval: 2000, // milliseconds,
            autoStart: false,
            onEnd: function () {

                animatedMarker.bindPopup("<b>Low on Fuel</b><br>Refill options are available.").openPopup();

                plotGasStations();

                createRoute(L.latLng(44.49676039292316,25.99407531629961), L.latLng(44.506279, 25.987052))

                $('#continue').click(function () {
                    map.removeLayer(animatedMarker);
                    continueJourney('/data/coordinates-by-time-2nd.json');

                    plotWarning();

                    removeRoute();

                    map.setView([44.498489, 25.996879], 13);
                });
            }
        });


        map.addLayer(animatedMarker);

        //journey control
        $(triggerId).click(function () {
            animatedMarker.start();
        });

    });
}


function continueJourney(sourceData) {
    $.getJSON(sourceData, function (data) {
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
            iconUrl: 'car_map.png',
            iconAnchor: [0, 60]
        });

        var animatedMarker = L.animatedMarker(line.getLatLngs(), {
            icon: carIcon,
            interval: 2000 // milliseconds,
        });

        map.addLayer(animatedMarker);


    });
}

