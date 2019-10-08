$(document).ready(function(){
	new WOW().init();

	$('.slider_cases').slick({
		arrows: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		centerMode: true,
		infinite: true,
		speed: 500,
		dots: false,
		draggable: false,
		slidesToShow: 3,
		 responsive: [
	  		{
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 1,
		        centerMode: false,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        centerMode: false,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        centerMode: false,
		      }
		    }
		]
	});
    
    $('.btn1').click(function(){
        
        $('.hidden').css("display", "block");
        $('.pop_up').css("display", "block");
        $('body').css("overflow", "hidden");
        $('#oferta').css("display", "none");
        $('.wrap').css("display", "none");
        $('.wrap').css("position", "static");
        $('.overlay').css("display", "block");
        
    });
  
    $('.oferta').click(function(){
        $('.hidden').css("display", "block");
        $('#pop_up').css("display", "none");
        $('#oferta').css("display", "block");
        $('.close-oferta').css("display", "");
        
        $('body').css("overflow", "hidden");
    });
    $('.close-oferta').click(function(){
        $('body').css("overflow", "");
        $('.hidden').css("display", "none");
        
    });

    $('.close-small').click(function(){
        $('body').css("overflow", "");
        $('.hidden').css("display", "none");
        $('.wrap').css("display", "block");
        $('.wrap').css("position", "relative");
    });

    

});