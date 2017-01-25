/*
function Cc(props) {
  return <span>niu{props.t.id}</span>
};*/
//var AJAX = React.createClass({
class AJAX extends React.Component {	

	constructor(props) {
    super(props);
    // this.state = {date: new Date()};
	 console.log('constructor==>');
  }	

  componentWillUpdate () {
	console.log('--componentWillUpdate--');
  }
  componentDidUpdate(){
	console.log('--componentDidUpdate--');
  }
  
  componentWillReceiveProps() {
	console.log('--componentWillReceiveProps--');
  }  

  componentWillMount () {
	console.log('--componentWillMount--');
	  var me =  this;

	$.ajax({
	    url: 'http://docviewer.qalet.com//sample/data.json',
	    data: {},
	    type: "GET",
	    dataType : "json",
	}).done(function( json ) {
		setTimeout(
	  		function() {
				me.setState({loading:false, data:json});
			}, 6000

		  );				
	  });
  } 
  componentWillUnmount () {
	console.log('--componentWillUnmount--');
  }  

  componentDidMount() {
	  
	console.log('--componentDidMount--');
  }
  
  render() {
      return (
        <span>
          niu
        </span>
      );
    }
};

ReactDOM.render(
  <AJAX />,
  $('#example2')[0]
);
