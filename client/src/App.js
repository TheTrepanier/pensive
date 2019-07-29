import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Callback from "./pages/Callback/Callback";
import Resources from "./pages/Resources/Resources";
import Topics from "./pages/Topics/Topics";
import UserProfile from "./pages/Users/UserProfile/UserProfile";
import SecuredRoute from "./SecuredRoute";
import UserPost from "./pages/Users/UserPost";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/callback" component={Callback} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/resources/:topic" component={Topics} />
            <SecuredRoute exact path="/profile" component={UserProfile} />
            <SecuredRoute path="/profile/posts" component={UserPost} />
          </Switch>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
