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
			<img src="http://www.qalet.com/images/qalet_main_logo.png" height="36"/>
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
//		<video id="main_video" class="center" controls="" style="" src="http://videorepo.com/api/streaming.js?vid=lKcZ551Ex4w.mp4" width="300">
//			Your browser does not support HTML5 video. 
//		</video>
