// Скрипт добавления файлов в форму
(function ($, window, document, undefined) {
	$('.form__fileinput').each(function () {
		var $input = $(this),
			$label = $input.next('label'),
			labelVal = $label.html();

		$input.on('change', function (e) {
			var fileName = '';
			$(this).siblings('.form__fileinput-close').addClass('form__fileinput-close--active');

			if (this.files && this.files.length > 1)
				fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
			else if (e.target.value.length > 30) {
				fileName = (e.target.value.split('\\').pop()).slice(0, 30) + '...';
			} else {
				fileName = e.target.value.split('\\').pop();
			}

			if (fileName)
				$label.find('span').html(fileName);
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

	$('.form__fileinput-close').click(function () {
		$(this).siblings('.form__fileinput').val('');
		$(this).prev().find('span').html('Прикрепить файл');
		$(this).removeClass('form__fileinput-close--active');
	})
})(jQuery, window, document);
