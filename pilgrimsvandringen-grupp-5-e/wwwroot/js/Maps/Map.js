
import { greenIcon } from "../Maps/Markers.js";
import { redIcon } from "../Maps/Markers.js";
import { vadstalle, vindskydd, utedass, varning, fartyg } from "../Maps/Markers.js";
import { redFlag } from "../Maps/Markers.js";
import { yellowFlag } from "../Maps/Markers.js";
import { blueFlag } from "../Maps/Markers.js";
import { greenFlag } from "../Maps/Markers.js";


let sleep = [];
let wc = [];
let boat = [];
let waterCrossing = [];

let test = [
    { name: 'Indalsleden', color: 'blue', trailIcon: blueFlag, startPoint: [62.4855311, 17.3244924], endPoint: [63.3160351, 12.1017855] },
    { name: 'Karboleleden', color: 'yellow', trailIcon: yellowFlag, startPoint: [60.565463, 17.4374], endPoint: [62.80033, 13.056407] },
    { name: 'st-olovsleden', color: 'red', trailIcon: redFlag, startPoint: [62.386808961183199, 17.315430391312599], endPoint: [63.427208, 10.396927] }
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

        
        L.geoJSON(lineStringFeature, {
            style: { color: 'Green', weight: 4 }
        }).addTo(map);

        
        L.marker([startCoordinates[1], startCoordinates[0]], { icon: greenFlag }).addTo(map).bindPopup('Start: Jämt-norge-leden');
        L.marker([endCoordinates[1], endCoordinates[0]], { icon: greenFlag }).addTo(map).bindPopup('Slut: Jämt-norge-leden');

    } catch (error) {
        console.error('Error loading or displaying the route:', error);
        alert('Could not load the route.');
    }
}

async function fetchAndDisplayGPXRoute(trailName, trailColor, startPoint, endPoint, startIcon) { //FIX: add popup for icons
    try {
        const gpxLayer = new L.GPX(`/js/Maps/Gpx/${trailName}.gpx`, {
            async: true,
            marker_options: {
                startIconUrl: '../images/MapImages/hide.png',
                endIconUrl: '../images/MapImages/hide.png',
                shadowUrl: '../images/MapImages/hide.png',
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

        L.marker([startPoint[0], startPoint[1]], { icon: startIcon }).addTo(map).bindPopup(`Start: ${trailName}`);
        L.marker([endPoint[0], endPoint[1]], { icon: startIcon }).addTo(map).bindPopup(`Slut:${trailName}`);

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
    test.forEach(trail=> fetchAndDisplayGPXRoute(trail.name, trail.color, trail.startPoint, trail.endPoint, trail.trailIcon));
}


// Define projections
const sweref99tm = "+proj=utm +zone=33 +ellps=GRS80 +units=m +no_defs";
const wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";

// Function to convert coordinates
function convertToLatLng(easting, northing) {
    const [longitude, latitude] = proj4(sweref99tm, wgs84, [easting, northing]);
    return { lat: latitude, lng: longitude };
}

function getCategoryIcon(category) {
    switch (category.toLowerCase()) {
        case 'vadställe':
            return vadstalle;
        case 'vindskydd':
            return vindskydd;
        case 'dass':
            return utedass;
        case 'varning':
            return varning;
        case 'slogbod':
            return vindskydd;
        case 'båtöverfart':
            return fartyg;
        case 'färjeläge':
            return fartyg;
        case 'pån':
            return fartyg;
    }
}

async function DisplayPointOfInterests() {
    try {
        const response = await fetch('/PointsOfInterests/GetAll');
        if (!response.ok) throw new Error('Failed to load POIs.');

        const points = await response.json();


        points.forEach(point => {
            // Extract Easting and Northing by removing the prefix 'E' and 'N'
            const easting = parseFloat(point.longitude.substring(1));
            const northing = parseFloat(point.latitude.substring(1));

            const icon = getCategoryIcon(point.category);
            // Convert to latitude and longitude
            const { lat, lng } = convertToLatLng(easting, northing);

            // Add marker to the map
            //const marker = L.marker([lat, lng], { icon: icon }).addTo(map);
            //marker.bindPopup(`
            //    <b>${point.name}</b><br>
            //    ${point.category}<br>
            //    ${point.description}
            //`);
            addToMap();
            addToCategoryList(point.category);
        });

    } catch (error) {
        console.error('Error fetching POIs:', error);
        document.body.innerText = 'Error fetching POIs';
    }
}

function addToMap() {
    const marker = L.marker([lat, lng], { icon: icon }).addTo(map);
    marker.bindPopup(`
                <b>${point.name}</b><br>
                ${point.category}<br>
                ${point.description}
            `);
}


function addToCategoryList(category) {
    switch (category.toLowerCase()) {
        case 'vadställe':
            waterCrossing.push(point)
            return vadstalle;
        case 'vindskydd':
            return vindskydd;
        case 'dass':
            return utedass;
        case 'varning':
            return varning;
        case 'slogbod':
            return vindskydd;
        case 'båtöverfart':
            return fartyg;
        case 'färjeläge':
            return fartyg;
        case 'pån':
            return fartyg;
    }
}



addUserLocation();
fetchAndDisplayRoute();
addAllTrails();
DisplayPointOfInterests();
