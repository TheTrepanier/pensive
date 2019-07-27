import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import PostCard from "../../components/ProfileCard/PostCard";
import ProfileSideBar from "../../components/ProfileSideBar/ProfileSideBar";

const UserPost = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row profile">
          <div className="col-md-3 mt-5">
            <ProfileSideBar />
          </div>
          <div className="col-md-9">
            <h2>Create New Post</h2>
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
