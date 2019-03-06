// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var href = $(this).attr('href');

	// tangkap elemen ybs
	var elemen = $(href);

	// pindah scroll 
	$('html , body').animate({
		scrollTop: elemen.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault(); 

})

// parallax
$(window).scroll(function() {
	var wscroll = $(this).scrollTop();

	// header

	$('.head img').css({
		'transform' : 'translate(0px, '+ wscroll/5 +'%)'
	});

	$('.head p').css({
		'transform' : 'translate(0px, '+ wscroll*1.4 +'%)'
	});

	$('.about p').css({
		'transform' : 'translate(0px, '+ wscroll/12 +'%)'
	});

	// menu
	if( wscroll > $('.menu').offset().top - 300 ){
		$('.menu .thumbnail').each(function(i){
			setTimeout(function(){
				$('.menu .thumbnail').eq(i).addClass('muncul');
			}, 330 * (i+1));
		});
	}


})