  
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
      <div>
        <ul className="header">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/stuff">Stuff</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="content">
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
