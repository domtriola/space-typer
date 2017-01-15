import React from 'react';
import { Link } from 'react-router';

const SessionFooter = ({ text, demoLogin }) => {
  const link = text === 'Sign Up' ? "/login" : "/signup";
  text = text === 'Sign Up' ? "Log In" : "Sign Up";

  return (
    <footer>
      <Link to={link}>{text}</Link>
      <button onClick={demoLogin}>Demo</button>
    </footer>
  );
};

export default SessionFooter;
