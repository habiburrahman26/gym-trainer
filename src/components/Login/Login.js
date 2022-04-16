import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <form className="form-control">
      <h1 className="heading">Login</h1>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <p className="error-text"></p>
      </div>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <p className="error-text"></p>
      </div>
      <div>
          <button className="btn-login">Login</button>
      </div>
    </form>
  );
};

export default Login;
