// Initialize Leaflet map
var map = L.map('nymap').setView([40.58195989520956, -74.10183349954038], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.57440999440993, -74.11546985003544]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>La Strada Italian Restaurant</b><br>This is a Leaflet map.").openPopup();
