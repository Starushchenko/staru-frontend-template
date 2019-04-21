$(document).ready(function () {
	var tabs = $('.elastic-tabs');
	var items = $('.elastic-tabs').find('.elastic-tabs__item').length;
	var selector = $(".elastic-tabs").find(".elastic-tabs__range");
	var activeItem = tabs.find('.elastic-tabs__item--active');
	var activeWidth = activeItem.innerWidth();
	$(".elastic-tabs__range").css({
		"left": activeItem.position.left + "px",
		"width": activeWidth + "px"
	});

	$(".elastic-tabs").on("click", ".elastic-tabs__item", function (e) {
		e.preventDefault();
		$('.elastic-tabs__item').removeClass("elastic-tabs__item--active");
		$(this).addClass('elastic-tabs__item--active');
		var activeWidth = $(this).innerWidth();
		var itemPos = $(this).position();
		$(".elastic-tabs__range").css({
			"left": itemPos.left + "px",
			"width": activeWidth + "px"
		});
	});
});