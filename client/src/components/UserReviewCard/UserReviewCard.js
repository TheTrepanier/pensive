import React, { Component } from "react";
import "./style.css";

function UserReviewCard(props) {
  return (
    <div className="row">
      <div className="card" id="user-review">
        <img src={props.image} className="text-center" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <hr />
          <span class="heading">User Rating</span>
          <div class="review-block-rate">
            <button
              type="button"
              class="btn btn-success btn-xs"
              aria-label="Left Align"
            >
              <span class="fa fa-star" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="btn btn-success btn-xs"
              aria-label="Left Align"
            >
              <span class="fa fa-star" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="btn btn-success btn-xs"
              aria-label="Left Align"
            >
              <span class="fa fa-star" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="btn btn-success btn-xs"
              aria-label="Left Align"
            >
              <span class="fa fa-star" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="btn btn-success btn-xs"
              aria-label="Left Align"
            >
              <span class="fa fa-star" aria-hidden="true" />
            </button>
          </div>
          <p>4.1 average based on 254 reviews.</p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserReviewCard;
