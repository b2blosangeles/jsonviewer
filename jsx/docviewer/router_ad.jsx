 	
	$(document).ready(
		function() {
			$('.entry-content').hide();
			var v = $('.entry-content').html();
			console.log(v);
			v.replace('[-qalet_docviewer data=”[456,456]”-]', '********');
			console.log(v);
			$('.entry-content').html(v).show();
		}
	
	);
	