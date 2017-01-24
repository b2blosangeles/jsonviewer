function Cc(props) {
  return <span>niu{props.t}</span>
};

var jk = [
 {
      "id": 2126244,
      "name": "bootstrap",
      "full_name": "twbs/bootstrap"
 },  
 {
      "id": 2126244,
      "name": "bootstrap",
      "full_name": "twbs/bootstrap"
 }  
];
var RepoList = React.createClass({
  getInitialState: function() {
    return {
      loading: true,
      error: null,      
      data: null
    };
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
      var repos = jk;
          // this.state.data.items;
      var repoList = repos.map(function (repo, index) {
        return (
          <li key={index}><a href={repo.html_url}>{repo.name}</a> --<Cc t={repo.name}></Cc> --  ({repo.stargazers_count} stars) <br/> {repo.description}</li>
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
  <RepoList promise={$.getJSON('http://docviewer.qalet.com//sample/data.json')} />,
  $('#example2')[0]
);
