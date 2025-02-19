
import { map } from "./Maps/MapRoutes.js";

const huntingButton = document.getElementById("hunting-link");
const weatherButton = document.getElementById("weather-link");
const gearButton = document.getElementById("gear-link");
const natureButton = document.getElementById("nature-link");
const container = document.getElementById("info-container"); 

document.addEventListener("DOMContentLoaded", () => {
    huntingButton.click(); 
});

async function getSpottedAnimals() {
    const body = {
        "geographics": {
            "areas": [
                {
                    "areaType": "County",
                    "featureId": "23"
                }
            ]
        },
        "date": {
            "startDate": "2025-01-01",
            "endDate": "2025-02-13",
            "dateFilterType": "OverlappingStartDateAndEndDate"
        },
        "taxon": {
            "ids": [4000107],
            "includeUnderlyingTaxa": true,
            "taxonListOperator": "Filter"
        }
    };

    try {
        const response = await fetch('https://api.artdatabanken.se/species-observation-system/v1/Observations/Search?skip=0&take=100&validateSearchFilter=false&translationCultureCode=sv-SE&sensitiveObservations=false', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'X-Api-Version': '1.5',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': '58b55cda916d480a8a23773a69a25115',
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Något gick fel:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Något gick fel med fetch:', error);
        return null;
    }
}



huntingButton.addEventListener('click', () => {
    container.innerHTML = "";
    let header = document.createElement("h3");
    container.appendChild(header)
    header.textContent = `${huntingButton.textContent}`;

    const smallInfoContainer = document.createElement("div");
    container.appendChild(smallInfoContainer);
    smallInfoContainer.classList.add("small-info-container");

    const leftItem = document.createElement("div");
    smallInfoContainer.appendChild(leftItem);
    leftItem.classList.add("left-item");

    const infoHeader = document.createElement("h4");
    leftItem.appendChild(infoHeader);
    infoHeader.textContent = "Info";
    infoHeader.style.color = 'white';

    const infoText = document.createElement("p");
    leftItem.appendChild(infoText);
    infoText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sem et orci eleifend condimentum. Duis ut turpis nec mauris elementum ornare nec eu nisl. Vestibulum quis tincidunt enim, quis dapibus massa. Donec iaculis venenatis augue vitae viverra. Vestibulum pulvinar consequat diam, at faucibus metus consectetur non. Aenean volutpat egestas tellus, eu cursus diam. Nullam et velit faucibus, lobortis nulla vel, feugiat tellus. Nulla et varius elit, a congue est. Proin vel lacus scelerisque, cursus ante eu, fringilla sem. Aliquam elementum tempor placerat. Sed dui nisi, pulvinar in mattis ut, lobortis et nisl. Fusce eu ultrices mauris. Pellentesque accumsan ultricies enim, ac efficitur tortor gravida a.";

    const rightItem = document.createElement("div");
    smallInfoContainer.appendChild(rightItem);
    rightItem.classList.add("right-item");

    const huntingTimeHeader = document.createElement("h4");
    rightItem.appendChild(huntingTimeHeader);
    huntingTimeHeader.textContent = "Jakttider";
    huntingTimeHeader.style.color = 'white';

    const huntingTimeInfoContainer = document.createElement("div");
    rightItem.appendChild(huntingTimeInfoContainer);
    huntingTimeInfoContainer.classList.add("hunting-time-info-container");

    const huntingData = [
        { animal: "Älg", season: "30 jun - 1 okt" },
        { animal: "Vildsvin", season: "1 aug - 31 jan" },
        { animal: "Rådjur", season: "16 aug - 31 jan" },
        { animal: "Bock", season: "16 aug - 31 dec" },
        { animal: "Hare", season: "1 jul - 28 feb" },
        { animal: "Fasan", season: "1 okt - 28 feb" }
    ];

    for (let i = 0; i < huntingData.length; i++) {
        const huntingTimeInfoItem = document.createElement("div");
        huntingTimeInfoContainer.appendChild(huntingTimeInfoItem);
        huntingTimeInfoItem.classList.add("hunting-time-info-item");

        const huntingAnimal = document.createElement("p");
        huntingTimeInfoItem.appendChild(huntingAnimal);
        huntingAnimal.textContent = huntingData[i].animal; 

        const huntingDate = document.createElement("p");
        huntingTimeInfoItem.appendChild(huntingDate);
        huntingDate.textContent = huntingData[i].season; 
    }
});

weatherButton.addEventListener('click', () => {
    container.innerHTML = "";
    let header = document.createElement("h3");
    container.appendChild(header)
    header.textContent = `${weatherButton.textContent}`;

    const smallInfoContainer = document.createElement("div");
    container.appendChild(smallInfoContainer);
    smallInfoContainer.classList.add("small-info-container");

    const smallInfoItem = document.createElement("div");
    smallInfoContainer.appendChild(smallInfoItem);
    smallInfoItem.classList.add("small-info-item")

    const infoText = document.createElement("p");
    smallInfoItem.appendChild(infoText);
    infoText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sem et orci eleifend condimentum. Duis ut turpis nec mauris elementum ornare nec eu nisl. Vestibulum quis tincidunt enim, quis dapibus massa. Donec iaculis venenatis augue vitae viverra. Vestibulum pulvinar consequat diam, at faucibus metus consectetur non. Aenean volutpat egestas tellus, eu cursus diam. Nullam et velit faucibus, lobortis nulla vel, feugiat tellus. Nulla et varius elit, a congue est. Proin vel lacus scelerisque, cursus ante eu, fringilla sem. Aliquam elementum tempor placerat. Sed dui nisi, pulvinar in mattis ut, lobortis et nisl. Fusce eu ultrices mauris. Pellentesque accumsan ultricies enim, ac efficitur tortor gravida a."

})

gearButton.addEventListener('click', () => {
    container.innerHTML = "";
    let header = document.createElement("h3");
    container.appendChild(header)
    header.textContent = `${gearButton.textContent}`;

    const smallInfoContainer = document.createElement("div");
    container.appendChild(smallInfoContainer);
    smallInfoContainer.classList.add("small-info-container");

    const leftItem = document.createElement("div");
    smallInfoContainer.appendChild(leftItem);
    leftItem.classList.add("left-item")


    const infoHeader = document.createElement("h4");
    leftItem.appendChild(infoHeader);
    infoHeader.textContent = "Info";
    infoHeader.style.color = 'white';

    const infoText = document.createElement("p");
    leftItem.appendChild(infoText);
    infoText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt sem et orci eleifend condimentum. Duis ut turpis nec mauris elementum ornare nec eu nisl. Vestibulum quis tincidunt enim, quis dapibus massa. Donec iaculis venenatis augue vitae viverra. Vestibulum pulvinar consequat diam, at faucibus metus consectetur non. Aenean volutpat egestas tellus, eu cursus diam. Nullam et velit faucibus, lobortis nulla vel, feugiat tellus. Nulla et varius elit, a congue est. Proin vel lacus scelerisque, cursus ante eu, fringilla sem. Aliquam elementum tempor placerat. Sed dui nisi, pulvinar in mattis ut, lobortis et nisl. Fusce eu ultrices mauris. Pellentesque accumsan ultricies enim, ac efficitur tortor gravida a."

    const rightItem = document.createElement("div");
    smallInfoContainer.appendChild(rightItem);
    rightItem.classList.add("right-item")


    const gearListHeader = document.createElement("h4");
    rightItem.appendChild(gearListHeader);
    gearListHeader.textContent = "Packlista";
    gearListHeader.style.color = 'white';

    const gearListContainer = document.createElement("div");
    rightItem.appendChild(gearListContainer);
    gearListContainer.classList.add("gear-list-container");

    const items = ["Karta", "Kompass", "Ficklampa", "Vattenflaska", "Stövlar"];

    for (let i = 0; i < items.length; i++) {
        const gearListItem = document.createElement("p");
        gearListContainer.appendChild(gearListItem);
        gearListItem.classList.add("gear-list-item");
        gearListItem.textContent = items[i]; 
    }



})

natureButton.addEventListener('click', async () => {
    container.innerHTML = "";
    let header = document.createElement("h3");
    container.appendChild(header);
    header.textContent = `${natureButton.textContent}`;

    const smallInfoContainer = document.createElement("div");
    container.appendChild(smallInfoContainer);
    smallInfoContainer.classList.add("small-info-container");

    const leftItem = document.createElement("div");
    smallInfoContainer.appendChild(leftItem);
    leftItem.classList.add("left-item");

    const infoHeader = document.createElement("h4");
    leftItem.appendChild(infoHeader);
    infoHeader.textContent = "Info";
    infoHeader.style.color = 'white';

    const infoText = document.createElement("p");
    leftItem.appendChild(infoText);
    infoText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit...";

    const rightItem = document.createElement("div");
    smallInfoContainer.appendChild(rightItem);
    rightItem.classList.add("right-item");

    const spottedAnimalsHeader = document.createElement("h4");
    rightItem.appendChild(spottedAnimalsHeader);
    spottedAnimalsHeader.textContent = "Observerade djur att vara uppmärksam på";
    spottedAnimalsHeader.style.color = 'white';

    const animalListContainer = document.createElement("div");
    rightItem.appendChild(animalListContainer);
    animalListContainer.classList.add("animal-list-container");

    let animals = [];
    animals = await getSpottedAnimals();
    console.log(animals.records);

    const dangerousAnimals = ["älg", "björn", "varg"];
    const filteredAnimals = animals.records.filter(record =>
        dangerousAnimals.includes(record.taxon.vernacularName)
    );

    const animalLocations = [];

    filteredAnimals.forEach(record => {
        const animalListItem = document.createElement("div");
        animalListContainer.appendChild(animalListItem);
        animalListItem.classList.add("animal-list-item");

        const spottedAnimal = document.createElement("p");
        animalListItem.appendChild(spottedAnimal);
        spottedAnimal.textContent = `${record.taxon.vernacularName}`;

        const spottedAnimalLocation = document.createElement("p");
        animalListItem.appendChild(spottedAnimalLocation);
        spottedAnimalLocation.textContent = `${record.location.municipality.name}`;

        const lat = parseFloat(record.location?.decimalLatitude);
        const lon = parseFloat(record.location?.decimalLongitude);

        if (!isNaN(lat) && !isNaN(lon)) {
            const spottedDate = new Date(record.event.startDate);
            const formattedDate = spottedDate.toLocaleString();

            animalLocations.push({ lat, lon, animalName: record.taxon.vernacularName, location: record.location.municipality?.name, spottedDate: formattedDate });

            L.marker([lat, lon])
                .addTo(map)
                .bindPopup(`<b>${record.taxon.vernacularName}</b><br>${record.location.municipality?.name || "Okänd plats"}<br>Spotted on: ${formattedDate}`);
        } else {
            console.warn(`Invalid coordinates for ${record.taxon.vernacularName}`);
        }
    });

    /*Manage show on map */
    const showOnMapButton = document.createElement("button");
    rightItem.appendChild(showOnMapButton);
    showOnMapButton.textContent = "Visa alla på karta";
    showOnMapButton.classList.add("show-map-button");

    let mapContainer;  
    let newMap;       

    showOnMapButton.addEventListener('click', () => {
     
        if (mapContainer) {
          
            rightItem.removeChild(mapContainer);
            mapContainer = null;  
        } else {
            mapContainer = document.createElement("div");
            mapContainer.style.width = "100%";
            mapContainer.style.height = "400px";
            rightItem.appendChild(mapContainer);

            newMap = L.map(mapContainer).setView([0, 0], 2);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(newMap);

            animalLocations.forEach(location => {
                L.marker([location.lat, location.lon])
                    .addTo(newMap)
                    .bindPopup(`<b>${location.animalName}</b><br>${location.location}<br>Observerad: ${location.spottedDate}`);
            });

            // Fit the map to the bounds of all the markers
            const latitudes = animalLocations.map(location => location.lat);
            const longitudes = animalLocations.map(location => location.lon);

            const southWest = new L.LatLng(Math.min(...latitudes), Math.min(...longitudes));
            const northEast = new L.LatLng(Math.max(...latitudes), Math.max(...longitudes));

            const bounds = new L.LatLngBounds(southWest, northEast);

            newMap.fitBounds(bounds);
        }
    });
});
