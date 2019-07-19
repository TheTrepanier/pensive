import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { Col, Row, Container } from "../../components/Grid/index";
import "./Resources.css";

class Resources extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-resources">
          <h1 className="resources">Resources</h1>
        </div>
        <div className="container">
          <Row>
            <Col size="md-6">
              <Card />
              <Card />
            </Col>
            <Col size="md-6">
              <Card />
              <Card />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Resources;
