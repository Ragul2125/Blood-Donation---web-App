import React from "react";
import './Login.css'
import logo from '../assets/logo1.png';
import google from '../assets/google.svg'

const Login = () => {
  return (
    <main className="login-pg">
      <header className="header">
        <div className="header-bg"></div>
        <div className="header-bg-off"></div>
      </header>
      {/* <div className="logo">
        <img src={logo} alt="logo" />
      </div> */}
      <div className="login-sec">
        <div className="input-field">
          <label>Email</label>
          <div className="input">
          <input type="text" />
          </div>
        </div>
        <div className="input-field">
          <label>Password</label>
          <div className="input">
          <input type="text" />
          </div>
          <p>Forget Password?</p>
        </div>
        <div className="login-btn">
            <button>Login </button>
        </div>
        <div className="or">
          <div className="left"></div>
          <div className="center">Or</div>
          <div className="right"></div>
        </div>
        <div className="google">
          <div className="google-div">
            <img src={google} alt="google" />
            <h4>Signin with google </h4>
          </div>
          <div className="face-book">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
