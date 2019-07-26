import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import User from "./pages/Users/Users";
import Resources from "./pages/Resources/Resources";
import Topics from "./pages/Topics/Topics";
import PrivateRoute from "./components/Auth/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/resources/:topic" component={Topics}/>
            {/* <Route exact path="/topics" component={Topics} /> */}
            <PrivateRoute exact path="/profile" component={User} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
