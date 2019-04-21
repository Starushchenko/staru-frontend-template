$(document).ready(function() {

	if ($('.js_modal-trigger-zoom')) {
		var zoomModalTrigger = $('.js_modal-trigger-zoom');
		var triggerDataHref = zoomModalTrigger.attr('data-href');
		zoomModalTrigger.attr('href', triggerDataHref);

		zoomModalTrigger.magnificPopup({
			type: 'inline',

			fixedContentPos: false,
			fixedBgPos: true,

			overflowY: 'auto',
			showCloseBtn: false,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'mfp-zoom-in'
		});
	}
});

function closePopup() {
	$.magnificPopup.close();
}