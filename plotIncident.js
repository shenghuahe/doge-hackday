function plotWarning() {

    var warningIcon = L.icon({
        iconUrl: 'warning_icon.png',
        iconAnchor: [0, 50],
        popupAnchor:  [-3, -76]
    });

    var warningOne = L.marker([44.515472, 26.013841], {icon: warningIcon}).addTo(map);

    warningOne.bindPopup("<b>Warning</b><br>A Texas grandmother, in a horrific crash that trapped her inside her car for two days, survived two days by soaking her T-shirt in a nearby pond to get water.");
}