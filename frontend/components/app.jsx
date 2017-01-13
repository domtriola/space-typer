import React from 'react';
import HeaderContainer from './header/header_container.js';

const App = ({ children, router }) => (
  <div className="app-container">
    <HeaderContainer router={router} />
    <main>
      { children }
    </main>
    <footer><a href="/#/disclaimer">Disclaimer</a></footer>
  </div>
);

export default App;
