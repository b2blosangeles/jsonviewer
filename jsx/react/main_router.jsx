			
	var Home = React.createClass({
		getInitialState: function() {
			this.onClickLoadSample  = this.loadSample.bind(this);
			return {};
		},
		handleChange:function(){
			console.log(new Date());
		},
		hh : function() {
			console.log('=hh=');
		},
		HtmlViwer : function(data, type, target) {
			target.removeClass("box_error");
			if (type == 'md') {
				var converter = new showdown.Converter();
				target.html(converter.makeHtml(data));
			}	
			if (type == 'json') {
				var options = {
				  collapsed: false,
				  withQuotes: false
				};
				try{
					target.jsonViewer(JSON.parse(data), options);  
				} catch	(err) {
					target.addClass("box_error").html('Error! ' + err.message);	   
					}
				 
			}
			if (type == 'xml') {
				var x2js = new X2JS();
				var jsonObj = x2js.xml_str2json( data );
				console.log(jsonObj);
				var options = {
				  collapsed: false,
				  withQuotes: true
				};
				target.jsonViewer(jsonObj, options);  	
			}
			if (type == '') {
				target.html(data.replace(/\n/ig, '<br/>'));  	
			}			
		},	
		sendData:function(type) {
			var me = this;
			return function() {
				var code  =   $('form').find("[name='code']").val();
				
				var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

				if (pattern.test(code)) {
					$.get('http://docviewer.qalet.com/api/dataChannel.js',
					{url:code}, 
					function (data) {
						me.HtmlViwer(data, type, $('#doc-renderer')); 
						},'text'
					);
					return true;
				} else {  
					me.HtmlViwer(code, type, $('#doc-renderer'));  
				}		
			}
		},
		loadSample:function(url,type) {
			var me = this;
			return function() {
				me.hh();
				$('form').find("[name='code']").val(url);
				me.sendData(type);
			}
			
		},	
		render: function() {
			return (
				<div className="container-fluid">
					<div className="row">
						<Form parent={this}/>
					
						<div className="doc_renderer" id="doc-renderer"></div>
						<div className="sample_section">  
							Sample:<br/>
							<ul>
							  <li><a href="JavaScript:void(0)" onClick={this.onClickLoadSample('http://docviewer.qalet.com/README.md','md')}>http://docviewer.qalet.com/README.md</a></li>
							  <li><a href="JavaScript:void(0)" onClick={this.loadSample('http://docviewer.qalet.com/sample/data.json','json')}>http://docviewer.qalet.com/sample/data.json</a></li>
							  <li><a href="JavaScript:void(0)" onClick={this.loadSample('http://docviewer.qalet.com/sample/data.xml','xml')}>http://docviewer.qalet.com/sample/data.xml</a></li>
							</ul>	
						</div>
					</div>	
				</div>
			  );
		}
	});
