import React, { Component } from "react";
import "./style.css";

function PostCard() {
  return (
    <div>
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
  );
}

export default PostCard;
