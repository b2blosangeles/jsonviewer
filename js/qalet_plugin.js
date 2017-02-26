var _CALLBACK_ = function() {
	function URL(url) {
		var a = document.createElement('a');
		a.href = url;
		return a.cloneNode(false).href;
	}		
	$(document).ready(	
		function() {		
			function parse(v) {
				var t = v.replace(/(“|”)/ig, '"');
				return JSON.parse(t);
			}			
			var v = $('QALET'), r={}, f=[];	
			for (var i = 0; i < v.length; i++) {
				var data = $(v[i]).html();
				if (!data) data = $(v[i]).attr('data');
				var o = parse(data);
				if (o.module) {
					r[o.module] = true;
					o.id = o.module + '_plugin_' + i;
					f[f.length] = o;
					 $(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>');
					if (o.css) {
						 $('.'+o.id).hide();
						(function(o){
							$.get('/_x/cssrange/.'+ o.id +'/'+URL(o.css), function( data ) { 
								$('head').append('<style>'+data+'</style>');
								$('.'+o.id).show();
								console.log(data);
							});						
						})(o);
					}
				}
			}		
			for (var i=0; i<f.length; i++) {
				if (typeof _QALET_[f[i].module] == 'function') {
					_QALET_[f[i].module](f[i]);				
				} else {
					console.log('=='+f[i].module+'==');
				}
			}
		}
	);
};