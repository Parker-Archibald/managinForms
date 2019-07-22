import React, { Component } from "react";
import Login from '../Components/Login'
import "../App.css";
import "../Styles/Style.css";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Login LoggedIn={this.props.LoggedIn}/>
      </div>
    );
  }
}
export default LoginPage;
