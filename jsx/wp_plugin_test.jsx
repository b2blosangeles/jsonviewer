$(document).ready(
	function() {
		function parse(v) {
			var t = v.replace(/(“|”)/ig, '"');
			return JSON.parse(t);
		}			
		var v = $('.qaletplugin'), r={};
		for (var i = 0; i < v.length; i++) {
			var o = parse($(v[i]).attr('data'));
			if (o.module) {
				r[o.module] = true;
				var sid = o.module + '_plugin_' + i;
				$(v[i]).html('<div class="'+sid+'">'+sid+'</div>').show();
			}
		}
		console.log(Object.keys(r));

		$('<link>').appendTo('head').attr({ type: 'text/css', rel: 'stylesheet', href: '/css/your_css_file.css' });
		$.getScript('http://docviewer.qalet.com/package/wp_plugin.jsx?plus='+Object.keys(r).join(',') );
	}
);	
