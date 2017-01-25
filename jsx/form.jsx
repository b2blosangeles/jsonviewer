class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {form: {}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({form:{value: event.target.value}});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.form.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.form.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit==" />
      </form>
    );
  }
}
ReactDOM.render(
  <NameForm />,
  document.getElementById('example')
);
