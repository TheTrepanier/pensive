import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";
import auth0Client from "../../Auth/Auth"

const ProfileSideBar = () => {
  // const { user } = useAuth0();
  return (
    <div>
      <div className="profile-sidebar">
        <div className="profile-userpic text-center">
          <img src={auth0Client.getProfile().picture} className="img-responsive" alt="" />
        </div>
        <div className="profile-usertitle">
          <div className="profile-usertitle-name">""</div>
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
              <Link to="/profile" className="nav-link">
                <i className="fa fa-home" />
                Overview{" "}
              </Link>
            </li>
            <li className="profile-list">
              <Link to="/profile/posts" className="nav-link">
                <i className="fa fa-pencil" />
                Create A Post{" "}
              </Link>
            </li>
            <li className="profile-list">
              <Link to="/resources" className="nav-link">
                <i className="fa fa-book" />
                Resources{" "}
              </Link>
            </li>
            <li className="profile-list">
              <Link to="/profile/tasks" className="nav-link">
                <i className="fa fa-check" />
                Create New Task{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProfileSideBar);
