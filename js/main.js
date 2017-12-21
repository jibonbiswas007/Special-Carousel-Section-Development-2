(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
    	$('.featured-list').owlCarousel({
		    loop:true,
		    nav:false,
		    dots:true,
		    autoplay: false,
		    smartSpeed: 2000,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		})
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));