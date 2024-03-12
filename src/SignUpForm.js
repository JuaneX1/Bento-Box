import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';
import logo from './assets/FinalLogo.png';

const SignUpForm = ({ onClose, onSwitchBack }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    onClose();
    navigate('/dashboard');
  };

  return (
    <div className="signup-form-container">
      <img src={logo} alt="Logo" className="signup-logo" />
      <div className="signup-content">
        <form onSubmit={handleSubmit}> {}
          <input type="text" placeholder="Name" className="signup-input" />
          <input type="email" placeholder="Email" className="signup-input" /> {}
          <input type="password" placeholder="Password" className="signup-input" />
          <button type="submit" className="signup-submit-btn">Sign Up</button>
        </form>
        <div className="signup-form-footer">
          <button onClick={onClose} className="close-button">Close</button>
        </div>
        <div className="back-to-login-container">
          <button onClick={onSwitchBack} className="back-to-login-btn">Back to Login</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
