
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
    container.appendChild(header);
    header.textContent = `${huntingButton.textContent}`;

    const smallInfoContainer = document.createElement("div");
    container.appendChild(smallInfoContainer);
    smallInfoContainer.classList.add("small-info-container");

    const infoContainer = document.createElement("div");
    smallInfoContainer.appendChild(infoContainer);
    infoContainer.classList.add("info-container");

    const createInfoSection = (headerText, paragraphText) => {
        const leftItem = document.createElement("div");
        infoContainer.appendChild(leftItem);
        leftItem.classList.add("left-item");


        const infoHeader = document.createElement("h4");
        leftItem.appendChild(infoHeader);
        infoHeader.textContent = headerText;
        infoHeader.style.color = 'white';

        const infoText = document.createElement("p");
        leftItem.appendChild(infoText);
        infoText.textContent = paragraphText;

        return leftItem;
    };

    createInfoSection(
        "• Jakt och allemansrätten",
        "I Sverige är jakt en reglerad aktivitet som styrs av jaktlagstiftningen och viltvårdsförordningen. Även om allemansrätten ger frihet att vistas i naturen, innebär den inte rätt att jaga eller störa vilt."
    );

    createInfoSection(
        "• Jaktsäsonger och säkerhet",
        "Under hösten och vintern pågår många jaktperioder, särskilt för älg och rådjur. Jakten kan ske i stora områden, och det är bra att vara uppmärksam på jaktlagens skyltar eller informera sig om jakt i området."
    );

    createInfoSection(
        "• Hundar och jaktområden",
        "Om du har med dig hund i skogen ska den vara kopplad mellan 1 mars och 20 augusti för att skydda viltet. Under jaktsäsongen kan lösa hundar uppfattas som en störning av jägare, så det är bäst att hålla hunden under kontroll."
    );

    createInfoSection(
        "Jaktförbud och skyddade områden",
        "I nationalparker och naturreservat kan särskilda jaktregler gälla, och ibland råder totalförbud mot jakt. Kontrollera lokala regler innan du ger dig ut i ett område."
    );

    createInfoSection(
        "• Respekt och samspel",
        "Om du stöter på jägare i skogen, visa respekt genom att hålla avstånd och undvika att gå rakt igenom jaktmarker. Om du hör skott eller ser jaktskyltar kan det vara klokt att välja en annan rutt."
    );


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

    const createInfoSection = (headerText, paragraphText) => {
        const smallInfoItem = document.createElement("div");
        smallInfoItem.classList.add("small-info-item");

        const infoHeader = document.createElement("h4"); 
        infoHeader.textContent = headerText;
        smallInfoItem.appendChild(infoHeader);

        const infoText = document.createElement("p"); 
        infoText.textContent = paragraphText;
        smallInfoItem.appendChild(infoText);

        return smallInfoItem;
    };


    const section1 = createInfoSection("Snö och kyla även på sommaren", "ven om det är sommar kan det fortfarande vara snö på högre högar, och det kan till och med snöa i juni, särskilt i fjällen. Var beredd på att vädret kan förändras snabbt, och att det kan bli mycket kallt, även om det är varmt på låga högar.");
    container.appendChild(section1);

    const section2 = createInfoSection("Vandring på is", "I vissa delar av Sverige, särskilt i norr, kan du gå på is fram till april och ibland även i maj, beroende på vädret. Tänk på att isen kan vara mycket osäker, och det är viktigt att vara försiktig när du vandrar över sjöar eller floder.");
    container.appendChild(section2);

   
    const section3 = createInfoSection("Midnattssol och Vintermörker", "I de norra delarna av Sverige kan du uppleva midnattssol under sommaren, vilket innebär att det är ljust dygnet runt. Under vintermånaderna kan det vara mörkt nästan hela dygnet. Planera din vandring utifrån detta och ta med dig tillräcklig belysning om du ska vara ute på kvällarna.");
    container.appendChild(section3);
});

gearButton.addEventListener('click', () => {
    container.innerHTML = "";
    let header = document.createElement("h3");
    container.appendChild(header)
    header.textContent = `${gearButton.textContent}`;

    const smallInfoContainer = document.createElement("div");
    container.appendChild(smallInfoContainer);
    smallInfoContainer.classList.add("small-info-container");

    const infoContainer = document.createElement("div");
    smallInfoContainer.appendChild(infoContainer);
    infoContainer.classList.add("info-container"); 

    const leftItem = document.createElement("div");
    infoContainer.appendChild(leftItem);
    leftItem.classList.add("left-item");

    const infoHeader = document.createElement("h4");
    leftItem.appendChild(infoHeader);
    infoHeader.textContent = "• Välj rätt utrustning";
    infoHeader.style.color = 'white';

    const infoText = document.createElement("p");
    leftItem.appendChild(infoText);
    infoText.textContent = `Kläder och skor ska tåla vind och väta. Kläderna bör kunna bäras i flera skikt för att enkelt anpassas efter väder och temperatur. Bra utrustning behöver inte vara dyr och en klokt packad ryggsäck bör inte vara för tung. På Fjällsäkerhetsrådets webbplats finns checklistor över lämplig utrustning för olika aktiviteter i olika typer av fjällmiljöer.`;

    const leftItem2 = document.createElement("div");
    infoContainer.appendChild(leftItem2);
    leftItem2.classList.add("left-item");

    const infoHeader2 = document.createElement("h4");
    leftItem2.appendChild(infoHeader2);
    infoHeader2.textContent = "• Meddela färdväg och beräknad återkomst";
    infoHeader2.style.color = 'white';

    const infoText2 = document.createElement("p");
    leftItem2.appendChild(infoText2);
    infoText2.textContent = `Det är viktigt att någon känner till er planerade färdväg och när ni räknar med att komma tillbaka. Meddela en vän, en släkting eller någon annan som kan slå larm om ni inte skulle återvända som planerat.`;

    const leftItem3 = document.createElement("div");
    infoContainer.appendChild(leftItem3);
    leftItem3.classList.add("left-item");

    const infoHeader3 = document.createElement("h4");
    leftItem3.appendChild(infoHeader3);
    infoHeader3.textContent = "• Anpassa din fjälltur efter vädret";
    infoHeader3.style.color = 'white';

    const infoText3 = document.createElement("p");
    leftItem3.appendChild(infoText3);
    infoText3.textContent = `Vädret kan slå om hastigt i fjällen. Ta del av lokala och aktuella väderprognoser via radion eller SMHI:s webbplats. Vädertjänster erbjuds även som applikationer för mobiltelefoner. Respektera alltid utfärdade fjällvädervarningar. Den 15 december börjar lavinprognoser att publiceras.`;

    const leftItem5 = document.createElement("div");
    infoContainer.appendChild(leftItem5);
    leftItem5.classList.add("left-item");

    const infoHeader5 = document.createElement("h4");
    leftItem5.appendChild(infoHeader5);
    infoHeader5.textContent = "• Följ markerade leder";
    infoHeader5.style.color = 'white';


    const infoText5 = document.createElement("p");
    leftItem5.appendChild(infoText5);
    infoText5.textContent = `Vinterlederna öppnar normalt först i februari. Det finns hundratals mil markerade vinterleder i fjällen, med bland annat avståndsmarkeringar, övernattningsstugor och hjälptelefoner. De flesta gör klokt i att följa lederna, och är ett säkrare alternativ om ni av någon anledning skulle behöva hjälp.`;

    const leftItem6 = document.createElement("div");
    infoContainer.appendChild(leftItem6);
    leftItem6.classList.add("left-item");

    const infoHeader6 = document.createElement("h4");
    leftItem6.appendChild(infoHeader6);
    infoHeader6.textContent = "• Ta med karta och kompass";
    infoHeader6.style.color = 'white';

    const infoText6 = document.createElement("p");
    leftItem6.appendChild(infoText6);
    infoText6.textContent = `Se till att ha med en karta som är aktuell. Kompass behövs framförallt utanför markerade leder. Användning av kompass kräver dock kunskaper – instruktioner finns på Fjällsäkerhetsrådets webbplats. Komplettera gärna med GPS eller mobila applikationer vilka erbjuder möjlighet till att kunna orientera sig, men tänk på att batterier laddas ur snabbt när det är kallt.`;

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
    infoHeader.textContent = "Renar på fjället";
    infoHeader.style.color = 'white';

    const infoText = document.createElement("p");
    leftItem.appendChild(infoText);
    infoText.textContent = "Som besökare på fjället och i alla områden där renskötsel bedrivs är det viktigt att du inte stör eller skrämmer renen.";

    const infoList = document.createElement("ul");
    leftItem.appendChild(infoList);


    const tip1 = document.createElement("li");
    tip1.textContent = "När du ser renar på fjället, stanna upp, sätt dig ner och var tyst. Låt renarna passera i sin egen takt.";
    infoList.appendChild(tip1);

    const tip2 = document.createElement("li");
    tip2.textContent = "Gå aldrig rakt mot en betande ren – ta en omväg om det behövs.";
    infoList.appendChild(tip2);

    const tip3 = document.createElement("li");
    tip3.textContent = "Drar sig flocken undan? Då har du redan kommit för nära.";
    infoList.appendChild(tip3);

    const tip4 = document.createElement("li");
    tip4.textContent = "Lyfter renen på huvudet och svansen samtidigt som den spetsar öronen? Det är ett tydligt tecken på stress och att du bör backa.";
    infoList.appendChild(tip4);

    const tip5 = document.createElement("li");
    tip5.textContent = "Håll alltid hunden kopplad och nära intill dig. Renen upplever instinktivt hunden som ett hot.";
    infoList.appendChild(tip5);

    const tip6 = document.createElement("li");
    tip6.textContent = "Fråga gärna på närmaste turistbyrå, fjällstation eller fjällstuga var renarna befinner sig just nu och undvik de områdena.";
    infoList.appendChild(tip6);

    const tip7 = document.createElement("li");
    tip7.textContent = "Visa även respekt och hänsyn mot renskötarna. Håll dig ur vägen och låt dem sköta sitt jobb. Du befinner dig på deras arbetsplats.";
    infoList.appendChild(tip7);

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

    async function initializeMap() {
       
        let animals = await getSpottedAnimals();
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

                animalLocations.push({
                    lat,
                    lon,
                    animalName: record.taxon.vernacularName,
                    location: record.location.municipality?.name,
                    spottedDate: formattedDate
                });
            } else {
                console.warn(`Invalid coordinates for ${record.taxon.vernacularName}`);
            }
        });

        const showOnMapButton = document.createElement("button");
        rightItem.appendChild(showOnMapButton);
        showOnMapButton.textContent = "Visa alla på karta";
        showOnMapButton.classList.add("show-map-button");

        let mapContainer = null;
        let newMap = null;

        showOnMapButton.addEventListener('click', () => {
            if (mapContainer) {
                rightItem.removeChild(mapContainer);
                mapContainer = null;
                newMap = null; 
            } else {
                mapContainer = document.createElement("div");
                mapContainer.style.width = "100%";
                mapContainer.style.height = "400px";
                rightItem.appendChild(mapContainer); 

                newMap = L.map(mapContainer).setView([62.9, 13.53], 8);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '© OpenStreetMap contributors'
                }).addTo(newMap);

                animalLocations.forEach(location => {
                    L.marker([location.lat, location.lon])
                        .addTo(newMap)
                        .bindPopup(`<b>${location.animalName}</b><br>${location.location}<br>Observerad: ${location.spottedDate}`);
                });

                if (animalLocations.length > 0) {
                    const bounds = L.latLngBounds(animalLocations.map(loc => [loc.lat, loc.lon]));
                    newMap.fitBounds(bounds);
                }
            }
        });
    }

    initializeMap();

});
