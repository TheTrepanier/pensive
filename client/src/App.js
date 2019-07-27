import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Resources from "./pages/Resources/Resources";
import Topics from "./pages/Topics/Topics";
import UserProfile from "./pages/Users/UserProfile/UserProfile";
import PrivateRoute from "./components/Auth/PrivateRoute";
import UserPost from "./pages/Users/UserPost";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/topics" component={Topics} />
            <Route exact path="/profile" component={UserProfile} />
            <Route path="/profile/posts" component={UserPost} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
