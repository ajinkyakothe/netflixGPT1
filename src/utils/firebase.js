// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxuq1UOJclkspfNBShGvvcNCpVY5mzs9I",
  authDomain: "netflixgpt-9a070.firebaseapp.com",
  projectId: "netflixgpt-9a070",
  storageBucket: "netflixgpt-9a070.appspot.com",
  messagingSenderId: "765348417632",
  appId: "1:765348417632:web:a57ce214deab1f2779b305",
  measurementId: "G-B71BN7MYP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
