"use strict";

jQuery(document).ready(function ($) {
  var tabs = $('.tabs');
  tabs.each(function () {
    var tab = $(this),
        tabItems = tab.find('ul.tabs__navigation'),
        tabContentWrapper = tab.children('ul.tabs__content'),
        tabNavigation = tab.find('nav');
    tabItems.on('click', 'a', function (event) {
      event.preventDefault();
      var selectedItem = $(this);

      if (!selectedItem.hasClass('selected')) {
        var selectedTab = selectedItem.data('content'),
            selectedContent = tabContentWrapper.find('li[data-content="' + selectedTab + '"]'),
            selectedContentHeight = selectedContent.innerHeight();
        tabItems.find('a.selected').removeClass('selected');
        selectedItem.addClass('selected');
        selectedContent.addClass('selected').siblings('li').removeClass('selected'); //animate tabContentWrapper height when content changes 

        tabContentWrapper.animate({
          'height': selectedContentHeight
        }, 200);
      }
    }); //hide the .tabs::after element when tabbed navigation has scrolled to the end (mobile version)

    checkScrolling(tabNavigation);
    tabNavigation.on('scroll', function () {
      checkScrolling($(this));
    });
  });
  $(window).on('resize', function () {
    tabs.each(function () {
      var tab = $(this);
      checkScrolling(tab.find('nav'));
      tab.find('.tabs__content').css('height', 'auto');
    });
  });

  function checkScrolling(tabs) {
    var totalTabWidth = parseInt(tabs.children('.tabs__navigation').width()),
        tabsViewport = parseInt(tabs.width());

    if (tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
      tabs.parent('.tabs').addClass('is-ended');
    } else {
      tabs.parent('.tabs').removeClass('is-ended');
    }
  }
});