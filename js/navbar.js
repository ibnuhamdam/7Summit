$(window).scroll(function() {
    console.log($(this).scrollTop());
    
    if($(this).scrollTop() > 665)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.custom-navbar').addClass('opaque');
    } else {
        $('.custom-navbar').removeClass('opaque');
    }

    $('.sum p').css({
		'transform' : 'translate('+ $(this).scrollTop()/20+'%, '+ $(this).scrollTop()/4 +'%)'
    });
    
    $('.mit').css({
		'transform' : 'translate(-'+ $(this).scrollTop()/20+'%, '+ $(this).scrollTop()/4 +'%)'
	});
});