
var Stuff = React.createClass({
  render: function() {
      return (
        <div>
          <h2>STUFF{this.props.name + " ** " +  ((this.props.parent)?this.props.parent.qq:'==')}</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});
var StuffFrame = React.createClass({
  render: function() {
      return (
        <div className="doc_renderer">
          <Stuff/>
        </div>
      );
    }
});