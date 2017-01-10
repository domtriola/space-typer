import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn)
      this.props.router.push("/");
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({ user });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.props.errors.map((err, i) => <li key={i}>{err}</li>)}
        </ul>

        <label> Username:
          <input type="text"
            value={this.state.username}
            onChange={this.update("username")} />
        </label>

        <label> Password:
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SessionForm;
