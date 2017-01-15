import React from 'react';
import SessionFooter from './session_footer.jsx';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(e) {
    e.preventDefault();
    let user = { username: "a", password: "testing" };
    this.props.login({ user });
  }

  render() {
    const text = this.props.formType === "login" ? "Log In" : "Sign Up";

    return (
      <div className="session-form">
        <h2>{text}</h2>

        <form onSubmit={this.handleSubmit}>
          <ul className="errors">
            {this.props.errors.map((err, i) => <li key={i}>{err}</li>)}
          </ul>

          <label>Username<br />
            <input type="text"
              value={this.state.username}
              onChange={this.update("username")} />
          </label>

          <br />

          <label>Password<br />
            <input type="password"
              value={this.state.password}
              onChange={this.update("password")} />
          </label>

          <br />

          <input type="submit" value={text} />
        </form>

        <h3>
          {text === 'Log In' ? "New to Space Typer?" : "Have an account?"}
        </h3>

        <SessionFooter text={text} demoLogin={this.demoLogin}/>
      </div>
    );
  }
}

export default SessionForm;
