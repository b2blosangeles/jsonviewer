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
			$('.qalet_niu').html(
				'<video width="320" height="240" autoplay>'+
				'  <source src="http://videorepo.com/api/streaming.js?vid=lKcZ551Ex4w.mp4" type="video/mp4">' +
				'Your browser does not support the video tag.' +
				'</video>'
			);
		},	
		render: function() {
			return (
				<table className="qalet_table">
					<tr>
						<td className="qalet_niu"></td>
						<td></td>
					</tr>
				</table>
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

