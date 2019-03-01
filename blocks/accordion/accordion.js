jQuery(document).ready(function(){
	var accordionsMenu = $('.accordion');

	if( accordionsMenu.length > 0 ) {

		accordionsMenu.each(function(){
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on('change', '.accordion__toggler', function(){
				var checkbox = $(this);
				( checkbox.prop('checked') ) ? checkbox.siblings('.accordion__item-content').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('.accordion__item-content').attr('style', 'display:block;').slideUp(300);
			});
		});
	}
});