/**
 * Created by piratos on 8/24/14.
 */

$(document).ready(function(){
    //creating the map
    var center = new google.maps.LatLng(36.795, 10.15);
    var options = {
        center: center,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var carte = new google.maps.Map($('#map-canvas')[0], options);
    // Creating the search box and link it to the UI element.
    var input =($('#searchBox')[0]);
    carte.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox((input));
    google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // For each place, get the icon, place name, and location.
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      bounds.extend(place.geometry.location);
    }
       if (bounds.getNorthEast().equals(bounds.getSouthWest())) { //better fix for zoom issue
       var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
       var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
       bounds.extend(extendPoint1);
       bounds.extend(extendPoint2);
    }
    //zooming to the selected place
    carte.fitBounds(bounds);
    });
    //caching pervious marker to delete it before adding new one
    var marker_tmp;
    //adding marker on right click listener
    google.maps.event.addListener(carte, 'rightclick', function(event){
        if (marker_tmp) {
        marker_tmp.setMap(null);
        };
        var lat = event.latLng.lat();
        var lon = event.latLng.lng();
        $('#id_position_0').val(lat);
        $('#id_position_1').val(lon);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lon),
            map: carte,
            icon: '/static/img/danger2.png',
            draggable: true
        });

        marker_tmp = marker ;
       // $.get('/map/add/', {lat: lat, lon: lon}, function(data){});
            google.maps.event.addListener(marker_tmp, 'drag', function() {
        $('#id_position_0').val(marker_tmp.getPosition().lat());
        $('#id_position_1').val(marker_tmp.getPosition().lng());
        console.log("draggend "+marker_tmp.getPosition());

    });
    });


});