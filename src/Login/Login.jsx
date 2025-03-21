import React from "react";
import './Login.css'
import logo from '../assets/logo1.png';
import google from '../assets/google.svg'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate()
  const handlelogin =()=>{
    Navigate("/dashboard")
  }
  const handlecreate =()=>{
    Navigate("/signup")
  }
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
        <div className="input-field">
          <label>Email</label>
          <div className="input">
          <input type="text" placeholder="Enter your Email"/>
          </div>
        </div>
        <div className="input-field">
          <label>Password</label>
          <div className="input">
          <input type="text" placeholder="Enter your Password"/>
          </div>
          <p>Forget Password?</p>
        </div>
        <div className="login-btn">
            <button onClick={handlelogin}>Login </button>
        </div>
        <div className="or">
          <div className="left"></div>
          <div className="center">Or</div>
          <div className="right"></div>
        </div>
        <div className="google">
          <div className="google-div" onClick={handlecreate}>
            <h4>Sign Up</h4>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default Login;
