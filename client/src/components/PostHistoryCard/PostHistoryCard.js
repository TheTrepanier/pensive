import React, { Component } from "react";
import "./style.css";

function PostHistoryCard() {
  return (
    <div>
      <div className="row border" id="post-history">
        <div className="">
          <h4 className="card-title m-1">Title</h4>
          <div className="card-body">
            REM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </div>
          <div className="card-footer">2 days ago</div>
        </div>
      </div>
    </div>
  );
}

export default PostHistoryCard;
