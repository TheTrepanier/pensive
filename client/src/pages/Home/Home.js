import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Card from "../../components/Card/Card";
import "./style.css";


class Home extends Component {
  
  render() {

    return (
      <div className="App">
        <Jumbotron />
        <div className="container">
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
