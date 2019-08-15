import React, { Component } from "react";

let id = 0;

class ShowList extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  componentDidMount() {
    fetch("http://localhost:3000/")
      .then(results => {
        return results.json();
      })
      console.log()
  }
  render() {
    return (
      <div>
        {this.state.firstName} {this.state.lastName}
      </div>
    );
  }
}
export default ShowList;
