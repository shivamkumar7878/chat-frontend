// src/components/SignupForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './SignupForm.css'; // Import the CSS file for styling

const SignupForm = () => {
  const [name, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`, {
        name,
        email,
        password,
        phone,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error signing up, please try again.');
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your Mobile number"
            required
          />
        </div>
        <div className="form-group">
          <input type="checkbox" required />
          <label>
            I’ve read and agree with Terms of Service and Privacy Policy
          </label>
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
      {message && <p>{message}</p>}
      <div className="google-signin">
        <p>-OR-</p>
        <button className="google-button">Sign in with Google</button>
      </div>
    </div>
  );
};

export default SignupForm;
