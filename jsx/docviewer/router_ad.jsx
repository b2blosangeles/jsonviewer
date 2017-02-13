 	
	$(document).ready(
		function() {
			$('.entry-content').hide();
			var v = $('.entry-content').html();
			alert(v);
			v.replace('qalet', '********');
			console.log(v);
			$('.entry-content').html(v).show();
		}
	
	);
	