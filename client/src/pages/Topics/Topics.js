import React, { Component } from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

class Topics extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-topics">
          <h1 className="resources">Topics</h1>
        </div>
        <div className="container mt-5">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    );
  }
}

export default Topics;
