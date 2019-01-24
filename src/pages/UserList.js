import React, { Component, Fragment } from "react";
import Axios from "axios";
import Cookies from "js-cookie";

class UserList extends Component {
  state = { users: [] };

  async componentDidMount() {
    const token = Cookies.get("token");
    const response = await Axios.get("http://localhost:8000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    this.setState({ users: response.data.users });
  }

  signOut = e => {
    console.log("sign out");
  };
  render() {
    return (
      <Fragment>
        <ul>
          {this.state.users.map((user, i) => (
            <li key={i}>
              {user.name} {user.email}
            </li>
          ))}
        </ul>
        <button onClick={this.signOut}>Sign Out</button>
      </Fragment>
    );
  }
}

export default UserList;
