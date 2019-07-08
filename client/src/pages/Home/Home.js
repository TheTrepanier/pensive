import React, { Component } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Card from "../../components/Card/Card";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        <div className="container">
          <Card />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
