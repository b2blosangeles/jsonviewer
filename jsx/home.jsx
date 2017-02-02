var Home = React.createClass({
	getInitialState: function() {
		return {};
	},
	handleChange:function(){
		console.log(new Date());
	},	
	sendData:function() {
	},
	loadSample:function(a,b) {
		return function() {
			alert(b);
		}
		
	},	
	render: function() {
		return (
						<button type="button" className="btn btn-warning pull-right" onClick={this.sendData} >
											Show Original
										</button>	
		  );
	}
});
