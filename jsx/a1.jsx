class Welcome extends React.Component {
  render() {
    return <h1>Hello i, {this.props.name}</h1>;
  }
}
ReactDOM.render(
  <Welcome name="Sara" />,
  document.getElementById('example')
);