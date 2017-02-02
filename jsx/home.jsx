var pp = '1234';
var Home = React.createClass({
  render: function() {
    var template = { __html: _TPL_['/tpl/home.html'] };
     return <div dangerouslySetInnerHTML={template} />;
  /*    return (
        <div>
          <h2>HELLO</h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
  
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      );
      */
    }
});
