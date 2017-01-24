function Cc(props) {
  return <span>niu{props.t.id}</span>
};
var AJAX = React.createClass({
  getInitialState: function() {
    return {
      loading: false, // true,
      error: null,      
      data: null
    };
  },
  componentWillUpdate () {
	console.log('--componentWillUpdate--');
  },
  componentDidUpdate(){
	console.log('--componentDidUpdate--');
  },
  
  componentWillReceiveProps() {
	console.log('--componentWillReceiveProps--');
  },  
  
//  shouldComponentUpdate() {
//	console.log('--shouldComponentUpdate--');
//  }, 
  
  componentWillMount () {
	console.log('--componentWillMount--');
  }, 
  componentWillUnmount () {
	console.log('--componentWillUnmount--');
  },  

  componentDidMount() {
	  this.setState({data: [{name:123}]});
	console.log('--componentDidMount--');
//    this.props.promise.then(
//      value => this.setState({loading: false, data: value}),
//      error => this.setState({loading: false, error: error}));
//  },
//	constructor: function() {
	//	console.log('--constructor--');
	},
  render: function() {
	
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else  if (this.state.error !== null) {
      return <span>Error--: {this.state.error.message}</span>;
    }
    else {
	   console.log(this.state.data);
      var repos =  this.state.data.items;
      var repoList = repos.map(function (repo, index) {
        return (
          <li key={index}><a href={repo.html_url}>{repo.name}</a> ->>-<Cc t={repo}></Cc> --  ({repo.stargazers_count} stars) <br/> {repo.description}</li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
});

ReactDOM.render(
  <AJAX promise={$.getJSON('http://docviewer.qalet.com//sample/data.json')} />,
  $('#example2')[0]
);
