 	
	$(document).ready(
		function() {
			$('body').hide();
			var v = $('.entry-content').html();
			v =v.replace(/\[\-(.*)\-\]/ig, '********');
			console.log(v);
			$('.entry-content').html(v);
			$('body').show();
		}
	
	);
	