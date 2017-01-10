import React from 'react';
import Header from './header/header.jsx';

const App = ({ children }) => (
  <div>
    <Header />
    { children }
  </div>
);

export default App;
