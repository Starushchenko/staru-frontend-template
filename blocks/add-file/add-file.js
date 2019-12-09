(function ($, window, document, undefined) {
	$('.add-file').each(function () {
		var $input = $(this),
				$label = $input.next('label'),
				labelVal = $label.html();

		$input.on('change', function (e) {
			var fileName = '';
			$(this).siblings('.add-file__close').addClass('add-file__close--active');

			if (this.files && this.files.length > 1)
				fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
			else if (e.target.value.length > 30) {
				fileName = (e.target.value.split('\\').pop()).slice(0, 30) + '...';
			} else {
				fileName = e.target.value.split('\\').pop();
			}

			if (fileName)
				$label.find('.add-file__label-title').html(fileName);
			else
				$label.html(labelVal);
		});

		// Firefox bug fix
		$input
		.on('focus', function () {
			$input.addClass('js_has-focus');
		})
		.on('blur', function () {
			$input.removeClass('js_has-focus');
		});
	});

	$('.add-file__close').click(function () {
		$(this).siblings('.add-file').val('');
		$(this).prev().find('.add-file__label-title').html('Добавить файл');
		$(this).removeClass('add-file__close--active');
	})
})(jQuery, window, document);