import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Styles/Style.css";
import ForgotPass from "../Components/ForgotPass";
import { LoginNow, LoggedIn } from "../Config/Contacts";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    const { ...info } = this.state;
    if (!LoginNow(info)) {
      alert("Invalid User, Try Again");
    } else {
      alert("Successfully Logged In");
    }
  };

  render() {
    return (
      <body>
        <p id="logTitle">Login</p>
        <fieldset>
          <span>
            Email:
            <input
              id="firstName"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
            Password:
            <input
              placeholder="Password"
              type="password"
              id="firstName"
              onChange={e => this.setState({ password: e.target.value })}
              required
            />
          </span>
        </fieldset>
        <div id="btn">
          <button onClick={this.handleSubmit}>Login</button>
          <Link to="/forgotPass">
            <button>Forgot Password</button>
          </Link>
          <button>Register</button>
        </div>
      </body>
    );
  }
}
export default Login;
