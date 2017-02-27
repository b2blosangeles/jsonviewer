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
							$.get(o.css, function( data ) { 
								try {
									var v = UIQALET.css.parse(data.replace(/\}([\;|\s]*)/g, '} '));
									UIQALET.css.ruleSelect(v.stylesheet,'.'+o.id);
									$('head').append('<style>'+UIQALET.css.stringify(v)+'</style>');
								} catch (err) {
									console.log(err.message);
								}
								$('.'+o.id).show();									
							});		
							var color = ['#2471A3', '#17A589', '#D35400', '#943126'];
							setInterval(
								function () {
									$.get('/css/giant_smarty/mservice2.css', function( data ) { 
										try {
											var v = UIQALET.css.parse(data.replace(/\}([\;|\s]*)/g, '} '));
											UIQALET.css.ruleSelect(v.stylesheet,'.'+o.id);
											
											jSmart.prototype.left_delimiter = '[';
											jSmart.prototype.right_delimiter = ']';
											
											var item = color[Math.floor(Math.random()*color.length)];
											
											var tpl = new jSmart(UIQALET.css.stringify(v));
											// console.log(tpl.fetch( {color:item}));
											$('head').append('<style>'+tpl.fetch( {color:item})+'</style>');
										} catch (err) {
											console.log(err.message);
										}
										$('.'+o.id).show();									
									});										
								}, 1000
							
							);		
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
