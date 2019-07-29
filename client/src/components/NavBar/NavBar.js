import React, { Component } from "react";
import logo from "./logo.png";
import "./style.css";
import { NavLink, withRouter } from "react-router-dom";
import auth0Client from "../../Auth/Auth";

class NavBar extends Component {
  render() {
    const signOut = () => {
      auth0Client.signOut();
      this.props.history.replace("/");
    };
    return (
      <header className="navbar-list">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink to="/" className="navbar-brand">
            <img id="logo" src={logo} alt={logo} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/resources" className="nav-link">
                  Resources
                </NavLink>
              </li>
              {auth0Client.isAuthenticated() && (
                <li>
                  <NavLink to="/profile" className="nav-link">
                    Profile
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <div>
            {!auth0Client.isAuthenticated() && (
              <button
                className="btn btn-dark auth0-buttons"
                onClick={auth0Client.signIn}
              >
                Sign In
              </button>
            )}
            {auth0Client.isAuthenticated() && (
              <button
                className="btn btn-dark auth0-buttons"
                onClick={() => {
                  signOut();
                }}
              >
                Sign Out
              </button>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(NavBar);
