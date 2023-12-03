/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/


var map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.23009, 4.41616]).addTo(map);
// define rectangle geographical bounds
var bounds = [[51.23041, 4.4155],[51.22991, 4.41675] ];

// create an orange rectangle
L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);

// zoom the map to the rectangle bounds
map.fitBounds(bounds);









// bepaal de rechthoek rondom het gebouw van AP

// kleur de rechthoek in met de rode AP-kleur

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
