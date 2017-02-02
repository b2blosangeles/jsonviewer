  
var { Router,
      Route,
      browserHistory,
      BrowserRouter,
      Match, 
      Miss,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;



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
	    <BrowserRouter>
	      <div className="router">
			<Match pattern="/home" component={Home}/>
			<Miss component={Home} />
	      </div>
    </BrowserRouter>
	,
	 $('body')[0]
	);	
	
});
