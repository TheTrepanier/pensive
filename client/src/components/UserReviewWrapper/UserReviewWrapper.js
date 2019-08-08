import React from "react";
import "./style.css";

function UserReviewWrapper(props) {
  return <div className="wrapper" id="review-wrapper">{props.children}</div>;
}

export default UserReviewWrapper;
