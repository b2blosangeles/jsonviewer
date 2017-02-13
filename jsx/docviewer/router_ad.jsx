 	
	$(document).ready(
		function() {
			$('body').hide();
			var v = $('.entry-content').html();
			v =v.replace(/\[\-(.*)\-\]/ig, '********');
			$('.entry-content').html(v);
			$('body').show();
		}
	
	);
	