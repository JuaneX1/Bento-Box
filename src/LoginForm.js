import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import logo from './assets/FinalLogo.png';

const LoginForm = ({ onClose, onSwitchForm }) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        onClose();
        navigate('/dashboard');
    };

    return (
      <div className="login-form-container">
        <img src={logo} alt="Logo" className="login-logo" />
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <button type="submit" className="login-submit-btn">Login</button>
          </form>
          <a href="#forgot" className="forgot-password-link">Forgot Password?</a>
          <div className="login-form-footer">
            <button onClick={onClose} className="close-button">Close</button>
            <button onClick={() => onSwitchForm('signup')} className="signup-button">Sign Up</button>
          </div>
        </div>
      </div>
    );
};

export default LoginForm;
