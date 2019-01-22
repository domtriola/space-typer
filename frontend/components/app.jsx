import React from 'react';
import HeaderContainer from './header/header_container.js';
import Stars from './stars/stars.jsx';

const isChrome = (
  Boolean(window.chrome) &&
  window.navigator.vendor === "Google Inc."
);
const isFirefox = typeof InstallTrigger !== 'undefined';

const App = ({ children, router }) => (
  <div className="app-container">
    {isChrome || isFirefox ? <Stars /> : null}
    <HeaderContainer router={router} />
    <main>
      { children }
    </main>
    <footer className="footer">
      <a href="https://github.com/domtriola" target="_blank">
        <img src="/assets/github.png" />
      </a> | &copy; <a href="https://dominicktriola.com" target="_blank">
        Dominick Triola</a> | <a href="/#/disclaimer">Disclaimer</a>
    </footer>
  </div>
);

export default App;
