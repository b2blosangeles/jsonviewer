$(document).ready(
	function() {
		var Videoitem =  React.createClass({
			render: function() {
				return (
					<span><a href="JavaScript:void(0)" onClick={this.props.parent.playVideo(this.props.item.vid)} >{this.props.item.title}</a>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
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
							me.playVideo(d[Math.floor(Math.random()*d.length)].vid)();
						});				
				},'text');
				
				return {list:[]};
			},
			playVideo : function(vid) {
				return function() {
					/*
					$('.'+mapping_data.id).find('.qalet_video').html(
						'<video width="320" height="240" controls autoplay>'+
						'  <source src="http://videorepo.com/api/streaming.js?vid='+vid+'.mp4" type="video/mp4">' +
						'Your browser does not support the video tag.' +
						'</video>'
					);
					*/
					$('.'+mapping_data.id).find('.qalet_video').html(
						'test====='
					);				
				}
			},		
			componentDidMount : function() {

			},
			render: function() {
				return (
				<div className="qalet_ad_section"><div className="qalet_video"></div>
					bbb								
				</div>
				)
			  }			
			/*
			render: function() {
				return (
					<div className="qalet_ad_section"><div className="qalet_video"></div>
						{this.state.list.map((item, index) => (
							<Videoitem item={item} parent={this}/>
						))}									
					</div>
				)
			  }
			  */
		});
		$(function() {
			setTimeout(function(){
					ReactDOM.render(
						<App/>	
						,
						 $('.'+mapping_data.id)[0]
					);	

			},500
			);
		});
	}
);
