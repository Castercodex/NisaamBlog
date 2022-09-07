import React from "react";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";
const Login = () => {
  const { values, errors, handleChange } = useForm(
    {
      username: "",
      password: "",
    },

    (values) => console.dir(values)
  );
  const { username, password } = values;
  const { usernameError, passwordError } = errors;
  delete errors.emailError;
  const isValid = !errors;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log(values);
    }
  };
  return (
    <div className="auth-container auth-container-login">
      <div className="logo-container">
        <Link className="logo" to={"/"}>
          Nisam
        </Link>
      </div>
      <div className="auth-content auth-content-login">
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
            <div className="infos"></div>
            <div className="submit-btn">
              <button
                type="submit"
                className={`btn ${
                  isValid ? "btn-active" : "btn-disabled"
                } btn-primary`}
              >
                Login
              </button>
            </div>
            <div className="additional-info">
              <p>
                <Link to="/password-resest">Forgot Password?</Link>
              </p>
              <p>
                Dont have an account?{" "}
                <Link to={"/register"} className="link">
                  Create one
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
