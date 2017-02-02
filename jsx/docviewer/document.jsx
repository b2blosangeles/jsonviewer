var Document = React.createClass({
  getInitialState: function() {
        return {
            qq: '456--'
        };
    },
  
  render: function() {
      return (
        <div>
          <h2>GOT QUESTIONS-->{this.pp}?</h2>
          <p>The easiest thing to do is post on
          our <a href="http://forum.kirupa.com">forums</a>.
		  ===
		  <Stuff name="niu" parent={this.state}/>
          </p>
        </div>
      );
    }
});
