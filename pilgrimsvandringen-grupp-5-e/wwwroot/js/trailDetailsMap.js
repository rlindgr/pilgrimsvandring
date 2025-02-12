/*import { redFlag, yellowFlag, blueFlag, greenFlag } from '../js/Maps/Markers.js';*/

import { redFlag } from "../js/Maps/Markers.js";
import { yellowFlag } from "../js/Maps/Markers.js";
import { blueFlag } from "../js/Maps/Markers.js";
import { greenFlag } from "../js/Maps/Markers.js";
/*import { fetchAndDisplayGPXRoute } from "../js/Maps/Map.js";*/

let trailsInformation = [
    { id:4, name: 'Indalsleden', color: 'blue', trailIcon: blueFlag, startPoint: [62.4855311, 17.3244924], endPoint: [63.3160351, 12.1017855] },
    { id:2, name: 'Karboleleden', color: 'yellow', trailIcon: yellowFlag, startPoint: [60.565463, 17.4374], endPoint: [62.80033, 13.056407] },
    { id:3, name: 'st-olovsleden', color: 'red', trailIcon: redFlag, startPoint: [62.386808961183199, 17.315430391312599], endPoint: [63.427208, 10.396927] }
];

const map = L.map('trail').setView([62.9, 13.53], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);



async function fetchAndDisplayGPXRoute(trailName, trailColor, startPoint, endPoint, trailIcon) { //FIX: add popup for icons
    try {
        const gpxLayer = new L.GPX(`/js/Maps/Gpx/${trailName}.gpx`, {
            async: true,
            marker_options: {
                startIconUrl: '/images/MapImages/hide.png',
                endIconUrl: '/images/MapImages/hide.png',
                shadowUrl: '/images/MapImages/hide.png',
                iconSize: [1, 1],
                shadowSize: [1, 1]
            },
            polyline_options: {
                color: `${trailColor}`,
                weight: 4
            }
        });

        gpxLayer.addTo(map);


        gpxLayer.on('loaded', function (e) {
            map.fitBounds(e.target.getBounds());
        });

        L.marker([startPoint[0], startPoint[1]], { icon: trailIcon }).addTo(map).bindPopup(`Start: ${trailName}`);
        L.marker([endPoint[0], endPoint[1]], { icon: trailIcon }).addTo(map).bindPopup(`Slut:${trailName}`);

    } catch (error) {
        console.error('Error loading or displaying the GPX route:', error);
        alert('Could not load the GPX route.');
    }
}

function initializeMap() {

    const mapContainer = document.getElementById("trail");

    // Check if the element exists and has the dataset attribute
    if (mapContainer && mapContainer.dataset.trailId) {
        const selectedTrailId = mapContainer.dataset.trailId;

        
        trailsInformation.forEach(trail => {
            if (trail.id == selectedTrailId) {
                if (trail.id == 1) {
                    
                }
                else {
                    fetchAndDisplayGPXRoute(trail.name, trail.color, trail.startPoint, trail.endPoint, trail.trailIcon);
                }
                
            }
        });
    }

}

initializeMap();

