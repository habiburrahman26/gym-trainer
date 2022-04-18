import React, { useEffect } from 'react';
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../UI/LoadingSpinner'

const SocialSignIn = ({ name}) => {
  const [signInWithGithub, gitUser,gitLoading] = useSignInWithGithub(auth);
  const [signInWithGoogle, guser,googleLoading] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (gitUser || guser) {
      navigate(from, { replace: true });
    }
  }, [navigate, gitUser, guser, from]);

  if(gitLoading || googleLoading){
    return <LoadingSpinner/>
  }

  return (
    <div className="social-meadia-signin">
      <div>
        <button type="button" onClick={() => signInWithGithub()}>
          <img
            src="https://img.icons8.com/glyph-neue/64/000000/github.png"
            alt=""
          />
          <p>{name} with github</p>
        </button>
      </div>
      <div>
        <button type="button" onClick={() => signInWithGoogle()}>
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt=""
          />
          <p>{name} with google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
