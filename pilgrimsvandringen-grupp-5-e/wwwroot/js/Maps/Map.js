import { addUserLocation, fetchAndDisplayRoute, addAllTrails } from "./MapRoutes.js";
import { DisplayPointOfInterests, toggleCategory, getWeather } from "./Poi.js";



const map = L.map('map').setView([62.9, 13.53], 8);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


addUserLocation(map);
fetchAndDisplayRoute(map);
addAllTrails(map); 

DisplayPointOfInterests(map); 

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleSleep').addEventListener('change', function () {
        toggleCategory(map, 'sleep', this.checked);
    });
    document.getElementById('toggleWc').addEventListener('change', function () {
        toggleCategory(map, 'wc', this.checked);
    });
    document.getElementById('toggleBoat').addEventListener('change', function () {
        toggleCategory(map, 'boat', this.checked);
    });
    document.getElementById('toggleWaterCrossing').addEventListener('change', function () {
        toggleCategory(map, 'waterCrossing', this.checked);
    });
    document.getElementById('toggleVarningArray').addEventListener('change', function () {
        toggleCategory(map, 'varningArray', this.checked);
    });
});