$(document).ready(function() {
  $(".events-slider").owlCarousel({
    items: 4,
    loop: true,
    smartSpeed: 300,
    lazyLoad: true,
    nav: false,
    dots: false,
    navText: ['', ''],
    autoHeight: true,
    responsive:{
	    0:{
	      items: 1,
	      nav: true
	    },
	    770:{
	      items: 1,
	      dots: false
	    },
	    899: {
	      items: 2
	    },
	    1299: {
	      items: 3
	    },
	    1669: {
	    	items: 4
	    }
	  }
  });

});