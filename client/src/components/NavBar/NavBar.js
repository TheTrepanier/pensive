import React from "react";
import logo from "./logo.png";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-wrapper";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <header className="navbar-list">
      <nav class="navbar navbar-expand-lg navbar-light">
        <NavLink to="/" className="navbar-brand">
          <img id="logo" src={logo} alt={logo} />
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink to="/" className="nav-link">
                Home <span class="sr-only">(current)</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" href="#">
                Resources
              </NavLink>
            </li>
            {isAuthenticated && (
              <li class="nav-item">
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
