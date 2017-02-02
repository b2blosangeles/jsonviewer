var pp = {html:'<span style="color:red">html</span>'};
var Home = React.createClass({
handleChange:function(){
	console.log(new Date());
},	
  render: function() {
    return (
        <div>
          <h2>HELLO<span dangerouslySetInnerHTML={{ __html : pp.html }}/> </h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
  
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
			<textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue="t" />		  
        </div>
      );
    }
});
