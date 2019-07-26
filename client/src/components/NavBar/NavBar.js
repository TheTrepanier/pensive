import React from "react";
import logo from "./logo.png";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-wrapper";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
            {isAuthenticated && (
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="auth0-buttons">
          {!isAuthenticated && (
            <button
              onClick={() => loginWithRedirect({})}
              className="btn btn-dark btn-md"
            >
              Log in
            </button>
          )}

          {isAuthenticated && (
            <button onClick={() => logout()} className="btn btn-dark btn-md">
              Log out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
