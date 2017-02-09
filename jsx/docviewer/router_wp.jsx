(function(){ 
	var { Router,
		  Route,
		  browserHistory,
		  createMemoryHistory,
		  hashHistory,
		  IndexRoute,
		  IndexLink,
		  Link } = ReactRouter;

	var Error = React.createClass({
	  render: function() {
		  return (
		<div className="box_error">404 Error! Link does not exist!</div> 
		  );
		}
	});

	var Niu = React.createClass({
	  render: function() {
		}
	});

	var App = React.createClass({
	  render: function() {
		return (
		  <div className="container-fluid">
			<div className="container-fluid">
				<table width="100%" className="qalet_table">
					<tr>
						<td width="228">
							<img src="http://www.qalet.com/images/qalet_main_logo.png" height="36"/>
						</td>
						<td width="220" valign="top" align="left"><h3> Document viewer</h3></td>
						<td width="*" align="right" valign="bottom">					
						</td>
						
					</tr>	
				</table>		
			</div> 
			<div className="container-fluid">
			  {this.props.children}
			</div>	
			<br/><br/><br/><br/><br/><br/>
		  </div>
		)
	  }
	});
	$(function() {
		ReactDOM.render(
			<ReactRouter.Router history={browserHistory}>
				<ReactRouter.Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="home" component={Home} />
					<Route path="stuff" component={StuffFrame} />
					<Route path="document" component={Document} />	
						<Route path="*" component={Home}/>	
				</ReactRouter.Route>
			  </ReactRouter.Router>
			,
			 $('#qalet_plugin_docviewer')[0]
		);	
		
	});

	var Form = React.createClass({
		render: function() {
			return (	
				 <form>
					 <div className="container-fluid form_section">
						<div className="row">
							<div className="col-sm-12">
								<div className="form-group">
									<button type="button" className="btn btn-warning pull-right form_button" onClick={this.props.parent.sendData('')}>
										Show Original
									</button>	

									<label for="comment">
									  Data Source: (url or text)

									</label>

									<textarea className="form-control" rows="5" name="code"></textarea>
								</div>	

							</div>
							<div className="col-sm-12">
								<label for="sel1">Show data as:</label>
								<button type="button" className="btn btn-info form_button" onClick={this.props.parent.sendData('json')}>JSON</button>
								<button type="button" className="btn btn-info form_button" onClick={this.props.parent.sendData('xml')}>XML</button>
								<button type="button" className="btn btn-info form_button" onClick={this.props.parent.sendData('md')}>Markdown</button>
							 </div>
						</div>
					</div>
				</form>	
			);	
		}
	});
			
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




	var Stuff = React.createClass({
	  render: function() {
		  return (
			<div>
			  <h2>STUFF{this.props.name + " ** " +  ((this.props.parent)?this.props.parent.qq:'==')}</h2>
			  <p>Mauris sem velit, vehicula eget sodales vitae,
			  rhoncus eget sapien:</p>
			  <ol>
				<li>Nulla pulvinar diam</li>
				<li>Facilisis bibendum</li>
				<li>Vestibulum vulputate</li>
				<li>Eget erat</li>
				<li>Id porttitor</li>
			  </ol>
			</div>
		  );
		}
	});
	var StuffFrame = React.createClass({
	  render: function() {
		  return (
			<div className="doc_renderer">
			  <Stuff/>
			</div>
		  );
		}
	});

	var Document = React.createClass({
	  getInitialState: function() {
			return {
				qq: '456--'
			};
		},
	  
	  render: function() {
		  return (
			<div className="doc_renderer">
			  <h2>GOT QUESTIONS-->{this.pp}?</h2>
			  <p>The easiest thing to do is post on
			  our <a href="http://forum.kirupa.com">forums</a>.
			  ===
			  <Stuff name="niu" parent={this.state}/>
			  </p>
			</div>
		  );
		}
	});
})();
