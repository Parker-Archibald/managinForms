import React, { Component } from "react";
import "../Styles/Style.css";

class ForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }
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
        </span>
        </fieldset>
        <div id="btn">
          <button>Submit</button>
        </div>
      </body>
    );
  }
}
export default ForgotPass;
