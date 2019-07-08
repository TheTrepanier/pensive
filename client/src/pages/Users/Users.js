import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./style.css";

class User extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="row profile">
          <div className="col-md-2">
            <div className="profile-sidebar">
              <div className="profile-userpic">
                <img src="" className="img-responsive" alt="" />
              </div>
              <div className="profile-usertitle">
                <div className="profile-usertitle-name">Aaron Gonzalez</div>
                <div className="profile-usertitle-job">Developer</div>
              </div>
              <div className="profile-userbuttons">
                <button type="button" className="btn btn-success btn-sm">
                  Follow
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  Message
                </button>
              </div>
              <div className="profile-usermenu">
                <ul className="profile-nav">
                  <li className="profile-list">
                    <a href="#">
                      <i className="fa fa-home" />
                      Overview{" "}
                    </a>
                  </li>
                  <li className="profile-list">
                    <a href="#">
                      <i className="fa fa-user" />
                      Account Settings{" "}
                    </a>
                  </li>
                  <li className="profile-list">
                    <a href="#" target="_blank">
                      <i className="fa fa-check" />
                      Tasks{" "}
                    </a>
                  </li>
                  <li className="profile-list">
                    <a href="#">
                      <i className="fa fa-flag" />
                      Help{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="profile-content">
              Some user related content goes here...
            </div>
          </div>
          <div className="col-md-3">
            <div className="profile-content">
              Some user related content goes here...
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default User;
