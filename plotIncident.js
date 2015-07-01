function plotWarning() {

    var warningIcon = L.icon({
        iconUrl: 'warning_icon.png',
        iconAnchor: [0, 50],
        popupAnchor:  [-3, -76]
    });

    var warningOne = L.marker([44.510572, 26.007994], {icon: warningIcon}).addTo(map);

    warningOne.bindPopup("<b>Warning</b><br>Accident has been reported in this road. Please slow down.").openPopup();
}