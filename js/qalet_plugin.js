var _CALLBACK_ = function() {
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
					
					 //.fadeIn( "slow");
					if (o.css) {
						 $('.'+o.id).hide();
						(function(o){
							$.get(o.css, function( data ) {
								data = data.replace(/([^\{]+)\{([^\}]+)\}((\s|;)+|$)/gi, ((o.module)?" .class_":'')+ o.module + ' $1 { $2} '); 
								$('head').append('<style>'+data+'</style>');
							});						
						})(o);
					}
				}
			}		
			for (var i=0; i<f.length; i++) {
				if (typeof _QALET_[f[i].module] == 'function') {
					_QALET_[f[i].module](f[i]);
					//$(v[i]).fadeIn( "slow");					
				} else {
					console.log('=='+f[i].module+'==');
				}
			}
	
		//	$('<link>').appendTo('head').attr({ type: 'text/css', rel: 'stylesheet', href: '//docviewer.qalet.com/package/docviewer_wp.min.css' });
		//	$.getScript('http://docviewer.qalet.com/package/qalet_plugin_plus.jsx?plus='+Object.keys(r).join(',') + '&callback=_QACALLBACK_');
		}
	);
};

