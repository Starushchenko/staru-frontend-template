"use strict";

$(document).ready(function () {
// Иницализация Fancybox без дополнительных кнопок
	$('[data-fancybox]').fancybox({
		buttons: ["close"],
		closeExisting: true,
		touch: false,
		beforeShow: function(){
			$("html").addClass('html html--no-scroll');
		},
		afterClose: function(){
			$("html").removeClass('html html--no-scroll');
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
