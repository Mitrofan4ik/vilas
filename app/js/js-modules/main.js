"use strict"; 
//= js-assets/variables
//= js-assets/functions
jQuery( document ).ready(function() {
	// ATIVE LIST ITEM
	$('.jsNavList').on('click', 'li', function(event) {
		event.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
	});
	// ATIVE LIST ITEM
	// SHOW NAV MENU
	$('.jsNav').on('click', '.jsTrigger', function() {
		$(this).toggleClass('active');
		if (true) {
			$('.jsNavList').show(1000);
		} else {
			$('.jsNavList').hide(1000);
		}
	});
	// SHOW NAV MENU
});