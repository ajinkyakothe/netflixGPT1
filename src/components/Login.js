import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/UserSlice.js";
import { BG_URL, USER_AVATAR } from "../utils/constant.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    //signup and signIn logic

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "user.current.value",
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // const { uid, email, displayName, photoURL } = auth.currentUser;
              // dispatch(
              //   addUser({
              //     uid: uid,
              //     email: email,
              //     displayName: displayName,
              //     photoURL: photoURL,
              //   })
              // );
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });

          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute w-[100%]">
        <img
          className=" h-screen object-cover md:w-full"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full md:w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-gray-700 text-white"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full  bg-gray-700"
        />

        <p className="text-center text-red-500 text-lg">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full"
          onClick={handleButtonClick}
        >
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer text-center underline"
          onClick={toggleSignIn}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now !"
            : "Already a User Sign In Now !"}
        </p>
      </form>
    </div>
  );
};

export default Login;
