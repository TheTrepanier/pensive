import React, { Component, Fragment } from "react";
import "./style.css";
import { withRouter } from "react-router-dom"
import ProfileSideBar from "../../../components/ProfileSideBar/ProfileSideBar";
import PostHistoryCard from "../../../components/PostHistoryCard/PostHistoryCard";
import auth0Client from "../../../Auth/Auth"
import API from "../../../utils/API";
import request from "superagent";

class PostHistory extends Component {

  state = {
    posts: [],
    error: false,
    user: ""
  };

  componentWillMount() {
    this.setState({
      user: "Tim Apple"
    })
    this.loadPosts();
  }

  loadPosts = () => {
    // const user = "Johnny Appleseed";
    API.getPostsByUser({
      userName:  "Tim Apple",
    })
      .then(results => {
        // console.log(results);
        
        const userPosts = results.data.map(posts => ({
          id: posts._id,
          postTitle: posts.postTitle,
          postBody: posts.postBody,
          timeCreated: posts.createdAt,
        }));

        this.setState({
          posts: [
            ...this.state.posts,
            ...userPosts,
          ],
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      })
  }

  render() {
    const {
      // err,
      posts,
    } = this.state;

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
              {posts.map(post =>
                <Fragment key={post.id}>
                  <PostHistoryCard
                    id={post.id}
                    title={post.postTitle}
                    body={post.postBody}
                  />
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PostHistory);
