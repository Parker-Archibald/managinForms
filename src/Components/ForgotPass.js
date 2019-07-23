import React, { Component } from "react";
import "../Styles/Style.css";
import { changePass } from "../Config/Contacts";

class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    const {...rest} = this.state;
    fetch("http://localhost:3000/", {
      method: "Put",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
    changePass(this.state);
    alert("Password Changed. ");
  }
  
  render() {
    return (
      <body>
        <fieldset>
        <span>
            Email:
            <input
              id="firstName"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
            <input 
            id='firstName'
            placeholder='Password you would like to change to'
            onChange={e => this.setState({password : e.target.value})}
            required
            />
        </span>
        </fieldset>
        <div id="btn">
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </body>
    );
  }
}
export default ForgotPass;
