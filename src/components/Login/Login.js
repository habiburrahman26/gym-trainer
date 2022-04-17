import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../UI/LoadingSpinner';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGithub, gitUser] = useSignInWithGithub(auth);
  const [signInWithGoogle, guser] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  useEffect(() => {
    if (user || gitUser || guser) {
      navigate('/', { replace: true });
    }
  }, [user, navigate,gitUser,guser]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredEmail.trim() === '' || enteredPassword.trim() === '') {
      return;
    }

    signInWithEmailAndPassword(enteredEmail, enteredPassword);
  };

  return (
    <form className="form-control" onSubmit={submitHandler}>
      <h1 className="heading">Login</h1>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
      </div>
      <div className="input-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={passwordChangeHandler}
          value={enteredPassword}
        />
      </div>
      <p className="error-text">{error?.message}</p>
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
          <button type="button" onClick={() => signInWithGithub()}>
            <img
              src="https://img.icons8.com/glyph-neue/64/000000/github.png"
              alt=""
            />
            <p>Login with github</p>
          </button>
        </div>
        <div>
          <button type="button" onClick={() => signInWithGoogle()}>
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt=""
            />
            <p>Login with google</p>
          </button>
        </div>
      </div>
      <div className="toggle-page">
        <p>New to X-fitt? </p>
        <Link to="/registration">Register</Link>
      </div>
    </form>
  );
};

export default Login;
