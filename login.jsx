import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default class SignIn extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="center center-login">
          <h1 className="login-title">Welcome Back</h1>
          <form action="#">
            <div className="text_field">
              <label className="email-login email" htmlFor="username">
                E-mail
              </label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Enter E-mail Address"
                required
              />
            </div>
            <div className="text_field">
              <label className="password-login password" htmlFor="password">
                Password
              </label>
              <br />
              <input
                type="text"
                id="password"
                placeholder="Enter Password"
                required
              />
            </div>
            <button className="login" type="submit">
              Login
            </button>
            <br />
            <a className="pass forgot-new">
              <Link className="link" to="/forgot">
                Forgot Password?
              </Link>
            </a>
            <br />
            <a className="signup-link forgot-new">
              <Link className="link" to="/signup">
                New to LiteLess?
              </Link>
            </a>
          </form>
        </div>
      </div>
    );
  }
}
