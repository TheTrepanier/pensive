import React, { Component } from "react";
import "./style.css";
import PostCard from "../../components/ProfileCard/PostCard";
import ProfileSideBar from "../../components/ProfileSideBar/ProfileSideBar";
import API from "../../utils/API";

class UserPost extends Component {
  state = {
    title: "",
    postBody: "",
    posts: [],
    error: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });    
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.title || !this.state.postBody) {
      alert("Please fill out both the Title and Body of the post.");
    } else {

      API.makePost({
        postTitle: this.state.title,
        postBody: this.state.postBody,
        author: "Johnny Appleseed",
      })
        .then(res => alert("Posted!"))
        .catch(err => console.error(err));
    }
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row profile">
            <div className="col-md-3 mt-5">
              <ProfileSideBar />
            </div>
            <div className="col-md-9">
              <h2>Create New Post</h2>
              <PostCard 
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}  
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserPost;
