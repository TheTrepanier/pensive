import React, { Component } from "react";
import Card from "../../components/TopicsCard/TopicsCard";
import Wrapper from "../../components/Wrapper/index";
// import { Col, Row, Container } from "../../components/Grid/index";
import { Link } from "react-router-dom";
import topics from "./topics.json";
import "./style.css";

class Resources extends Component {
  state = {
    topics
  };
  render() {
    return (
      <div>
        <div className="jumbotron-resources">
          <h1 className="resources">Resources</h1>
        </div>
        <div className="container text-center">
          <Wrapper>
            {this.state.topics.map(topics => (
              <Link to={topics.toLink}>
                <Card
                  id={topics.id}
                  topic={topics.topic}
                  image={topics.image}
                />
              </Link>
            ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default Resources;
