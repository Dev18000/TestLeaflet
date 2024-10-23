// LeafletMap.js

export function initializeLeafletMap(startCoordinates, endCoordinates) {
    var map = L.map('map').setView(startCoordinates, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.fr/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.Routing.control({
        waypoints: [
            L.latLng(startCoordinates),
            L.latLng(endCoordinates)
        ],
        routeWhileDragging: true
    }).addTo(map);
}
