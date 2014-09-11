function load_markers(c){
    $.get('/crime/statistique/filter/', function(data){
        create_markers(c, data);
    });
}

function addMarker(map, latlng){
    var theaf = '/static/img/danger2.png';
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        icon: theaf
    });
    google.maps.event.addListener(marker, 'click', function(){
            var form = '<div id="marker_option" >'+
                "c'est une crime ici ! <a href='#'>voire</a> plus de données"+
                '<p><a href="/crime/supprimer/{{1}}">delete</a> this crime</p>'+
                '<p><a href="#">report</a> this crime</p>'+
                '</div>';
            var infoWin = new google.maps.InfoWindow({content: form});
            infoWin.open(map, marker);
    });
    return marker;
}

function create_markers(c, data){
    var l = data.length;
    var markers = [];
    var theaf = '/static/danger2.png';
    for ( var i=0; i<l; i++) {
        var coordenates = data[i][1].split(",");
        var lat = parseFloat(coordenates[0]);
        var lon = parseFloat(coordenates[1]);
        console.log(lat+" "+lon);
        var the_marker = addMarker(c, new google.maps.LatLng(lat, lon));
        markers.push(the_marker);
        google.maps.event.addListener(the_marker, 'click', function(){
            console.log("marker clicked at " + this.getPosition());
        });
    }
    console.log(markers.length);
    var mcoptions = {

    };
    var mc = new MarkerClusterer(c, markers);
}



    var center = new google.maps.LatLng(36.795, 10.15);
    var options = {
        center: center,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var carte = new google.maps.Map($('#map-canvas')[0], options);
    load_markers(carte);






  // Create the search box and link it to the UI element.
    var input =($('#searchBox')[0]);
    //carte.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

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
    carte.fitBounds(bounds);
});
