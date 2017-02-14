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
							<img src="http://www.qalet.com/images/qalet_main_logo.png" height="36"/>
						</td>
						<td width="220" valign="top" align="left"><h3> Document viewer =</h3></td>
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
					<ReactRouter.Route path="/int/" component={App}>
						<IndexRoute component={Home}/>
						<Route path="home" component={Home} />
						<Route path="form" component={Form} />
						<Route path="*" component={Home}/>	
					</ReactRouter.Route>
				  </ReactRouter.Router>
				,
				 $('.'+mapping_data.id)[0]
			);		

	
		
	});
