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
		getInitialState: function() {
			return {};
		},
		componentDidMount : function() {
			$('.niu').html(
				'<video width="320" height="240" controls>'+
				'  <source src="http://videorepo.com/api/streaming.js?vid=lKcZ551Ex4w.mp4 type="video/mp4">' +
				'Your browser does not support the video tag.' +
				'</video>'
			);
		},	
		render: function() {
			return (
				<div className="container-fluid niu">
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

