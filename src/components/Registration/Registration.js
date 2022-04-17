import React, { useEffect, useState } from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import SocialSignIn from '../SocialSignin/SocialSignIn';

const Registration = () => {
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
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

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      enteredName.trim() === '' ||
      enteredEmail.trim() === '' ||
      enteredPassword.trim() === ''
    ) {
      return;
    }

    await createUserWithEmailAndPassword(enteredEmail, enteredPassword);
    await updateProfile({ displayName: enteredName.trim() });
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
      <p className="error-text">{error?.message}</p>
      <div>
        <button className="btn-login">Registration</button>
      </div>
      <div className="line-break">
        <div className="line"></div>
        <div>or</div>
        <div className="line"></div>
      </div>
      <SocialSignIn name={'Sign up'}/>
      <div className="toggle-page">
        <p>Already have an account? </p>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
};

export default Registration;
