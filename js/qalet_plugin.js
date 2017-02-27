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
					if (o.css) {
						 $('.'+o.id).hide();
						(function(o){
							function URL(url) {
								var a = document.createElement('a');
								a.href = url;
								return a.cloneNode(false).href;
							}
							$.get(URL(o.css), function( data ) { 
								var v = UIQALET.css.parse(data);
								var s = UIQALET.css.ruleSelect(v.stylesheet,o.id);
								console.log(s);
									$('head').append('<style>'+s+'</style>');
									$('.'+o.id).show();									
							});							
							/*
							$.get('/_x/cssrange/.'+ o.id +'/'+URL(o.css), function( data ) { 
								var v = data.match(/^\/\*ERR(.*)\*\//);
								if (v) {
									console.log(v[1]);
								} else {
									$('head').append('<style>'+data+'</style>');
									$('.'+o.id).show();									
								}
							});
							*/
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
