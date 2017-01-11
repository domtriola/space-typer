import React from 'react';
import Logo from './logo.jsx';
import UserMenuContainer from './user_menu_container';

const Header = ({ currentUser, router }) => {
  let userMenu;
  if (currentUser)
    userMenu = <UserMenuContainer router={router} />;
  else
    userMenu = "";

  return (
    <header>
      <Logo />
      {userMenu}
    </header>
  );
};

export default Header;
