"use strict";

// Range слайдер для цен
$(document).ready(function () {
	var priceRangeSlider = document.getElementById('price-range__slider');
	var priceStartNumber = document.getElementById('price-range-start');
	var priceEndNumber = document.getElementById('price-range-end');

	if (priceRangeSlider) {
		noUiSlider.create(priceRangeSlider, {
			start: [50000, 5000000],
			connect: true,
			range: {
				'min': 50000,
				'max': 5000000
			},
			step: 500,
			format: wNumb({
				decimals: 0,
				thousand: ' ',
				suffix: ' ₽'
			})
		});

		priceRangeSlider.noUiSlider.on('update', function (values, handle) {
			var value = values[handle];

			if (!handle) {
				priceStartNumber.value = value;
			} else {
				priceEndNumber.value = value;
			}
		});

		priceStartNumber.addEventListener('change', function () {
			priceRangeSlider.noUiSlider.set([this.value, null]);
		});

		priceEndNumber.addEventListener('change', function () {
			priceRangeSlider.noUiSlider.set([null, this.value]);
		})
	}
});

// Слайдер отзывов
$(document).ready(function () {
	$('.reviews__slider').slick({
		lazyLoad: 'ondemand',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		draggable: true,
		infinite: true
	});
});

// Маска для инпутов телефона (js_phone-input)
$('.js_phone-input').mask('+7 (000) 000-00-00');

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

// Инициализация lazy load для изображений
$(document).ready(function () {
	$('.lazy').lazy();
});

// Иницализация Fancybox без дополнительных кнопок
$('[data-fancybox]').fancybox({
	buttons: ["close"]
});

// Переключение меню в фильтре каталога TODO (Frontend) Доработать
$(document).ready(function () {
	$('input[name="product-category"]').on('change', function () {
		if ($('.catalog-filter__category-menu[style="display: block;"]')) {
			$('.catalog-filter__category-menu[style="display: block;"]').attr('style', 'display:block;').slideUp(300);
			$('.catalog-filter__category-menu input').prop('checked', false)
		}

		if ($('.catalog-filter__category-menu[data-category=' + $(this).val() + ']')) {
			($(this).prop('checked')) ? $('.catalog-filter__category-menu[data-category=' + $(this).val() + ']').attr('style', 'display:none;').slideDown(300) : '';
		}
	})
});

// Стилизация select
$(document).ready(function () {
	$('.form select').niceSelect();
});

// Слайдеры с превью для товара
$('.product__slider-stage').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	draggable: false,
	accessibility: false,
	asNavFor: '.product__slider-preview',
	swipe: false
});
$('.product__slider-preview').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.product__slider-stage',
	dots: false,
	focusOnSelect: true,
	vertical: true,
	verticalSwiping: true,
});

// Инициализация 	3d-слайдера для товаров
$(document).ready(function () {
	var $threeSixty = $('.threesixty.threesixty--product');
	var $threeSixtyCatalog = $('.threesixty.threesixty--catalog');

	if ($threeSixty) {
		$threeSixty.each(function () {
			$threeSixty.threeSixty({
				dragDirection: 'horizontal',
				useKeys: false,
				draggable: true
			});
		});
	}

	// Запуск 3d-слайдера для карточек в каталоге при наведении
	if ($threeSixtyCatalog) {
		$threeSixtyCatalog.each(function () {
			$(this).on('mouseenter', function () {
				$(this).threeSixty({
					dragDirection: 'horizontal',
					useKeys: false,
					draggable: true
				});
			});
			$(this).on('touchstart', function () {
				$(this).threeSixty({
					dragDirection: 'horizontal',
					useKeys: false,
					draggable: true
				});
			})
		});
	}

	var productSpin;

	// Автовращение 3d-слайдера
	function setProductSpin(slider) {
		productSpin = setInterval(function () {
			slider.nextFrame()
		}, 35);
	}

	// Остановка 3d-слайдера
	function disableProductSpin() {
		clearInterval(productSpin);
	}

	$('.threesixty__play-btn').on('click', function () {
		$(this).toggleClass('threesixty__play-btn--active');
		$('.threesixty').toggleClass('threesixty--spinning');

		if ($(this).hasClass('threesixty__play-btn--active')) {
			setProductSpin($threeSixty)
		} else {
			disableProductSpin($threeSixty)
		}
	})
});

// Cлайдер отзывов (страница Индивидуальный заказ)
$(document).ready(function () {
	$('.works-slider__stage').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		margin: 30,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});
