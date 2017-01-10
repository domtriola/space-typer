import React from 'react';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.currentUser);
  }

  render() {
    return (
      <div>username</div>
    );
  }
}

export default UserMenu;
