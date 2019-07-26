import React, { Component } from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="row">
      <div className="card" id="card-topic">
        <img src={props.image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{props.topic}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
