import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Callback from "./pages/Callback/Callback";
import Resources from "./pages/Resources/Resources";
import Topics from "./pages/Topics/Topics";
import UserProfile from "./pages/Users/UserProfile/UserProfile";
import SecuredRoute from "./SecuredRoute";
import UserPost from "./pages/Users/UserPost";
import auth0Client from "./Auth/Auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true
    };
  }
  async componentDidMount() {
    if (this.props.location.pathname === "/callback") {
      this.setState({ checkingSession: false });
      return;
    }
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== "login_required") console.log(err.error);
    }
    this.setState({ checkingSession: false });
  }
  render() {
    return (
      <>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/callback" component={Callback} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/resources/:topic" component={Topics} />
            <SecuredRoute
              exact
              path="/profile"
              component={UserProfile}
              checkingSession={this.state.checkingSession}
            />
            <SecuredRoute
              path="/profile/posts"
              component={UserPost}
              checkingSession={this.state.checkingSession}
            />
          </Switch>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(App);
