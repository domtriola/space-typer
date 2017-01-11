import React from 'react';
import { Link } from 'react-router';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  componentWillUpdate() {
    this.redirectUnlessLoggedIn();
  }

  redirectUnlessLoggedIn() {
    if (!this.props.currentUser)
      this.props.router.push("/login");
  }

  // TODO: this isn't working, figure out how to redirect on logout
  logout() {
    let router = this.props.router;
    this.props.logout().then(router.push("/login"));
  }

  render() {
    return (
      <div className="user-menu">
        <img className="user-icon" src="assets/iconmonstr-user-5.svg" />
        <ul className="dropdown">
          <li>
            <Link to={`users/${this.props.currentUser.id}`}>Profile</Link>
          </li>
          <li><button onClick={this.logout}>Logout</button></li>
        </ul>
      </div>
    );
  }
}

export default UserMenu;
