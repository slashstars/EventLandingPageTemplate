function initialize(lat, lon) {
    var customMapType = new google.maps.StyledMapType([
        {
            stylers: [
                {hue: '#A5B5B6'},
                {gamma: 0.9},
                {weight: 0.1}
            ]
        },

        {
            featureType: 'water',
            stylers: [{color: '#890000'}]
        }
    ], {
        name: 'Custom Style'
    });
    var customMapTypeId = 'custom_style';

    var myLatLng = {lat: lat, lng: lon};
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        disableDefaultUI: true,
        center: new google.maps.LatLng(lat, lon),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Sofia Technical University'
    });
    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}

//google.maps.event.addDomListener(window, 'load', initialize);