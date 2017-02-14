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
			  <Home/>
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
				 $('.'+mapping_data.id)[0]
			);		

	
		
	});
