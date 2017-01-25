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
     if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else  if (this.state.error !== null) {
      return <span>Error--: {this.state.error.message}</span>;
    }
    else {
      var repos =  this.state.data.items;
      var repoList = repos.map(function (repo, index) {
        return (
          <li key={index}><a href={repo.html_url}>{repo.name}</a> ->>-<Cc t={repo}></Cc> --  ({repo.stargazers_count} stars) <br/> {repo.description}</li>
        );
      }); 
	}
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
