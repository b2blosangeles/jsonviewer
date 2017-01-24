function Cc(props) {
  return <span>niu{props.t.id}</span>
};
var AJAX = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      error: null,      
      data: null
    };
  },
  componentWillMount: function() {
    alert(this.props.url);
  },
  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  },

  render: function() {
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
  <AJAX promise={$.ajax(
		{
			url:'http://docviewer.qalet.com//sample/data.json',
			method: "POST",
			dataType: 'json',
			cache: false, 
			data:{}
		})} />,
  $('#example2')[0]
);
