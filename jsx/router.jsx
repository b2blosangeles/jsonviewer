var Router = ReactRouter;
var Route = Router.Route, DefaultRoute = Router.DefaultRoute,
  Link=Router.Link, RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
            <li><Link to="view1">View1 link</Link></li>    
            <li><Link to="view2">View2 link</Link></li>    
        </ul>

        <RouteHandler key={name}/>
      </div>
    );
  }
});
          
var View1 = React.createClass({
    render: function() {
        return (
          <div>View 1 content</div>
        );
    }          
});
          
var View2 = React.createClass({
    render: function() {
        return (
          <div>View 2 content</div>
        );
    }          
});
    
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="view1" handler={View1}/>
    <Route name="view2" handler={View2}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
    