/* Open modal by clicking on element that has the same href attribute as modal id attribute */
$(document).ready(function () {
	$('.modal__trigger').magnificPopup({
		type: 'inline',
		closeOnBgClick: true,
		showCloseBtn: false
	});
});