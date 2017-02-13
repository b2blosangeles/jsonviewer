 	
	$(document).ready(
		function() {
			$('#entry-content').hide();
			var v = $('#entry-content').html();
			
			v.replace('[-qalet_docviewer data=”[456,456]”-]', '********');
			console.log(v);
			$('#entry-content').html(v).show();
		}
	
	);
	