import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import "../Styles/Style.css";
import Login from "./Login";
import LoginPage from "../pages/LoginPage";
import { addContact } from "../Config/Contacts";

class Register extends Component {
  constructor(props) {
    super(props);
    this.State = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirm: "",
      login: "",
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.state.login = "register";
    let contacts = [];
    const { confirm, login, ...contact } = this.state;
    if (!this.state.password) {
      alert("Please enter info in each field.");
    } else {
      if (this.state.password !== this.state.confirm) {
        alert("Your passwords do not match");
      } else {
        alert("Thanks for registering! ");
        this.setState({redirect: true});
        addContact(contact);
        fetch("http://localhost:3000/", {
          method: "Post",
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(this.state)
        })
      }
    }
  };

  render() {
    return (
      <body>
        <h1 id="regTitle">Register</h1>
        <form required>
        <fieldset>
            <div>
              {/* <span>First Name: </span> */}
              <input
                placeholder="First Name: "
                type="name"
                id="firstName"
                onChange={e => this.setState({ firstName: e.target.value })}
                required
              />
              {/* <span>Last Name: </span> */}
              <input
                placeholder="Last Name: "
                type="name"
                id="lastName"
                onChange={e => this.setState({ lastName: e.target.value })}
                required
              />
            </div>
            <div>
              {/* <span>Email: </span> */}
              <input
                placeholder="Email: "
                type="email"
                id="email"
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              {/* <span>Phone: </span> */}
              <input
                placeholder="Phone "
                id="phone"
                onChange={e => this.setState({ phone: e.target.value })}
                required
              />
            </div>
            <div>
              {/* <span>Password: </span> */}
              <input
                placeholder="Password"
                type="password"
                id="password"
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              {/* <span>Confirm Password: </span> */}
              <input
                placeholder="Confirm Password"
                type="password"
                id="confirm"
                onChange={e => this.setState({ confirm: e.target.value })}
                required
              />
            </div>
            </fieldset>
            <div id="btn">
          <button onClick={e => this.handleSubmit(e)}>Submit</button>
          </div>
          </form>
          <div id="btn">
          <Link to="/auth">
            <button>Login</button>
          </Link>
        </div>
        <Login />
      </body>
    );
  }
}

export default Register;
