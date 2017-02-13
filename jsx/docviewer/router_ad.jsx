 	
	$(document).ready(
		function() {
			$('.entry-content').hide();
			var v = $('.entry-content').html();
			console.log(v);
			v.replace(/\[\-(.*)\-\]/ig, '********');
			console.log(v);
			$('.entry-content').html(v).show();
		}
	
	);
	