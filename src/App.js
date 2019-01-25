import React, { Component, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserList from "./pages/UserList";

class App extends Component {
  state = {
    isAuthenticated: false
  };

  async componentDidMount() {
    const token = Cookies.get("token");

    if (token) {
      const response = await Axios.get(
        "http://localhost:8000/api/auth/verify",
        { headers: { Authorization: `bearer ${token}` } }
      );
      if(response.status === 200){
        this.setState({ isAuthenticated: true });
      }
    }
  }

  updateAuthStatus = value => {
    this.setState({ isAuthenticated: value });
  };
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={Home} />
        <Route
          path="/signup"
          render={props => {
            if (!this.state.isAuthenticated) {
              return <SignUp {...props} />;
            } else {
              return <Redirect to="/users" />;
            }
          }}
        />
        <Route
          path="/signin"
          render={props => {
            if (!this.state.isAuthenticated) {
              return <SignIn {...props} login={this.updateAuthStatus} />;
            } else {
              return <Redirect to="/users" />;
            }
          }}
        />
        <Route
          path="/users"
          render={props => {
            if (this.state.isAuthenticated) {
              return (
                <UserList
                  {...props}
                  logout={() => this.updateAuthStatus(false)}
                />
              );
            } else {
              return <Redirect to="/signin" />;
            }
          }}
        />
      </Fragment>
    );
  }
}

export default App;
