import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserList from "./pages/UserList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="signup" component={SignUp} />
        <Route path="signin" component={SignIn} />
        <Route path="users" component={UserList} />
      </Fragment>
    );
  }
}

export default App;
