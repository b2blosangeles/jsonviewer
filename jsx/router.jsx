let Router = window.ReactRouter;
let RouteHandler = Router.RouteHandler;
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;
var browserHistory = ReactRouter.browserHistory

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('app'))