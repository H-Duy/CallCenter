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

	jQuery('.call-history h2.title-history').click(function(){
		jQuery('.call-history .list-call').slideToggle();
	});

	jQuery('.call-histories').show();

	jQuery('.title-histories').click(function(){
		jQuery('.call-histories').slideToggle();
	});
});

jQuery(window).load(function(){

});