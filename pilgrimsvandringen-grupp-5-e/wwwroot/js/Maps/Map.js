
        if(navigator.geolocation) { 
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

