
/*HEADER*/
$(function(){
	$("div.added").each(function(){
		$('div.added').hide();
	});
});


$(function(){
	$('div.added').each(function(){
		setTimeout(function(){
		$('div.added').show(1000)
	}, 5400);
	});
});

// HOME

$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() >= 150) {


		$('a.home').removeClass('activeHome');

		}

		else {
			$('a.home').addClass('activeHome')
		}
	});
});


// Animated Logo
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() >= 10) {


		$('.imgLogo').addClass('animatedLogo');

		}

		else {
			$('.imgLogo').show(500);
		}
	});
});


$(function(){
	$(window).scroll(function(){
	if($(window).width() > 300) {
		if($(window).scrollTop() >= 200) {
			$('.imgLogo').addClass("animatedLogo");
		}
		else {
			$('.imgLogo').removeClass('animatedLogo');
		}
	}
	});
});


$(function(){
	$(".imgLogo").each(function(){
		$(".imgLogo").addClass("animated pulse")
	});
});


//HOME link
$(function(){
	$(".Home").each(function(){
		$(".Home").css({
			color : 'black',
			fontSize : '18px',
			position: 'relative',
			bottom : '10px'
		});
	});
});


// WORKS

$(function(){
	// $('div.works').hide();
	$(window).scroll(function(){
		if($(window).scrollTop() >= 1700) {
			// $('div.works').addClass('animated bounceIn');
			// $('div.works').show(650);
		}
	});
});



// BACK TO TOP

$(function(){

// ScrollTo

	$('#myBtn').click(function(){
	  $('html, body').animate({
        scrollTop: $("#linkToTop").offset().top
      }, 1500);
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > 500) {

	// Show
			$('#myBtn').css({
				display : 'block'
			});
		}

	// Hide

		else {
			$('#myBtn').css({
				display : 'none'
			});
		}
	});
});


// Contact Slider
$(function(){
	$('a.move').click(function(){
		 $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1300);
	});
});


//ABOUT PAGE
// $(function(){
// 	$(window).scroll(function(){
// 		if($(window).scrollTop() >= 700) {
// 			$('.aboutSec').addClass('h1scrolled animated zoomIn');
// 		}
// 	});
// });


// Function from w3schools for sliding through elements 

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 690) {
      $(this).addClass("slide");
    }
  });
});