import React, { Component } from "react";
import DeleteU from '../Components/deleteU';
import "../App.css";
import "../Styles/Style.css";

class deleteUser extends Component {
  render() {
    return (
      <div>
        <h1 id="forgotTitle">Are you sure you want to unregister?</h1>
        <div>
            <DeleteU/>
        </div>
      </div>
    );
  }
}
export default deleteUser;
