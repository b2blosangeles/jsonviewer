class AJAX1 extends React.Component {	

  constructor(props) {
    super(props);
    // this.state = {date: new Date()};
	 console.log('constructor A==>');
	 this.setState({loading: true});
	 console.log(this.date);
	 console.log('constructor B==>');
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
		console.log(json);
		setTimeout(
	  		function() {
				console.log('constructor FF==>');
				me.setState({loading:false, data:json});
				console.log('constructor C0==>');
			//	console.log(me.state.data);
				console.log('constructor C==>');
			}, 1000

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
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
	}  
};

ReactDOM.render(
  <AJAX1 />,
  $('#example6')[0]
);
