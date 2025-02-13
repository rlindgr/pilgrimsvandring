import { addUserLocation, fetchAndDisplayRoute, fetchAndDisplayGPXRoute, trailsInformation } from "./MapRoutes.js";
import { DisplayPointOfInterests, toggleCategory } from "./Poi.js";



const map = L.map('map').setView([62.9, 13.53], 8);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);



addUserLocation(map);
fetchAndDisplayRoute(map);
trailsInformation.forEach(trail => {
    fetchAndDisplayGPXRoute(map, trail.name, trail.color, trail.startPoint, trail.endPoint, trail.trailIcon);
});

DisplayPointOfInterests(map);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleSleep').addEventListener('click', () => toggleCategory('sleep'));
    document.getElementById('toggleWc').addEventListener('click', () => toggleCategory('wc'));
    document.getElementById('toggleBoat').addEventListener('click', () => toggleCategory('boat'));
    document.getElementById('toggleWaterCrossing').addEventListener('click', () => toggleCategory('waterCrossing'));
    document.getElementById('toggleVarningArray').addEventListener('click', () => toggleCategory('varningArray'));
});
