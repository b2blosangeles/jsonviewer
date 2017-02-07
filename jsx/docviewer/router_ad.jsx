(function(){ 
	var { Router,
		  Route,
		  browserHistory,
		  createMemoryHistory,
		  hashHistory,
		  IndexRoute,
		  IndexLink,
		  Link } = ReactRouter;

	var App = React.createClass({
	  render: function() {
		return (
		  <div className="container-fluid">
			http://videorepo.com/api/streaming.js?vid=lKcZ551Ex4w.mp4
		  </div>
		)
	  }
	});
	$(function() {
		ReactDOM.render(
			<App/>	
			,
			$('#qalet_plugin_ad')[0]
		);	
		
	});
})();

