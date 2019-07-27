import React from "react";
import "./style.css";

function ArticleCard(props) {
  return (
    <div>
      <div className="row mb-2 border-bottom">
        <div className="col-lg-2">
          <div className="card-img-left">
            <img src={props.image} alt={props.title} />
          </div>
        </div>
        <div className="col-lg-10">
          <h4 className="card-title m-2">{props.title}</h4>
          <a 
            href={props.link}
            className="btn btn-primary m-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
          {/* <button className="btn btn-primary m-1">Save</button> */}
          <div className="card-body">
            {props.teaser}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
