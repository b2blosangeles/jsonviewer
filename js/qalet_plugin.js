var _CALLBACK_ = function() {
	$(document).ready(
		function() {
			function parse(v) {
				var t = v.replace(/(“|”)/ig, '"').replace('&#8220;', '--');
				return JSON.parse(t);
			}			
			var v = $('.qaletplugin'), r={}, f=[];
			for (var i = 0; i < v.length; i++) {
				var data = $(v[i]).html();
				if (!data) data = $(v[i]).attr('data');
				console.log(data);
				
				var o = parse(data);
				if (o.module) {
					r[o.module] = true;
					o.id = o.module + '_plugin_' + i;
					f[f.length] = o;
					 $(v[i]).html('<div class="'+o.id+'"></div>').fadeIn( "slow");
				}
			}		
			console.log(f);
			for (var i=0; i<f.length; i++) {
				if (typeof _QALET_[f[i].module] == 'function') {
					_QALET_[f[i].module](f[i]);
					//$(v[i]).fadeIn( "slow");					
				} else {
					console.log('=='+f[i].module+'==');
				}
			}

			$('<link>').appendTo('head').attr({ type: 'text/css', rel: 'stylesheet', href: '//qalet.com/css/bootstrap.min.css' });		
			$('<link>').appendTo('head').attr({ type: 'text/css', rel: 'stylesheet', href: '//docviewer.qalet.com/package/docviewer_wp.min.css' });
		//	$.getScript('http://docviewer.qalet.com/package/qalet_plugin_plus.jsx?plus='+Object.keys(r).join(',') + '&callback=_QACALLBACK_');
		}
	);	
};
