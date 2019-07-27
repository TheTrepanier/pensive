import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { Col, Row, Container } from "../../components/Grid/index";
import UserReviewCard from "../../components/UserReviewCard/UserReviewCard";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <div>
            <br />
            <br />
            <br />
            <br />
            <header>
              <br />
              <h1>Conquer Negativity, Stess, Anxiety and Doubt</h1>
              <h3 />
              <hr className="my-4" />
              <h5>Pensive is the #1 App for Mental Health and Well Being!</h5>
              <br />
              <a
                className="btn btn-dark btn-lg"
                href="#"
                id="start-journey"
                role="button"
              >
                Start My Journey
              </a>
            </header>
          </div>
        </Jumbotron>
        <div className="container text-center">
          <div class="divider">
            <span />
            <span>
              <h2>About Pensive</h2>
            </span>
            <span />
          </div>
          <h4>
            Welcome to Pensive! It's easy to get overloaded with memories and
            thoughts of our past. That's when you need to relax, take a deep
            breath, and empty some of them out into Pensive... that is, if you
            have one. Otherwise, a vent session to a good friend can do the
            same.
          </h4>
          <br />
          <br />
          <Row>
            <div className="col-lg-4" />
            <h5 className="col-lg-4" id="rowling-quote">
              “I sometimes find, and I am sure you know the feeling, that I
              simply have too many thoughts and memories crammed into my mind."
              <p>-J.K. Rowling</p>
            </h5>
            <div className="col-lg-4" />
          </Row>
        </div>
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col-lg-4">
              <UserReviewCard />
            </div>
            <div className="col-lg-4">
              <UserReviewCard />
            </div>
            <div className="col-lg-4">
              <UserReviewCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
