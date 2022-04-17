// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDX3K1nqOK20OBR5g8wX4Qu33xKZOwcxrw',
  authDomain: 'gym-trainer-bf1b5.firebaseapp.com',
  projectId: 'gym-trainer-bf1b5',
  storageBucket: 'gym-trainer-bf1b5.appspot.com',
  messagingSenderId: '360828887668',
  appId: '1:360828887668:web:8296c736133784c825e721',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
