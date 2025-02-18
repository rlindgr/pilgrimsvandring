import { redFlag, yellowFlag, blueFlag } from "../js/Maps/Markers.js";
import { fetchAndDisplayGPXRoute, fetchAndDisplayRoute } from "../js/Maps/MapRoutes.js";
import { DisplayPointOfInterests, toggleCategory } from "../js/Maps/Poi.js";



let trailsInformation = [
    { id: 4, name: 'Indalsleden', color: 'blue', trailIcon: blueFlag, startPoint: [62.4855311, 17.3244924], endPoint: [63.3160351, 12.1017855] },
    { id: 2, name: 'Karboleleden', color: 'yellow', trailIcon: yellowFlag, startPoint: [60.565463, 17.4374], endPoint: [62.80033, 13.056407] },
    { id: 3, name: 'st-olovsleden', color: 'red', trailIcon: redFlag, startPoint: [62.386808961183199, 17.315430391312599], endPoint: [63.427208, 10.396927] },
    { id: 1, name: 'jamt-norge-leden' }
];

// Initialize the map
const map = L.map('trail').setView([62.9, 13.53], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


// Function to determine and load the correct route baseed on selected ID
function initializeMap() {
    const mapContainer = document.getElementById("trail");

    if (mapContainer && mapContainer.dataset.trailId) {
        const selectedTrailId = parseInt(mapContainer.dataset.trailId, 10); //Ensure ID is an integer

        const selectedTrail = trailsInformation.find(trail => trail.id === selectedTrailId); 

        if (selectedTrail) {
            if (selectedTrail.id === 1) {
                fetchAndDisplayRoute(map); // Load GeoJSON route for trail ID 1
            } else {
                fetchAndDisplayGPXRoute(map, selectedTrail.name, selectedTrail.color, selectedTrail.startPoint, selectedTrail.endPoint, selectedTrail.trailIcon);

            }

        }
       DisplayPointOfInterests(map, selectedTrailId); 
            
        
        
    }
}

initializeMap();

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