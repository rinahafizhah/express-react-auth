import React, { Component } from "react";

class SignUp extends Component {
  state = {
    name: "",
    age: 0,
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={this.handleChange}
          value={this.state.age}
        />
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

export default SignUp;
