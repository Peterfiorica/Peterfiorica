// Initialize Leaflet map
var map = L.map('nymap').setView([40.58195989520956, -74.10183349954038], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers to the map
var marker1 = L.marker([40.57440999440993, -74.11546985003544]).addTo(map);
marker1.bindPopup("<b>La Strada Italian Restaurant</b><br>My favorite Italian food place.<br><img src='https://raw.githubusercontent.com/Peterfiorica/Peterfiorica/main/images/LaStrada.jpeg' alt='Restaurant Image' style='max-width: 100px;'>").openPopup();

var marker2 = L.marker([40.58261285361214, -74.12302251676003]).addTo(map);
marker2.bindPopup("<b>High Rock Park</b><br>My favorite trail on Staten Island.<br><img src='https://raw.githubusercontent.com/Peterfiorica/Peterfiorica/main/images/HighRockPark.jpeg' alt='High Rock Park Image' style='max-width: 100px;'>").openPopup();

var marker3 = L.marker([40.57613950267241, -74.12379090325251]).addTo(map);
marker3.bindPopup("<b>FDNY Engine 165 Ladder 85</b><br>This firehouse is always the starting point for my walk.<br><img src='https://raw.githubusercontent.com/Peterfiorica/Peterfiorica/main/images/FDNY.jpeg' alt='Firehouse Image' style='max-width: 100px;'>").openPopup();

var marker4 = L.marker([40.58096673060801, -74.12403125025611]).addTo(map);
marker4.bindPopup("<b>Walker Pond</b><br>Nice pond that I always pass by.<br><img src='https://github.com/Peterfiorica/Peterfiorica/raw/main/images/walker-pond.jpg' alt='Walker Pond Image' style='max-width: 100px;'>").openPopup();

var marker5 = L.marker([40.57591118383676, -74.12757071055918]).addTo(map);
marker5.bindPopup("<b>Amazing Games TCG</b><br>Cool game store that is right by my walk.").openPopup();

var marker6 = L.marker([40.579010394121354, -74.10943522598659]).addTo(map);
marker6.bindPopup("<b>Grant City Train Station</b><br>This is where my walk begins.<br><img src='images/GrantCityTrain-.jpeg' alt='Grant City Train Station Image' style='max-width: 200px;height:auto;'>").openPopup();

var marker7 = L.marker([40.56632942451111, -74.111637203253]).addTo(map);
marker7.bindPopup("<b>ShopRite</b><br>My grocery store when I go shopping at night.<br><img src='https://github.com/Peterfiorica/Peterfiorica/raw/main/images/Shoprite.jpeg' alt='ShopRite Image' style='max-width: 80px;'>").openPopup();

var marker8 = L.marker([40.57016431405762, -74.10955103578445]).addTo(map);
marker8.bindPopup("<b>Teriyaki One</b><br>Delicious restaurant.<br><img src='https://github.com/Peterfiorica/Peterfiorica/raw/main/images/TerryakiOne.jpeg' alt='Teriyaki One Image' style='max-width: 80px;'>").openPopup();

var marker9 = L.marker([40.574077461086425, -74.11662680325256]).addTo(map);
marker9.bindPopup("<b>New Dorp Train Station</b><br>I normally take this train home after my walk.<br><img src='https://github.com/Peterfiorica/Peterfiorica/raw/main/images/NewDorpTrain.jpeg' alt='New Dorp Train Station Image' style='max-width: 80px;'>").openPopup();

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

        // Corrected marker binding
        marker7.bindPopup("<b>ShopRite</b><br>My grocery store when I go shopping at night.").openPopup();
        marker8.bindPopup("<b>Teriyaki One</b><br>Delicious restaurant.").openPopup();
        marker9.bindPopup("<b>New Dorp Train Station</b><br>I normally take this train home after my walk.").openPopup();
    })
    .catch(error => {
        console.error('Error loading night time route GeoJSON file:', error);
    });
