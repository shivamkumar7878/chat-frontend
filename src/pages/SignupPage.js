// src/pages/SignupPage.js

import React from 'react';
import SignupForm from '../components/SignupForm';
import './SignupPage.css'; // Import the CSS file for styling

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="left-section">
        <SignupForm />
      </div>
      <div className="right-section">
        <h2>Hello!</h2>
        <p>Enter your details to start the journey with us.</p>
      </div>
    </div>
  );
};

export default SignupPage;
