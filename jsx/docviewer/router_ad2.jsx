 	
	$(document).ready(
		function() {
			$('#page').hide();
			var v = $('#page').html();
			v =v.replace(/\[\-(.*)\-\]/ig, '********');
			$('.entry-content').html(v);
			$('#page').show();
		}
	
	);
	