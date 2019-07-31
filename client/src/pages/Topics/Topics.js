import React, { Component } from "react";
import InfiniteScroller from "../../components/InfiniteScroller/InfiniteScroller";
import "./style.css";

class Topics extends Component {
  state = {
    topic: ""
  };

  componentDidMount() {
    this.topicTitle();
  }

  topicTitle = () => {
    switch (this.props.match.params.topic) {
      case "sleep":
        this.setState({ topic: "Sleep" });
        break;
      case "stress-management":
        this.setState({ topic: "Stress Management" });
        break;
      case "self-concept":
        this.setState({ topic: "Self Concept" });
        break;
      case "emotional-intelligence":
        this.setState({ topic: "Emotional Intelligence" });
        break;
      case "habits":
        this.setState({ topic: "Habits" });
        break;
      case "diet":
        this.setState({ topic: "Diet" });
        break;
      default:
        this.setState({ topic: "Error" });
        break;
    }
  };

  render() {
    return (
      <div>
        <div className="jumbotron" id="jumbotron-topics">
          <h1 className="resources">{this.state.topic}</h1>
        </div>
        <div className="container mt-5">
          <InfiniteScroller link={this.props.match.params.topic} />
        </div>
      </div>
    );
  }
}

export default Topics;
