import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import User from "./pages/Users/Users";
import Callback from "./pages/Callback/Callback";
import Resources from "./pages/Resources/Resources";
import Topics from "./pages/Topics/Topics";
import UserProfile from "./pages/Users/UserProfile/UserProfile";
import PrivateRoute from "./components/Auth/PrivateRoute";
import UserPost from "./pages/Users/UserPost";
import Auth from "./Auth/Auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <div className="App">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home auth={this.auth} {...props} />}
            />
            <Route
              path="/callback"
              render={props => <Callback auth={this.auth} {...props} />}
            />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/resources/:topic" component={Topics} />
            <PrivateRoute exact path="/profile" component={User} />
            <Route path="/profile/posts" component={UserPost} />
          </Switch>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
