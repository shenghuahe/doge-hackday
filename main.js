$(document).ready(function () {
    $("#hello").click(function () {
        alert("The paragraph was clicked.");
    });

    map = L.map('map').setView([44.443540000000006, 25.912540000000003], 13);
    enableMap();
    bindCoodinatesToMap();
});
