$(document).ready(function () {
    $("#hello").click(function () {
        alert("The paragraph was clicked.");
    });

    map = L.map('map').setView([44.499989, 25.996879], 14);
    enableMap();

    startJourney('#start', '/data/coordinates-by-time-1st.json');

});
