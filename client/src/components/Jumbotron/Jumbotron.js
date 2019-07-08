import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron fluid">
      <br />
      <br />
      <br />
      <br />
      <header>
        <br />
        <h1>Overcome stress and negative thoughts. Build resilience.</h1>
        <hr className="my-4" />
        <h5>
          Pensive is the single destination for effective, evidence-based
          solutions for better mental health and wellbeing in the 21st century.
        </h5>
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
  );
}

export default Jumbotron;
