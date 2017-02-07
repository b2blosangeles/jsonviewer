  
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
			<table width="100%" border="0">
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
			    	<Route path="*" component={Error}/>	
		    </ReactRouter.Route>
		  </ReactRouter.Router>
		,
		 $('#qalet_wp')[0]
	);	
	
});
