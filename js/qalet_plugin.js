var _CALLBACK_ = function() {
	var getAbsoluteUrl = (function() {
		var a = null;
		return function(url) {
			a = a || document.createElement('a');
			a.href = url;

			return a.href;
		};
	})();
		alert(getAbsoluteUrl()('sd.js'))
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
							$.get('http://qalet.com/_x/cssrange/.'+ o.id +'/http://docviewer.qalet.com'+o.css, function( data ) { 
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