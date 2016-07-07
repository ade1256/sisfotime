jQuery(function($) {
	//#main-slider
	var slideHeight = $(window).height();
	$('#geser .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#geser .item').css('height',slideHeight);
	});

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 1}, 1000);
		return false;
	});

//Navbar Mandeg
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.navbar-mandeg').addClass('navbar-fixed-top');
		} else {
			$('.navbar-mandeg').removeClass('navbar-static-top');
		}
	});


	//Google Map
	var latitude = $('#google-map').data('latitude')
	var longitude = $('#google-map').data('longitude')
	function initialize_map() {
		var myLatlng = new google.maps.LatLng(latitude,longitude);
		var mapOptions = {
			zoom: 14,
			scrollwheel: false,
			center: myLatlng
		};
		var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
		var contentString = '';
		var infowindow = new google.maps.InfoWindow({
			content: '<div class="map-content"><ul class="address">' + $('.address').html() + '</ul></div>'
		});
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize_map);

});

