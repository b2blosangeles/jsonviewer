var pp = {html:'<span style="color:red">html</span>'};
var Home = React.createClass({
  getInitialState: function() {
        return {};
    },
	handleChange:function(){
		console.log(new Date());
	},	
  render: function() {
    return (
        <div>
			<table>
				<tr>
					<td width="180"><img src="http://www.qalet.com/images/qalet_main_logo.png" height="36"></td>
					<td width="*"><h3> Document viewer</h3></td>
				</tr>	
			</table>			  
        </div>
      );
    }
});
