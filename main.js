$(document).ready(function () {
    $("#hello").click(function () {
        alert("The paragraph was clicked.");
    });

    map = L.map('map').setView([44.498489, 25.996879], 13);
    enableMap();

    startJourney('#start', '/data/coordinates-by-time-1st.json');

    plotGasStations();

    plotWarning();

});
