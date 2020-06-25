$(document).ready(function() {
  $(".banner-carousel").owlCarousel({
    items: 1,
    loop: true,
    lazyLoad: true,
    smartSpeed: 300,
    nav: true,
    dots: true,
    navText: ['', ''],
    autoHeight: true,
    responsive:{
	    0:{
	      items: 1,
	      nav: false
	    },
	    770:{
	      items: 1,
	      nav: false
	    },
	    1199: {
	      items: 1,
	      nav: true
	    }
	  }
  });

});