function createRoute(source, destination) {

    routeControl = L.Routing.control({
        waypoints: [
            source,
            destination
        ],
        useZoomParameter: false
    }).addTo(map);
}

function removeRoute() {

    routeControl.setWaypoints([],[]);
}