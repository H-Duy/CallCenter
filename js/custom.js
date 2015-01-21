jQuery(document).ready(function(){
	$('.top-menu').bxSlider({
		slideWidth: 220,
	    minSlides: 2,
	    maxSlides: 3,
	    slideMargin: 20,
	    pager: false,
	    
	});
	
	jQuery('.accordion-container .title-accordion').click(function(){
		jQuery(this).parent('.accordion-item').toggleClass('item-open')
		jQuery(this).next('.content-accordion').slideToggle();
	});
	
	jQuery('.accordion-container .accordion-item.item-open').find('.content-accordion').show();
});

jQuery(window).load(function(){

});