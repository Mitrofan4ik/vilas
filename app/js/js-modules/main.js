"use strict"; 
//= js-assets/variables
//= js-assets/functions
$( document ).ready(function() {
	// ATIVE LIST ITEM
	$('.jsNavList').on('click', 'li', function(event) {
		event.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
	});
	// ATIVE LIST ITEM
	// SHOW NAV MENU
	$('.jsNav').on('click', '.jsTrigger', function() {
		var $this = $(this);
		$this.toggleClass('active');
		if ($this.hasClass('active')) {
			$('.jsNavList').show(700);
		} else {
			$('.jsNavList').hide(700);
		}
	});
	// SHOW NAV MENU
	// ABOUT SLIDER
	$('.jsAboutSlider').slick({
		vertical: true,
		infinite: false,
		verticalSwiping: true,
		responsive: [
		    {
		      breakpoint: 441,
		      settings: {
		      	arrows: false,
		        dots: true
		      }
		    }
		  ]
	});
	// ABOUT SLIDER
	// PROJECT MASONRY
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		isFitWidth: true,
		columnWidth: 1
	});
	$grid.imagesLoaded().progress( function() {
	  $grid.masonry('layout');
	});
	// PROJECT MASONRY
	// SHOW MORE
	$('.jsSeeAll').on('click', function() {
		$(this).css('display', 'none');
		$("#jsMasonryGrid .jsGridHidden").show(500);
	});
	// SHOW MORE
	// FOOTER FORM VALIDATE
	$(".jsFormFooter").validate({
	    rules: {
	        confirmation_email: {
	            required: true,
	            email: true,
	        }
	    }
	});
	// FOOTER FORM VALIDATE
	// SMOOTH SCROLL
	$(".nav-list__item").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    // SMOOTH SCROLL
});

$(window).scroll(function() {
	// STICKY HEADER
    if ($(this).scrollTop() > 70) {
        $('.site-header').addClass('is-stuck');
    } else if ($(this).scrollTop() < 70) {
        $('.site-header').removeClass('is-stuck');
    }
    // STICKY HEADER
});
