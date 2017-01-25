function Cc(props) {
  return <span>niu{props.t.id}</span>
};
class AJAX1 extends React.Component {	

  constructor(props) {
    super(props);
	//  this.state = {loading: true};
  }	

  componentWillUpdate () {
//	console.log('--componentWillUpdate--');
  }
  componentDidUpdate(){
//	console.log('--componentDidUpdate--');
  }
  
  componentWillReceiveProps() {
//	console.log('--componentWillReceiveProps--');
  }  

  componentWillMount () {
//	console.log('--componentWillMount--');
	var me = this;

	this.setState({loading: true}, function() {
	  //	console.log('===niu ss==');
	  });	  
	  
//	console.log(me.state);
//	console.log('constructor BBH==>');	  
	//  var me =  this;

	$.ajax({
	    url: 'http://docviewer.qalet.com//sample/data.json',
	    data: {},
	    type: "GET",
	    dataType : "json",
	}).done(function( json ) {
		setTimeout(
	  		function() {
				me.setState({loading:false, data:json}); 
			}, 1000

		  );				
	  });
	  
  } 
  componentWillUnmount () {
//	console.log('--componentWillUnmount--');
  }  

  componentDidMount() {
	  
//	console.log('--componentDidMount--'); 
  }
  
  render() {
	if (this.state.loading) {
      return <span>Loading...</span>;
    }
  /*else  if (this.state.error !== null) {
      return <span>Error--: {this.state.error.message}</span>;
    }*/
    else  {
	if (!this.state.data) return true;
      var repos =  this.state.data.items;
      var repoList = repos.map(function (repo, index) {
        return (
          <li key={index}><a href={repo.html_url}>{repo.name}</a> ->>-<Cc t={repo}></Cc> --  ({repo.stargazers_count} stars) <br/> {repo.description}</li>
        );
      }); 
	}  
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
