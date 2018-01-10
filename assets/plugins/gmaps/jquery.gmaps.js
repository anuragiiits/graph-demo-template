$(document).ready(function() {
    // Simple map
    map = new GMaps({
        el: '#gmaps-simple',
        lat: 13.5555593,
        lng: 80.0268804,
        zoom: 5,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false
    });
});