import React, { useState } from "react";
import './Login.css';
import logo from '../assets/logo1.png';
import google from '../assets/google.svg';
import { useNavigate } from "react-router-dom";
import api from "../api/service";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/auth/login', formData);
      
      
      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role);
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Login failed');
      } else {
        setError('Network error. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  return (
    <main className="login-pg">
      <header className="header">
        <div className="header-bg"></div>
        <div className="header-bg-off"></div>
      </header>
      <div className="header-content">
        <p>Login to continue</p>
        <h1>Welcome Back</h1>
      </div>
      <div className="login-sec">
        {error && <div className="error-message">{error}</div>}
        <div className="input-field">
          <label>Email</label>
          <div className="input">
            <input 
              type="email" 
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-field">
          <label>Password</label>
          <div className="input">
            <input 
              type="password" 
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <p>Forget Password?</p>
        </div>
        <div className="login-btn">
          <button onClick={handleLogin} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        <div className="or">
          <div className="left"></div>
          <div className="center">Or</div>
          <div className="right"></div>
        </div>
        <div className="google">
          <div className="google-div" onClick={handleCreateAccount}>
            <h4>Sign Up</h4>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;