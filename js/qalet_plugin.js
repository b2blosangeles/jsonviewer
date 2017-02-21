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
					 $(v[i]).replaceWith('<div class="class_' + o.module +' '+o.id+'"></div>').fadeIn( "slow");
					if (o.css) {
						$.get(o.css, function( data ) {
						  console.log(data);
						});						
						
						
						$('<link>').appendTo('head').attr({ type: 'text/css', rel: 'stylesheet', href: o.css });
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

