"use strict";

$(document).ready(function () {

	//функция при открытом Fancybox отменяет скролл страницы
	function noScroll(state) {
		let width = $('html').width(), scrollSize;

		if (state == 'true') {
			$("html").css({'overflow-y': 'hidden'});
			scrollSize = $('html').width() - width;

			if(scrollSize!=0) {
				$("html").css({'margin-right': scrollSize});

				// Тут можно дописать добавление отступов кастомным блокам
				$(".fixed-header").css({'padding-right': scrollSize});
			}
		} else if (state == 'false') {
			if ($('body').children('.fancybox-is-open').length==0) {
				$("html").css({'overflow-y': '', 'margin-right': ''});

				// Тут удаляем стили кастомных блоков когда скролл активируется
				$(".fixed-header").css({'padding-right': ''});
			}
		}
	}

	// Иницализация Fancybox без дополнительных кнопок
	$('[data-fancybox]').fancybox({
		buttons: ["close"],
		closeExisting: true,
		touch: false,
		onActivate: function () {
			noScroll('true')
		},
		afterClose: function () {
			noScroll('false');
		},
	});

	// Дополнительный класс для корневого элемента, если браузер - IE или Edge
	if (/MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
		document.documentElement.className += ' old-browser';
	} else if (/Edge\/\d./i.test(navigator.userAgent)) {
		document.documentElement.className += ' edge-browser';
	}

	// Инициализация lazy load для изображений
	$(document).ready(function () {
		$('.lazy').lazy({
			effect: "fadeIn",
			effectTime: 300,
			threshold: 500
		});
	});

	// Инициализация плавного появления
	new WOW().init();

	// Скрипт плавной прокрутки до якорей
	$(function () {
		$("a[href^='#']").click(function () {
			var _href = $(this).attr("href");

			$("html, body").animate({
				scrollTop: $(_href).offset().top - 70 + "px"
			});
			return false;
		});
	});
});
