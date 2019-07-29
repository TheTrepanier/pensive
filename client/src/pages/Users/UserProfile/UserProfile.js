import React, { Component } from "react";
import "./style.css";
import { withRouter } from "react-router-dom"
import ProfileSideBar from "../../../components/ProfileSideBar/ProfileSideBar";
import PostHistoryCard from "../../../components/PostHistoryCard/PostHistoryCard";
import auth0Client from "../../../Auth/Auth"

class PostHistory extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center">Welcome {auth0Client.getProfile().given_name}!</h1>
            </div>
          </div>
          <div className="row profile">
            <div className="col-md-3 mt-5">
              <ProfileSideBar />
            </div>
            <div className="col-md-9">
              <h2 id="profile-history">Post History</h2>
              <PostHistoryCard />
              <PostHistoryCard />
              <PostHistoryCard />
              <PostHistoryCard />
              <button className="btn btn-primary" id="view-all">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostHistory);
