import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import Loader from "../UI/Loader";

const AuthIndex = () => {
  const [loader, setLoader] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();

  const handleInput = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    console.log(details);

    if (location.pathname === "/signup") {
      signUpWithEmailAndPassword();
    }
  };

  const signUpWithEmailAndPassword = async () => {
    setLoader(true);
    try {
      console.log("This is from signupWithEmailAndPassword");
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTqbgeII96O1HO3ismm_xgRhq8lN4WH6U`,
        {
          email: details.email,
          password: details.password,
          returnSecureToken: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-container--box">
          <div className="tab-selector">
            <NavLink to={"/login"}>
              <h1>Login</h1>
            </NavLink>
            <NavLink to={"/signup"}>
              <h1>Signup</h1>
            </NavLink>
          </div>
          <form autoComplete="off" onSubmit={handleSubmission} method="POST">
            <div className="input-wrap">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email..."
                value={details.email}
                onChange={handleInput}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password..."
                value={details.password}
                onChange={handleInput}
              />
            </div>
            <div className="button-wrap">
              <button className="login-btn">
                {location.pathname === "/login" ? "Login" : "Signup"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default AuthIndex;
