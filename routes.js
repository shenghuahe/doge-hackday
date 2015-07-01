function createRoute(source, destination) {

    routeControl = L.Routing.control({
        waypoints: [
            source,
            destination
        ],
        fitSelectedRoutes: false
    }).addTo(map);
}

function removeRoute() {

    routeControl.setWaypoints([],[]);
}
