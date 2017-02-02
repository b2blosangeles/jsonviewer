  
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;


var Contact = React.createClass({
  getInitialState: function() {
        return {
            qq: '456--'
        };
    },
  
  render: function() {
      return (
        <div>
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
			<table>
				<tr>
					<td width="180"><img src="http://www.qalet.com/images/qalet_main_logo.png" height="36"/></td>
					
					<td width="*" align="right" valign="bottom">
						<ul className="nav nav-pills">
						  <li role="presentation"><Link to="/home">Home</Link></li>
						  <li role="presentation"><Link to="/stuff">Stuff</Link> </li>
						  <li role="presentation"><Link to="/contact">Contact</Link></li>
						</ul>					
					</td>
					<td width="*"><h3> Document viewer</h3></td>
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
		<ReactRouter.Router>
		    <ReactRouter.Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="home" component={Home} />
				<Route path="stuff" component={Stuff} />
				<Route path="contact" component={Contact} />	
				<Route path="*" component={Home}/>	
		    </ReactRouter.Route>
		  </ReactRouter.Router>
	,
	 $('body')[0]
	);	
	
});
