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

	var App = React.createClass({
	  render: function() {
		return (
		  <div className="container-fluid">
			<div className="container-fluid">
				<table width="100%" className="qalet_table">
					<tr>
						<td width="228">
							<img src="http://www.qalet.com/images/qalet_main_log.png" height="36"/>
						</td>
						<td width="220" valign="top" align="left"><h3> Document viewer v3</h3></td>
						<td width="*" align="right" valign="bottom">
							<ul className="nav nav-pills pull-right">
							  <li role="presentation"><Link to="home">Home</Link></li>
							  <li role="presentation"><Link to="service">Services</Link> </li>
							  <li role="presentation"><Link to="about">About</Link></li>
							</ul>					
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
					<ReactRouter.Route path="/int/" component={App}>
						<IndexRoute component={Home}/>
						<Route path="home" component={Home} />
						<Route path="service" component={Services} />
						<Route path="about" component={About} />
						<Route path="*" component={Error}/>	
					</ReactRouter.Route>
				  </ReactRouter.Router>
				,
				 $('.'+mapping_data.id)[0]
			);		

	
		
	});
