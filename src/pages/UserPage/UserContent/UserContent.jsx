import React, { Component } from "react";
import "./UserContent.scss";
export default class UserContent extends Component {
  renderFullName = () => {
    let fullname = "";
    if (localStorage.getItem("userLogin")) {
      fullname = JSON.parse(localStorage.getItem("userLogin")).hoTen;
    }
    return fullname;
  };
  render() {
    return (
      <div className="userContent">
        <div className="userContent__name">
          <h1> {this.renderFullName}</h1>
          <hr />
        </div>
      </div>
    );
  }
}
