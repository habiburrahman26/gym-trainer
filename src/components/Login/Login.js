import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail ,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../UI/LoadingSpinner';
import SocialSignIn from '../SocialSignin/SocialSignIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail (auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

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

  const resetPassword = async () => {
    if (enteredEmail.trim() === '') {
      toast.error('Please enter your email address')
    } else {
      await sendPasswordResetEmail(enteredEmail);
      toast.success("Email send");
    }
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
      <button type="button" className="forgot-password" onClick={resetPassword}>
        Forget Password?
      </button>
      <p className="error-text">{error?.message}</p>
      <div>
        <button className="btn-login">Login</button>
      </div>

      <div className="line-break">
        <div className="line"></div>
        <div>or</div>
        <div className="line"></div>
      </div>
      <SocialSignIn name="Login" />
      <div className="toggle-page">
        <p>New to X-fitt? </p>
        <Link to="/registration">Register</Link>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Login;
