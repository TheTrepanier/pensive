import React, { Component } from "react";
import "./style.css";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";

const User = () => {
  const { loading, user } = useAuth0();

  return (
    <div>
      <div className="container mt-5">
        <div className="row profile">
          <div className="col-md-3">
            <div className="profile-sidebar">
              <div className="profile-userpic text-center">
                <img src={user.picture} className="img-responsive" alt="" />
              </div>
              <div className="profile-usertitle">
                <div className="profile-usertitle-name">{user.name}</div>
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
                    <Link to="/" className="nav-link">
                      <i className="fa fa-pencil" />
                      Create A Post{" "}
                    </Link>
                  </li>
                  <li className="profile-list">
                    <Link to="/" className="nav-link">
                      <i className="fa fa-book" />
                      Resources{" "}
                    </Link>
                  </li>
                  <li className="profile-list">
                    <Link to="/" className="nav-link">
                      <i className="fa fa-check" />
                      Create New Task{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="profile-content">
              <form>
                Post Title
                <input type="text" name="title" />
                Blog Post
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
