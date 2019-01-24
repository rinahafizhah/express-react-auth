import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    success: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { success, ...rest } = this.state;
    const response = await Axios.post("http://localhost:8000/api/auth/signin", {
      ...rest
    });
    if (response.data.token) {
      this.setState({ success: true });
      Cookies.set("token", response.data.token, { expires: 7 });
      this.props.login(true);
    } else {
      alert("Fail");
    }
  };
  render() {
    if (this.state.success) {
      return <Redirect to="/users" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignIn;
