class AJAX1 extends React.Component {	

  constructor(props) {
    super(props);
     this.state = {inputContent: 'startValue'};
	// this.state = {date: new Date()};

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
	var me = this;
	
	 console.log(me.setState);
	
	me.state={loading: true};
	 console.log(me.state);
	 console.log('constructor B==>');	
	
	
	//  var me =  this;

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
				me.state({loading:false, data:json});
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
        </main>
      );
	}  
};

ReactDOM.render(
  <AJAX1 />,
  $('#example6')[0]
);
