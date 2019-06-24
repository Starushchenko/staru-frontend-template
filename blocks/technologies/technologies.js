// needs slick.js
document.addEventListener('DOMContentLoaded', function () {
	$('.technologies__list').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.technologies__list').on('wheel', (function (e) {
		e.preventDefault();

		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}
	}));
});