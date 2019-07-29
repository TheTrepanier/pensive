import React, { Component } from "react";
import "./style.css";

function PostHistoryCard(props) {
  return (
    <div>
      <div className="row border" id="post-history">
        <div className="" datatype={props.id}>
          <h4 className="card-title m-1">{props.title}</h4>
          <div className="card-body">
            {props.body}
          </div>
          <div className="card-footer">2 days ago</div>
        </div>
      </div>
    </div>
  );
}

export default PostHistoryCard;
