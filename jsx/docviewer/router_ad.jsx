 	
	$(document).ready(
		function() {
			$('#page').hide();
			var v = $('#page').html();
			
			v.replace('[-qalet_docviewer data=”[456,456]”-]', '********');
			console.log(v);
			$('#page').html(v).show();
		}
	
	);
	