import { addUserLocation, fetchAndDisplayRoute, addAllTrails } from "./MapRoutes.js";
import { DisplayPointOfInterests, toggleCategory, filterAlternativesForMap } from "./Poi.js";



const map = L.map('map').setView([62.9, 13.53], 8);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


addUserLocation(map);
fetchAndDisplayRoute(map);
addAllTrails(map); 
const existingIcons = filterAlternativesForMap();

function addChekBoxes() {
    const container = document.getElementById("checkboxes-icons");
    container.innerHTML = "";

    existingIcons.forEach(icon => {
        const checkboxWrapper = document.createElement("div");
        checkboxWrapper.classList.add("checkbox-wrapper-1");
        const checkboxInput = document.createElement("input");
        checkboxInput.id = `${icon}`;
        checkboxInput.classList.add("substituted");
        checkboxInput.type = "checkbox";
        checkboxInput.checked = true;

        const label = document.createElement("label");
        label.setAttribute("for", checkboxInput.id);
        label.innerText = `${icon}`;

        checkboxWrapper.appendChild(checkboxInput);
        checkboxWrapper.appendChild(label);
        container.appendChild(checkboxWrapper);

        checkboxInput.addEventListener('change', function () {
            toggleCategory(map, icon, this.checked);
        });
    });
}

DisplayPointOfInterests(map); 

document.addEventListener('DOMContentLoaded', () => {
   
    addChekBoxes();
});