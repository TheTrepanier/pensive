import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { Col, Row, Container } from "../../components/Grid/index";
import { withRouter } from "react-router-dom";
import UserReviewCard from "../../components/UserReviewCard/UserReviewCard";
import "./style.css";
import UserReviewWrapper from "../../components/UserReviewWrapper/UserReviewWrapper";
import reviews from "./reviews.json";
import auth0Client from "../../Auth/Auth";

class Home extends Component {
  state = {
    reviews
  };
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
              <button
                className="btn btn-dark btn-lg"
                id="start-journey"
                role="button"
                onClick={auth0Client.signIn}
              >
                Start My Journey
              </button>
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
            <UserReviewWrapper>
              <Row>
                {this.state.reviews.map(reviews => (
                  <div className="col-lg-4">
                    <UserReviewCard
                      id={reviews.id}
                      name={reviews.name}
                      image={reviews.image}
                    />
                  </div>
                ))}
              </Row>
            </UserReviewWrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
