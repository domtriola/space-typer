import React from 'react';
import { Link } from 'react-router';

const SessionFooter = ({ text, demoLogin }) => {
  const link = text === 'Sign Up' ? "/login" : "/signup";
  text = text === 'Sign Up' ? "Log In" : "Sign Up";

  return (
    <footer>
      {text === 'Log In' ? null :
        <button onClick={demoLogin}>Demo Log In</button>}
      <Link to={link}>{text}</Link>
    </footer>
  );
};

export default SessionFooter;
