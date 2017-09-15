import React from 'react';
import { Link } from 'react-router';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    this.redirectUnlessLoggedIn();
  }

  componentWillUnmount() {
    this.props.router.push("/login");
  }

  redirectUnlessLoggedIn() {
    if (!this.props.currentUser)
      this.props.router.push("/login");
  }

  render() {
    return (
      <div className="menu">
        <a href="/#">Home</a>
        <div className="user-menu">
          <img
            className="user-icon"
            src="assets/astronaut_outline.svg" />
          <ul className="dropdown">
            <li>
              <Link to={`users/${this.props.currentUser.id}`}>Profile</Link>
            </li>
            <li><button onClick={this.props.logout}>Logout</button></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserMenu;
