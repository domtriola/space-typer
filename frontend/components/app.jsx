import React from 'react';
import Header from './header/header.jsx';

const App = ({ children, router }) => (
  <div>
    <Header router={router} />
    { children }
  </div>
);

export default App;
