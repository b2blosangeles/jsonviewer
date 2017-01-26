let Router = window.ReactRouter;
let RouteHandler = Router.RouteHandler;
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;
var browserHistory = ReactRouter.browserHistory

<Router history={history}>
    <Route path="/" component={MainComponent}>
      //<Route path="topics/:id" compponent={Topic} />
    </Route>
  </Router>

  ReactDOM.render(<Router />,  document.getElementById('app'));