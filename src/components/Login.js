import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '', // Added email field
  });
  const [loginType, setLoginType] = useState('admin'); // Default to 'admin'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a login process
    if (
      (loginType === 'admin' && formData.username === 'admin' && formData.password === 'password') ||
      (loginType === 'passenger' && formData.username === 'passenger' && formData.password === 'password')
    ) {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>{loginType === 'admin' ? 'Admin Login' : 'Passenger Login'}</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="small-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="small-input"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-switch">
          <button
            onClick={() => setLoginType('admin')}
            className={loginType === 'admin' ? 'active' : ''}
          >
            Admin Login
          </button>
          <button
            onClick={() => setLoginType('passenger')}
            className={loginType === 'passenger' ? 'active' : ''}
          >
            Passenger Login
          </button>
        </div>
      </div>

      {/* Separator Line */}
      <div className="separator"></div>

      {/* Signup Section */}
      <div className="signup-content">
        <h2>Create a New Account</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="new-username">Username</label>
            <input
              type="text"
              id="new-username"
              name="new-username"
              placeholder="Enter username"
              required
              className="small-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label> {/* Added email input */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              className="small-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">Password</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              placeholder="Enter password"
              required
              className="small-input"
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
