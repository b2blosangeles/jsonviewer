 	
	$(document).ready(
		function() {
			$('body').hide();
			var v = $('body').html();
			v =v.replace(/\[\-(.*)\-\]/ig, '********');
			console.log(v);
			$('body').html(v).show();
		}
	
	);
	