(function($) {
  
  "use strict";

  // Preloader
  function stylePreloader() {
    $('body').addClass('preloader-deactive');
  }






  // Swipper Slider JS
  var homeSlider = new Swiper('.home-slider-container', {
    slidesPerView : 1,
    loop: false,
    spaceBetween : 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.home-slider-container .swiper-button-next',
      prevEl: '.home-slider-container .swiper-button-prev',
    }
  });

  var teamSlider = new Swiper('.team-slider-container', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200:{
          slidesPerView : 3
      },

      992:{
          slidesPerView : 3
      },

      768:{
          slidesPerView : 2,
          centeredSlides: false

      },

      576:{
          slidesPerView : 1
      },

      0:{
          slidesPerView : 1
      }
    }
  });


  

  var testimonialSlider = new Swiper('.testimonial-slider-container', {
    slidesPerView : 1,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.testimonial-slider-container .swiper-button-next',
      prevEl: '.testimonial-slider-container .swiper-button-prev',
    }
  });
  
  
  



  //Tilt Animation
  /*$('.tilt-animation').tilt({
    base: window,
    reset: !0, 
    scale: 1.04, 
    reverse: !1, 
    max: 15, 
    perspective: 3e3, 
    speed: 4e3
  });*/

  //Scroll To Top
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
 
  // Fancybox Js
  $('.lightbox-image').fancybox();
  
   //Video Popup 
   $('.play-video-popup').fancybox();
   
$(".mobile-right-menu .menu-item-has-children").addClass('has-sub');
  $(".mobile-right-menu .menu-item-has-children").find('ul').removeClass('sub-menu').addClass('sub');  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  /*varWindow.on('load', function() {
    AOS.init({
      once: true,
    });
    stylePreloader();
    isotopePortfolio();
  });*/
  

})(window.jQuery);

jQuery(document).ready(function() {
	jQuery('.toggle-menu').jPushMenu();
});


jQuery(document).ready(function() {

			if (jQuery('li').hasClass('has-sub')) {

				jQuery("li.has-sub").append("<span>&#x25BC;</span>");
					jQuery('ul li.has-sub span').click(function (e) {
							e.preventDefault();
							//jQuery('ul li.menu-item-has-children ul').slideToggle();
							jQuery(this).closest('li').find('ul').slideToggle();
						});
				}
		});