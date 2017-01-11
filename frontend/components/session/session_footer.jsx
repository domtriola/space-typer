import React from 'react';
import { Link } from 'react-router';

const SessionFooter = ({ text, demoLogin }) => {
  const link = text === 'Sign Up' ? "/login" : "/signup";
  text = text === 'Sign Up' ? "Log In" : "Sign Up";

  return (
    <footer>
      <p>{text === 'Log In' ? "Already have an account?" : ""}</p>
      <Link to={link}>{text}</Link> or <button onClick={demoLogin}>Demo</button>
    </footer>
  );
};

export default SessionFooter;
