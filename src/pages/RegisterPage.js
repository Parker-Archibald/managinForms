import React, { Component } from "react";
import Register from '../Components/Register'
import "../App.css";
import "../Styles/Style.css";

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Register addContact={this.props.addContact}/>
      </div>
    );
  }
}
export default RegisterPage;
