import React from 'react';
import HeaderContainer from './header/header_container.js';
import Stars from './stars/stars.jsx';

const isChrome = Boolean(window.chrome) && Boolean(window.chrome.webstore);
const isFirefox = typeof InstallTrigger !== 'undefined';

const App = ({ children, router }) => (
  <div className="app-container">
    {isChrome || isFirefox ? <Stars /> : null}
    <HeaderContainer router={router} />
    <main>
      { children }
    </main>
    <footer><a href="/#/disclaimer">Disclaimer</a></footer>
  </div>
);

export default App;
