import React, { Component } from "react";
import logo from "./logo.png";
import "./style.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  
  render() {
    const { isAuthenticated, login, logout} = this.props.auth;
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
            </ul>
          </div>
          <div>
            <button className="btn btn-dark auth0-button" onClick={isAuthenticated() ? logout : login}>
              {isAuthenticated() ? "logout" : "login"}
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
