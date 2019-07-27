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
              <h1>
                “I sometimes find, and I am sure you know the feeling, that I
                simply have too many thoughts and memories crammed into my
                mind."
              </h1>
              <h3>J.K.Rowling</h3>
              <hr className="my-4" />
              <h5 />
              <br />
              <button
                className="btn btn-dark btn-lg"
                id="start-journey"
                role="button"
                onClick={this.props.auth.login}
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
          <h5>
            It's easy to get overloaded with memories and thoughts of our past.
            That's when you need to relax, take a deep breath, and empty some of
            them out into Pensive... that is, if you have one. Otherwise, a vent
            session to a good friend can do the same.
          </h5>
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
