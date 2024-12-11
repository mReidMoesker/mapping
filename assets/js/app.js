'use strict';

// this was made with an API called 'Leaflet' and GeoLocation. Leaflet is more open source than other programs like MapBox, but doesn't look as nice.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;

      let map = L.map('map').setView([latitude, longitude], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      
      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup('You are here!')

      L.circle([latitude, longitude], {
        color: 'blue',
        radius: 10500
      }).addTo(map);
    },

    function () { // This is for users that haven't accepted location services, where it then sets the location to the default (London, England)
      let map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
    }
  );
}