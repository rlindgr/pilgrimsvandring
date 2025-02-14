
document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const weatherCode = document.getElementById("weather-code")
console.log(weatherCode.innerText)

const wmoDescriptions = {
    0: "Klart väder",
    1: "Mestadels klart",
    2: "Delvis molnigt",
    3: "Mulet",
    45: "Dimma och avsättande rimfrost",
    48: "Dimma och avsättande rimfrost",
    51: "Duggregn: Lätt",
    53: "Duggregn: Måttligt",
    55: "Duggregn: Kraftigt",
    56: "Underkylt duggregn: Lätt",
    57: "Underkylt duggregn: Kraftigt",
    61: "Regn: Lätt",
    63: "Regn: Måttligt",
    65: "Regn: Kraftigt",
    66: "Underkylt regn: Lätt",
    67: "Underkylt regn: Kraftigt",
    71: "Snöfall: Lätt",
    73: "Snöfall: Måttligt",
    75: "Snöfall: Kraftigt",
    77: "Snökorn",
    80: "Regnskurar: Lätt",
    81: "Regnskurar: Måttligt",
    82: "Regnskurar: Kraftigt",
    85: "Snöbyar: Lätta",
    86: "Snöbyar: Kraftiga",
    95: "Åskväder: Lätt eller måttligt",
    96: "Åskväder med lätt hagel",
    99: "Åskväder med kraftigt hagel"
};

function translateWMO(weatherCode) {
    return wmoDescriptions[weatherCode] || "Unknown weather condition";
}

// Example: Convert WMO code in JavaScript
console.log(translateWMO(weatherCode)); // Outputs: "Rain: Moderate"
