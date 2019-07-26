import React, { Component } from "react";
import "./style.css";

<<<<<<< Updated upstream
class Card extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
=======
function Card(props) {
  return (
    <div className="row">
      <div className="card" id="card-topic">
        <img src={props.image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{props.topic}</h2>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}

export default Card;
