import React from 'react';

const Registration = () => {
  return (
    <form className="form-control">
      <h1 className="heading">Registration</h1>
      <div className="input-control">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
      </div>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <button className="btn-login">Registration</button>
      </div>
      <div className="social-meadia-signin">
        <div>
          <button type="button">
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt=""
            />
            <p>Sign up with facebook</p>
          </button>
        </div>
        <div>
          <button type="button">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt=""
            />
            <p>Sign up with google</p>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Registration;
