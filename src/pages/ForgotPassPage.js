import React, { Component } from "react";
import ForgotPass from "../Components/ForgotPass"
import "../App.css";
import "../Styles/Style.css";

class ForgotPassPage extends Component {
  render() {
    return (
      <div>
        <h1 id="forgotTitle">Forgot Your Password?</h1>
        <p id="enterEmail">
          Please enter your email and we will send you a link to reset your password!
        </p>
        <ForgotPass />
      </div>
    );
  }
}
export default ForgotPassPage;
