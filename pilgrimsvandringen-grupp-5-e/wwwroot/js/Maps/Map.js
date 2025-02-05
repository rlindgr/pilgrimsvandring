
import { greenIcon } from "../Maps/Markers.js";
import { redIcon } from "../Maps/Markers.js";
import { orangeIcon } from "../Maps/Markers.js";


let test = [
    { name: 'Indalsleden', color: 'blue' },
    { name: 'Karboleleden', color: 'yellow' },
    { name: 'st-olavsleden-hiking-2022', color: 'red' }
];
const map = L.map('map').setView([62.9, 13.53], 8);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to fetch and display the user location
function addUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {

                
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;

                
                map.setView([userLat, userLng], 13);

                
                const userMarker = L.marker([userLat, userLng]).addTo(map);
                userMarker.bindPopup('<b>Du är här!</b>').openPopup();
            },
            function () {
                
                alert('Kunde inte hämta din plats');
            }
        );
    } else {
        alert('Din webbläsare stödjer ej plats hämtning');
    }
}

// Function to fetch and display the route from the GeoJSON file
async function fetchAndDisplayRoute() {
    try {
        
        const response = await fetch('/js/Maps/geojson/Jamt-norge-leden.geojson');
        if (!response.ok) {
            throw new Error('Failed to load the GeoJSON file.');
        }

        const geoJsonData = await response.json();

        // Extract nodes and order them by proximity
        const nodes = geoJsonData.features
            .filter(feature => feature.geometry.type === 'Point')
            .map(feature => ({
                id: feature.properties["@id"],
                coordinates: feature.geometry.coordinates
            }));

        // Define the start and end coordinates
        const startCoordinates = [14.9847101, 62.864618];
        const endCoordinates = [12.0746285, 62.9024744];

        // Order nodes by proximity and build a LineString
        const orderedCoordinates = orderNodesByProximity(nodes, startCoordinates, endCoordinates);

        if (orderedCoordinates.length < 2) {
            throw new Error('Not enough coordinates to build a route.');
        }

        const lineStringFeature = {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: orderedCoordinates
            },
            properties: {
                name: 'Jämt-Norgevägen'
            }
        };

        // Display the route on the map
        L.geoJSON(lineStringFeature, {
            style: { color: 'Green', weight: 4 }
        }).addTo(map);

        // Add markers at the start and end points
        L.marker([startCoordinates[1], startCoordinates[0]], { icon: greenIcon }).addTo(map).bindPopup('Start: Jämt-norge-leden');
        L.marker([endCoordinates[1], endCoordinates[0]], { icon: redIcon }).addTo(map).bindPopup('Slut: Jämt-norge-leden');

    } catch (error) {
        console.error('Error loading or displaying the route:', error);
        alert('Could not load the route.');
    }
}

async function fetchAndDisplayGPXRoute(trailName, trailColor ) { //add popup for icons
    try {
        const gpxLayer = new L.GPX(`/js/Maps/Gpx/${trailName}.gpx`, {
            async: true,
            marker_options: {
                startIconUrl: '../images/MapImages/leaf-green.png',
                endIconUrl: '../images/MapImages/leaf-red.png',
                shadowUrl: '../images/MapImages/leaf-shadow.png'
            },
            polyline_options: {
                color: `${trailColor}`,
                weight: 4
            }
        });

        gpxLayer.addTo(map);

        // Adjust map view to fit GPX route bounds
        gpxLayer.on('loaded', function (e) {
            map.fitBounds(e.target.getBounds());
        });

    } catch (error) {
        console.error('Error loading or displaying the GPX route:', error);
        alert('Could not load the GPX route.');
    }
}


// Calculate distances using (Haversine-formel)
function getDistance(coord1, coord2) {
    const [lon1, lat1] = coord1;
    const [lon2, lat2] = coord2;
    const R = 6371e3;

    const φ1 = lat1 * (Math.PI / 180);
    const φ2 = lat2 * (Math.PI / 180);
    const Δφ = (lat2 - lat1) * (Math.PI / 180);
    const Δλ = (lon2 - lon1) * (Math.PI / 180);

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

// Order nodes by proximity
function orderNodesByProximity(nodes, startCoordinates, endCoordinates) {
    if (nodes.length === 0) return [];

    const startNode = nodes.find(node =>
        node.coordinates[0].toFixed(5) === startCoordinates[0].toFixed(5) &&
        node.coordinates[1].toFixed(5) === startCoordinates[1].toFixed(5)
    );

    const endNode = nodes.find(node =>
        node.coordinates[0].toFixed(5) === endCoordinates[0].toFixed(5) &&
        node.coordinates[1].toFixed(5) === endCoordinates[1].toFixed(5)
    );

    if (!startNode || !endNode) {
        throw new Error("Start or end node not found in the GeoJSON data.");
    }

    const orderedRoute = [startNode];
    const unvisitedNodes = nodes.filter(node => node !== startNode);

    let currentNode = startNode;

    while (unvisitedNodes.length > 0) {
        let closestNodeIndex = -1;
        let minDistance = Infinity;

        unvisitedNodes.forEach((node, index) => {
            const distance = getDistance(currentNode.coordinates, node.coordinates);
            if (distance < minDistance) {
                minDistance = distance;
                closestNodeIndex = index;
            }
        });

        const nextNode = unvisitedNodes.splice(closestNodeIndex, 1)[0];
        orderedRoute.push(nextNode);
        currentNode = nextNode;

        if (currentNode === endNode) break;
    }

    return orderedRoute.map(node => node.coordinates);
}


function addAllTrails() {
    test.forEach(trail=> fetchAndDisplayGPXRoute(trail.name, trail.color));
}

// Fetch and display the user's location and the route
addUserLocation();
fetchAndDisplayRoute();
addAllTrails();

