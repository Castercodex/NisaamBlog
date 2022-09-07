import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";
// import validate from "./validate";

const Register = () => {
  const { values, errors, handleChange } = useForm(
    {
      username: "",
      email: "",
      password: "",
      // password2: "",
    },

    (values) => console.dir(values)
  );
  const { username, email, password } = values;
  const { usernameError, emailError, passwordError } = errors;
  const [terms, setTerms] = useState(false);

  const handleTerms = () => {
    setTerms(!terms);
  };

  const isValid = terms && !errors;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log(values);
    }
  };
  return (
    <div className="auth-container">
      <div className="logo-container">
        <Link className="logo" to={"/"}>
          Nisam
        </Link>
      </div>
      <div className="auth-content">
        <div className="auth-form">
          <h1 className="auth-title">Create an account for free</h1>
          <p className="desc">Sign up. Get access to instant update</p>
          <form onSubmit={handleSubmit} method="post" className="form-group">
            <div className="username">
              <label htmlFor="username">nisam/</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                id="username"
                placeholder="Username"
                required
                autoComplete="new-off"
              />
              <span className="err">{usernameError && usernameError}</span>
            </div>
            <div className="animated-form">
              <input
                onChange={handleChange}
                value={email}
                type="email"
                name="email"
                id="email"
                required
              />
              <label className="anim-label" htmlFor="email">
                <span className="anim-name">Email</span>
              </label>
              <span className="err">{emailError && emailError}</span>
            </div>
            <div className="animated-form">
              <input
                type="password"
                value={password}
                onChange={handleChange}
                name="password"
                id="password1"
                autoComplete="new-off"
                required
              />
              <label className="anim-label" htmlFor="password">
                <span className="anim-name">Password</span>
              </label>
              <span className="err">{passwordError && passwordError}</span>
            </div>
            {/* <div className="animated-form">
              <input
                onChange={handleChange}
                value={password2}
                type="password"
                name="password2"
                id="confirm-password"
                required
              />
              <label className="anim-label" htmlFor="password2">
                <span className="anim-name">Confirm Password</span>
              </label>
              <span className="err">{passwordError && passwordError}</span>
            </div> */}
            <div className="infos">
              <span className="info">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="checkbox"
                  id="check"
                  onChange={handleTerms}
                />
                <p>
                  By creating an account you are agreeing to our{" "}
                  <Link to={""} className="link">
                    Terms and Condition
                  </Link>
                </p>
              </span>
              <span className="info">
                <p>
                  View our <Link to={""}>Privacy Notice</Link> to see how we
                  manage your personal information
                </p>
              </span>
            </div>
            <div className="submit-btn">
              <button
                type="submit"
                className={`btn ${
                  isValid ? "btn-active" : "btn-disabled"
                } btn-primary`}
              >
                Sign up with email
              </button>
            </div>
            <div className="additional-info">
              <p>
                Already have an account?{" "}
                <Link to={"/login"} className="link">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="img-container">
          <img src="/auth-banner.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
