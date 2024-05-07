// Initialize Leaflet map
var map = L.map('nymap').setView([40.58195989520956, -74.10183349954038], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers to the map
var marker1 = L.marker([40.57440999440993, -74.11546985003544]).addTo(map);
marker1.bindPopup("<b>La Strada Italian Restaurant</b><br>My favorite Italian food place.").openPopup();

var marker2 = L.marker([40.58261285361214, -74.12302251676003]).addTo(map);
marker2.bindPopup("<b>High Rock Park</b><br>My favorite trail on Staten Island.").openPopup();

var marker3 = L.marker([40.57613950267241, -74.12379090325251]).addTo(map);
marker3.bindPopup("<b>FDNY Engine 165 Ladder 85</b><br>This firehouse is always the starting point for my walk.").openPopup();

var marker4 = L.marker([40.58096673060801, -74.12403125025611]).addTo(map);
marker4.bindPopup("<b>Walker Pond</b><br>Nice pond that I always pass by.").openPopup();

var marker5 = L.marker([40.58096673060801, -74.12403125025611]).addTo(map);
marker4.bindPopup("<b>Walker Pond</b><br>Nice pond that I always pass by.").openPopup();

// Load the GeoJSON line file for day time route
fetch('https://peterfiorica.github.io/Peterfiorica/PeterFiorica_daytimeroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'blue', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.9 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading day time route GeoJSON file:', error);
    });

// Load the GeoJSON line file for night time route
fetch('https://Peterfiorica.github.io/Peterfiorica/PeterFiorica_nightimeroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'green', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.9 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading night time route GeoJSON file:', error);
    });
