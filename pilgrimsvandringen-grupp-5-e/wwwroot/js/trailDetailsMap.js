import { redFlag, yellowFlag, blueFlag, greenFlag } from "../Maps/Markers.js";
import { fetchAndDisplayGPXRoute } from "../Maps/Map.js";

let trailsInformation = [
    { name: 'Indalsleden', color: 'blue', trailIcon: blueFlag, startPoint: [62.4855311, 17.3244924], endPoint: [63.3160351, 12.1017855] },
    { name: 'Karboleleden', color: 'yellow', trailIcon: yellowFlag, startPoint: [60.565463, 17.4374], endPoint: [62.80033, 13.056407] },
    { name: 'st-olovsleden', color: 'red', trailIcon: redFlag, startPoint: [62.386808961183199, 17.315430391312599], endPoint: [63.427208, 10.396927] }
];