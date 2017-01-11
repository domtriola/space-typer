import React from 'react';
import Logo from './logo.jsx';
import UserMenuContainer from './user_menu_container';

const Header = ({ router }) => {
  return (
    <div>
      <Logo />
      <UserMenuContainer router={router}/>
    </div>
  );
};

export default Header;
