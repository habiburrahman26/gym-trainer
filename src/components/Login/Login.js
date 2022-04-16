import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <form className="form-control">
      <h1 className="heading">Login</h1>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="input-control">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <button className="btn-login">Login</button>
      </div>

      <div className="line-break">
        <div className="line"></div>
        <div>or</div>
        <div className="line"></div>
      </div>
      <div className="social-meadia-signin">
        <div>
          <button type="button">
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt=""
            />
            <p>Login in with facebook</p>
          </button>
        </div>
        <div>
          <button type="button">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt=""
            />
            <p>Login in with google</p>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
