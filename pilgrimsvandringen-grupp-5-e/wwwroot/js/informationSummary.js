const huntingButton = document.getElementById("hunting-link");
const weatherButton = document.getElementById("weather-link");
const gearButton = document.getElementById("gear-link");
const natureButton = document.getElementById("nature-link");
const container = document.getElementById("info-container"); 

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
    

    const huntingTimeHeader = document.createElement("h4");
    rightItem.appendChild(huntingTimeHeader);
    huntingTimeHeader.textContent = "Jakttider";
    huntingTimeHeader.style.color = 'white'; 

    const huntingTimeInfoContainer = document.createElement("div");
    rightItem.appendChild(huntingTimeInfoContainer);
    huntingTimeInfoContainer.classList.add("hunting-time-info-container");

    for (var i = 0; i < 4; i++) {
        const huntingTimeInfoItem = document.createElement("div");
        huntingTimeInfoContainer.appendChild(huntingTimeInfoItem);
        huntingTimeInfoItem.classList.add("hunting-time-info-item");

        const huntingAnimal = document.createElement("p");
        huntingTimeInfoItem.appendChild(huntingAnimal);
        huntingAnimal.textContent = "Älg";

        const huntingDate = document.createElement("p");
        huntingTimeInfoItem.appendChild(huntingDate);
        huntingDate.textContent="30 jun - 1 okt"
    }


    
})

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

    for (var i = 0; i < 5; i++) {
        const gearListItem = document.createElement("p");
        gearListContainer.appendChild(gearListItem);
        gearListItem.classList.add("gear-list-item");
        gearListItem.textContent = "Karta"
    }



})

natureButton.addEventListener('click', () => {
    container.innerHTML = "";
    let header = document.createElement("h3");
    container.appendChild(header)
    header.textContent = `${natureButton.textContent}`;

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
    gearListHeader.textContent = "Giftiga svampar";
    gearListHeader.style.color = 'white';

    const gearListContainer = document.createElement("div");
    rightItem.appendChild(gearListContainer);
    gearListContainer.classList.add("gear-list-container");

    for (var i = 0; i < 5; i++) {
        const gearListItem = document.createElement("p");
        gearListContainer.appendChild(gearListItem);
        gearListItem.classList.add("gear-list-item");
        gearListItem.textContent = "Flugsvamp"
    }



})