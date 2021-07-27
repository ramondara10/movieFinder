import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import SignInComponent from "../Signin/SignIn";
import "./Login.css";

function Login() {
  const [SignIn, SetSignIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signinHandler = () => {
    setIsSignedIn(true);
  }

  if(isSignedIn) {
    return <Redirect to="/home/" />
  }

  return (
    <div className="login">
      <div className="login-background">
        <img
          className="login-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ni9r3LhDapbQosovY-Sdq_sig66BJretyQ&usqp=CAU"
          alt=" logo-placeholder"
        />
      </div>
      <button onClick={() => SetSignIn(true)} className="login-button">
        Sign in
      </button>
      <div className="login-gradient"></div>
      <div className="login-body">
        {SignIn ? (
          <SignInComponent signinHandler={signinHandler} />
        ) : (
          <>
            <h1>Take a look, I know you want to!</h1>
            <h2>Unlimited Movies and Shows</h2>
            <h3>Sign In</h3>
            <div className="login-input">
              <form>
                <input
                  type="email"
                  placeholder="email-address"
                  className="email"
                />
                <button onClick={() => SetSignIn(true)} className="login-here">
                  LOGIN HERE
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
