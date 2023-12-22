var map = L.map('Limburgmap').setView([50.9665456,5.3923186], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([50.982751, 5.702712]).addTo(map);
var marker = L.marker([50.991831, 5.193064]).addTo(map);