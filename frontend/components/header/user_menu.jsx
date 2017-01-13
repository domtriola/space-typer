import React from 'react';
import { Link } from 'react-router';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
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

  toggleDropdown() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div className="user-menu">
        <img
          className="user-icon"
          src="assets/astronaut.png"
          onClick={this.toggleDropdown} />
        <ul className={this.state.active ? "dropdown active" : "dropdown"}>
          <li>
            <Link to={`users/${this.props.currentUser.id}`}>Profile</Link>
          </li>
          <li><button onClick={this.props.logout}>Logout</button></li>
        </ul>
      </div>
    );
  }
}

export default UserMenu;
