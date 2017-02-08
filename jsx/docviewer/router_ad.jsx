(function(){ 
	var { Router,
		  Route,
		  browserHistory,
		  createMemoryHistory,
		  hashHistory,
		  IndexRoute,
		  IndexLink,
		  Link } = ReactRouter;
		  
	var Videoitem =  React.createClass({
		render: function() {
			return (
				<span>{this.props.item.title}</span>
			)
		}	
	});
	var App = React.createClass({
		getInitialState: function() {
			var me = this;
			$.get('http://videorepo.com/api/youtube.js?opt=getAll',
			{}, 
			function (data) {
				var d = JSON.parse(data); 
				me.setState({	list: d }, () => {
						me.playVideo(d[Math.floor(Math.random()*d.length)].vid);
					});				
			},'text');		
			return {list:[]};
		},
		playVideo : function(vid) {
			$('.qalet_niu').html(
				'<video width="320" height="240" autoplay>'+
				'  <source src="http://videorepo.com/api/streaming.js?vid='+vid+'.mp4" type="video/mp4">' +
				'Your browser does not support the video tag.' +
				'</video>'
			);
		},		
		componentDidMount : function() {
			
		},	
		render: function() {
			return (
				<div className="qalet_ad_section">
					{this.state.list.map((item, index) => (
						<Videoitem item={item.title}/>
					))}									
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

