	// post carousel js //
	$('.active-post-carusel').owlCarousel({
		items: 3,
		loop: true,
		margin: 0,
		dots: false,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			768: {
				items: 1
			},
			800: {
				items: 2
			},
			1200: {
				items: 3
			},
			1380: {
				items: 3
			}
		}
	});
