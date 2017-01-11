import React from 'react';
import HeaderContainer from './header/header_container.js';

const App = ({ children, router }) => (
  <div>
    <HeaderContainer router={router} />
    <main>
      { children }
    </main>
  </div>
);

export default App;
