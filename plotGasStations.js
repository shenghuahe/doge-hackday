function plotGasStations() {

    var gasStationIcon = L.icon({
        iconUrl: 'GasStation-Icon.png',

        iconSize:     [29, 45], // size of the icon
        iconAnchor:   [22, 39], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var petrolStationOne = L.marker([44.506279, 25.987052], {icon: gasStationIcon}).bindPopup('Station One'),
        petrolStationTwo = L.marker([44.487162, 26.018423], {icon: gasStationIcon}).bindPopup('Station Two');

    var petrolStations = L.layerGroup([petrolStationOne, petrolStationTwo]);

    petrolStations.addTo(map);
}