import React, { Component } from "react";
import "./style.css";

const PostCard = (props) => {
  return (
    <div>
      <div className="profile-content">
        <form>
          Post Title
          <input 
            type="text" 
            name="title" 
            onChange={props.handleInputChange}
          />
          Blog Post
          <textarea
            id="subject"
            name="postBody"
            placeholder="Write something.."
            onChange={props.handleInputChange}
          />
          <input 
            type="submit" 
            value="Submit" 
            onClick={props.handleFormSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default PostCard;
