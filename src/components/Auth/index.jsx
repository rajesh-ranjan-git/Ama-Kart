import React, { useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const AuthIndex = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
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
        <form autoComplete="off" onSubmit={handleSubmission}>
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
            <div className="login-btn">Login</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthIndex;
