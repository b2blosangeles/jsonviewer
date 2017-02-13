 	
	$(document).ready(
		function() {
			$('.entry-content').hide();
			var v = $('.entry-content').html();
			v =v.replace(/[-(.*)\-]/, '********');
			console.log(v);
			$('.entry-content').html(v).show();
		}
	
	);
	