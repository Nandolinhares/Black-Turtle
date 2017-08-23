$(document).ready(function(e){
   $(".button-collapse").sideNav();
   $('.carousel.carousel-slider').carousel({fullWidth: true});
   autoplay()   
	function autoplay() {
	    $('.carousel').carousel('next');
	    setTimeout(autoplay, 4500);
	}

	function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
 $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,    
      hover: true, // Activate on hover
      //gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      //alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
});

