(function($)
{
	'use strict';
	
	$.fn.jPGInfinitScroll = function(mainParameter,options)
	{
		options = $.extend({},$.fn.jPGInfinitScroll.defaultOptions, options);
		return this.each(
			function()
			{
				var $this = $(this)
					,load = false;
				
				// look scroll
				$(window).scroll(function(){
					/* 
					@todo calculaute scroll offset to know if need to load next element
					
					*/
					if(load === false){
					
						load = true;
						
						// get last id
						var $last = $this.children().last();
						
						$.ajax({
							url: options.urlAjax,
							type: 'get',
							data: 'lastId='+$last.attr('id'),
							dataType: options.dataType,
			 
							//Succès de la requête
							success: function(data) {
							console.log(data);
								options.callback($this, $last, data);
								load = false;
							}
						});
					}
				});
			}
		);
	};

	/**
	 * default options for every instance of the changeData
	 */
	$.fn.jPGInfinitScroll.defaultOptions =
	{
		urlAjax: '/test/jPGInfinitScroll/ajax.php',
		dataType: 'html'
		callback: function(container, $last, data){
			$last.after(data);
			}
	};

}(jQuery)); // this is the end of closure declaration giving jQuery as paramete