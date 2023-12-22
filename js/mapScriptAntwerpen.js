var map = L.map('Antwerpenmap').setView([51.2114437,4.4395059], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.218389, 4.417128]).addTo(map);
// define rectangle geographical bounds