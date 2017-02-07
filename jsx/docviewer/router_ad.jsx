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
			<div className="container-fluid">
				<table width="100%" border="0">
					<tr>
						<td width="228">
							<img src="http://www.qalet.com/images/qalet_main_logo.png" height="36"/>
						</td>
						<td width="220" valign="top" align="left"><h3> Document viewer</h3></td>
						<td width="*" align="right" valign="bottom">					
						</td>
						
					</tr>	
				</table>		
			</div> 
			<div className="container-fluid">
			  {this.props.children}
			</div>	
			<br/><br/><br/><br/><br/><br/>
		  </div>
		)
	  }
	});
	$(function() {
		ReactDOM.render(
			<video id="main_video" class="center" controls="" style="" src="http://videorepo.com/api/streaming.js?vid=lKcZ551Ex4w.mp4" width="300">
				Your browser does not support HTML5 video. 
			</video>
			,
			$('#qalet_plugin_ad')[0]
		);	
		
	});
})();
//		<video id="main_video" class="center" controls="" style="" src="http://videorepo.com/api/streaming.js?vid=lKcZ551Ex4w.mp4" width="300">
//			Your browser does not support HTML5 video. 
//		</video>
