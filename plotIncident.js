function plotWarning() {

    var warningIcon = L.icon({
        iconUrl: 'warning_icon.png',
        iconAnchor: [0, 50],
        popupAnchor:  [-3, -76]
    });

<<<<<<< HEAD
    var warningOne = L.marker([44.510572, 26.007994], {icon: warningIcon}).addTo(map);

    warningOne.bindPopup("<b>Warning</b><br>Accident has been reported in this road. Please slow down.").openPopup();
}
=======
    var warningOne = L.marker([44.508403, 26.005945], {icon: warningIcon}).addTo(map);

    warningOne.bindPopup("<b>Warning</b><br>A Texas grandmother, in a horrific crash that trapped her inside her car for two days, survived two days by soaking her T-shirt in a nearby pond to get water.");
}
>>>>>>> 6a52f9a703ce43880dcae916d16d756157ceab28
