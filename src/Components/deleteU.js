import React, {Component} from "react";
import {dlcont} from '../Config/Contacts'

class DeleteU extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
      fetch("http://localhost:3000/", {
        method: "Delete",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(this.state)
      })
      dlcont(this.state);
      alert("User Deleted");
  };

  render() {
    return (
      <div>
        <fieldset>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Email "
              type="email"
              id="firstName"
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
            <input
              placeholder="Password "
              type="Password"
              id="firstName"
              onChange={e => this.setState({ password: e.target.value })}
              required
            />
            <button>Delete</button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default DeleteU;
