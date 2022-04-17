import React, { useState } from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { Link, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

const Registration = () => {
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  if (user) {
    navigate('/', { replace: true });
  }

  const signInEmail = async () => {
    await createUserWithEmailAndPassword(enteredEmail, enteredPassword, {
      sendEmailVerification: true,
    });
    await updateProfile({ displayName: enteredName.trim() });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      enteredName.trim() === '' ||
      enteredEmail.trim() === '' ||
      enteredPassword.trim() === ''
    ) {
      return;
    }

    signInEmail();
  };

  return (
    <form className="form-control" onSubmit={submitHandler}>
      <h1 className="heading">Registration</h1>
      <div className="input-control">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
      </div>
      <div className="input-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
      </div>
      <div>
        <button className="btn-login">Registration</button>
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
      <div className="toggle-page">
        <p>Already have an account? </p>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
};

export default Registration;
