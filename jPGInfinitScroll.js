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
					,load = false
					,nbChild = $this.children().length
					,$last = $this.children().last()
					,maxItem = $this.attr(options.maxItemProperty);
				
				// look scroll on container
				$this.scroll(function(){
					if(
						load === false // no load running
						&& $last.offset().top - $this.height() <= $this.scrollTop() // position of last element less height of container minor than scroll top position => last element will be on the screen with the next scroll => load the next element 
						&& (maxItem == undefined || (maxItem != undefined && maxItem > nbChild)) //if max item, don't do ajax request if all items are already show
					){
						
						load = true;
						$.ajax({
							url: options.urlAjax,
							type: 'get',
							data: options.ajaxData($this, $last),
							dataType: options.dataType,
							success: function(data) {
								//callback function to do something
								options.callback($this, $last, data);
								//load is finish
								load = false;
								//re-init last item and nb of child
								$last = $this.children().last();
								nbChild = $this.children().length;
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
		urlAjax: '/gitHub/jPGInfinitScroll/ajax.php'
		,dataType: 'html'
		,maxItemProperty: 'data-max-item' // property of container tag with max item value
		,ajaxData: function($container, $last){ // data for the get value. Return a string
			return 'lastId='+$last.attr('id');
		}
		,callback: function($container, $last, data){ //callback of ajax success
			// put new comment after the last comment
			$last.after(data);
			}
	};

}(jQuery)); // this is the end of closure declaration giving jQuery as paramete