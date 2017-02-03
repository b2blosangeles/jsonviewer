  
var { Router,
      Route,
      browserHistory,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;

var App = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
		<div className="container-fluid">
			<table width="100%">
				<tr>
					<td width="228">
						<img src="http://www.qalet.com/images/qalet_main_logo.png" height="36"/>
					</td>
					<td width="220" valign="top" align="left"><h3> Document viewer</h3></td>
					<td width="*" align="right" valign="bottom">
						<ul className="nav nav-pills pull-right">
						  <li role="presentation"><Link to="/home">Home</Link></li>
						  <li role="presentation"><Link to="/stuff">Stuff</Link> </li>
						  <li role="presentation"><Link to="/document">Document</Link></li>
						</ul>					
					</td>
					
				</tr>	
			</table>		
		</div> 
        <div className="container-fluid">
          {this.props.children}
        </div>	
      </div>
    )
  }
});
$(function() {
	ReactDOM.render(
		<ReactRouter.Router history={hashHistory}>
		    <ReactRouter.Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="home" component={Home} />
				<Route path="stuff" component={Stuff} />
				<Route path="document" component={Document} />	
			    {/*<Route path="*" component={Home}/>*/}	
		    </ReactRouter.Route>
		  </ReactRouter.Router>
		,
		 $('body')[0]
	);	
	
});
