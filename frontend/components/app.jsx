import React from 'react';
import HeaderContainer from './header/header_container.js';
import Stars from './stars/stars.jsx';

const App = ({ children, router }) => (
  <div className="app-container">
    <Stars />
    <HeaderContainer router={router} />
    <main>
      { children }
    </main>
    <footer><a href="/#/disclaimer">Disclaimer</a></footer>
  </div>
);

export default App;
