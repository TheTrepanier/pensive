import React from "react";
import "./style.css";

function ArticleCard() {
  return (
    <div>
      <div className="row border">
        <div className="col-lg-2">
          <div className="card-img-left" />
        </div>
        <div className="col-lg-10">
          <h4 className="card-title m-2">Title</h4>
          <button className="btn btn-primary m-1">View</button>
          <button className="btn btn-primary m-1">Save</button>
          <div className="card-body">
            REM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.t
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
