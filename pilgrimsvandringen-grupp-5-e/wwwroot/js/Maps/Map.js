
var greenIcon = L.icon({
    iconUrl: '../images/MapImages/leaf-green.png',
    shadowUrl: '../images/MapImages/leaf-shadow.png',
    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});




if (navigator.geolocation) { 
            navigator.geolocation.getCurrentPosition(function (position) { 

                var userLat = position.coords.latitude; 
                var userLng = position.coords.longitude; 

                var map = L.map('map').setView([userLat, userLng], 13); 

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
                    maxZoom: 19, 
                    attribution: '© OpenStreetMap contributors' 
                }).addTo(map); 
                L.marker([userLat, userLng]).addTo(map) 
                    .bindPopup('<b>Du är här!</b>').openPopup(); 

                L.marker([62.8624, 13.4330], { icon: greenIcon }).addTo(map); //Only for test


            }, function () {
                alert('Kunde inte hämta din plats'); 
                var map = L.map('map').setView([51.505, -0.09], 13); 
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
                    maxZoom: 19, 
                    attribution: '© OpenStreetMap contributors' 
                }).addTo(map); 
            }); 

        } else { 

        alert('Din plats stöds inte av din webbläsare.'); 
}

