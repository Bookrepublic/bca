//= require jquery
//= require jquery_ujs
//= require medium-editor
//= require iacquire-medium-editor-insert-plugin
//= require slick
//= require bigSlide
//= require animatescroll
//= require headroom.js
//= require_tree .


$(document).ready(function() {
  var header = $(".header").headroom({});

  $(".Nav__animatescroll, .cl-effect-1").on('click', function(event) {
      event.preventDefault();
      var href = $(this).children().attr("href");
      $(href).animatescroll({
        onScrollEnd:function(){
          $('html, body').animate({ scrollTop: $(href).offset().top + 1 }, -1);
        }
      });
  })

});


var editor = new MediumEditor('.editable');
$('.editable').bind('input propertychange', function() {
  $("#post_" + $(this).attr("data-field-id")).val($(this).html());
});

$(function () {
  $(".editable").mediumInsert({
    editor: editor,
    addons: {
      images: {
        imagesUploadScript: "/images/post_image"
      }
    }
  })
});

$(document).ready(function(){
  var slick_slider = $('.slider').slick({
    dots: true,
    infinite: true,
/*    autoplay: true,
    autoplaySpeed: 2000,
    speed: 400,
        adaptiveHeight: true,       
*/
    fade: true,
    cssEase: 'linear'
  });

  $(".menu_slick").click(function(event) {
      event.preventDefault();
      var num_slide = $(this).attr("href");
      slick_slider.slickGoTo(num_slide);
  })
});

$(document).ready(function() {
    $('.menu-link').bigSlide();
});


// maps
// When the window has finished loading create our google map below
$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(45.462045, 9.168835), // Milano Bookrepublic

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#ffe100"}]},{"featureType":"poi.attraction","elementType":"labels.text.fill","stylers":[{"color":"#ee970f"},{"visibility":"on"}]},{"featureType":"poi.attraction","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"},{"lightness":"75"},{"saturation":"-2"},{"gamma":"4.92"},{"weight":"0.92"}]},{"featureType":"poi.attraction","elementType":"labels.icon","stylers":[{"visibility":"on"},{"invert_lightness":true},{"gamma":"4.92"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(45.462045, 9.168835),
        map: map,
        title: 'Bookrepublic The Contant Agency'
    });
  };
});



//$(document).ready(function() {
  //if($('#slidr-id').length > 0) {
    //var s = slidr.create('slidr-id', {
      //transition: 'fade',
      //keyboard: true,
      //touch: true
    //});
    //s.add('h', ['one', 'two', 'one']);
    //s.start();
  //}
//});
