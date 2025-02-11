const huntingButton = document.getElementById("hunting-link");
const container = document.getElementById("info-container"); 

huntingButton.addEventListener('click', () => {
    let header = document.getElementById("info-header")
    header.textContent = `${huntingButton.textContent}`

    const smallInfoContainer = document.createElement("div"); 
    container.appendChild(smallInfoContainer); 

    const infoHeader = document.createElement("h4")
    smallInfoContainer.appendChild(infoHeader);
    infoHeader.textContent = "Info";
    infoHeader.style.color = 'white'; 

    const huntingTimeHeader = document.createElement("h4")
    smallInfoContainer.appendChild(huntingTimeHeader);
    huntingTimeHeader.textContent = "Jakttider";
    huntingTimeHeader.style.color = 'white'; 


    
})