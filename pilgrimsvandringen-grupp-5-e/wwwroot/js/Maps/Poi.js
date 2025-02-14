import { vadstalle, vindskydd, utedass, varning, fartyg } from "../Maps/Markers.js";

export let categoryMarkers = {
    sleep: [],
    wc: [],
    boat: [],
    waterCrossing: [],
    varningArray: []
};

// Define projections
const sweref99tm = "+proj=utm +zone=33 +ellps=GRS80 +units=m +no_defs";
const wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";

// Function to convert coordinates
export function convertToLatLng(easting, northing) {
    const [longitude, latitude] = proj4(sweref99tm, wgs84, [easting, northing]);
    return { lat: latitude, lng: longitude };
}

export function getCategoryIcon(category) {
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

export async function DisplayPointOfInterests(map, selectedTrailId = null) { 
    try {
        const response = await fetch('/PointsOfInterests/GetAll');
        if (!response.ok) throw new Error('Failed to load POIs.');

        const points = await response.json();

        let filteredPoints; 

        if (selectedTrailId) { 
            // Only show POIs for this specific trail 
            filteredPoints = points.filter(point => point.trailId === selectedTrailId); 
        } else { 
            // Show all POIs (default map) 
            filteredPoints = points; 
        } 
     

        filteredPoints.forEach(point => {
            const easting = parseFloat(point.longitude.substring(1));
            const northing = parseFloat(point.latitude.substring(1));

            const icon = getCategoryIcon(point.category);
            const { lat, lng } = convertToLatLng(easting, northing);

            // Add marker to the map
            const marker = L.marker([lat, lng], { icon: icon }).addTo(map);
            marker.bindPopup(`
                <b>${point.name}</b><br>
                ${point.category}<br>
                ${point.description}
            `);

            addToCategoryList(point, marker);
        });

    } catch (error) {
        console.error('Error fetching POIs:', error);
        document.body.innerText = 'Error fetching POIs';
    }
}



export function addToCategoryList(point, marker) {
    const category = point.category.toLowerCase();


    switch (category) {
        case 'vadställe':
            categoryMarkers['waterCrossing'].push(marker);
            break;
        case 'vindskydd':
            categoryMarkers['sleep'].push(marker);
            break;
        case 'dass':
            categoryMarkers['wc'].push(marker);
            break;
        case 'varning':
            categoryMarkers['varningArray'].push(marker);
            break;
        case 'slogbod':
            categoryMarkers['sleep'].push(marker);
            break;
        case 'båtöverfart':
            categoryMarkers['boat'].push(marker);
            break;
        case 'färjeläge':
            categoryMarkers['boat'].push(marker);
            break;
        case 'pån':
            categoryMarkers['boat'].push(marker);
            break;
    }
}

export function toggleCategory(map, category) {
    if (!categoryMarkers[category]) return;

    categoryMarkers[category].forEach(marker => {
        if (map.hasLayer(marker)) {
            map.removeLayer(marker);
        } else {
            marker.addTo(map);
        }
    });
}
