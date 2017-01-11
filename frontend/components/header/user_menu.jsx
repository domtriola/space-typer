import React from 'react';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.redirectUnlessLoggedIn();
  }

  redirectUnlessLoggedIn() {
    if (!this.props.currentUser)
      this.props.router.push("/login");
  }

  render() {
    return (
      <div>
        usericon
        <ul className="user-menu">
          <li>Profile</li>
          <li><button onClick={this.props.logout}>Logout</button></li>
        </ul>
      </div>
    );
  }
}

export default UserMenu;
