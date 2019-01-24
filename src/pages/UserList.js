import React, { Component, Fragment } from "react";

class UserList extends Component {
  state = { users: [] };

  signOut = e => {
    console.log("sign out");
  };
  render() {
    return (
      <Fragment>
        <ul>
          {this.state.users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
        <button onClick={this.signOut}>Sign Out</button>
      </Fragment>
    );
  }
}

export default UserList;
