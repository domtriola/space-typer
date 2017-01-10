import React from 'react';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    // TODO: test
    console.log(props.currentUser);
    console.log(this.props.logout);
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
