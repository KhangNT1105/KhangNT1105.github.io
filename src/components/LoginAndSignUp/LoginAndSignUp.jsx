import React, { Component } from "react";

export default class LoginAndSignUp extends Component {
  render() {
    return (
      <>
        <div className="login">
          <button
            type="button"
            className="btn btn-outline-light mr-3"
            data-toggle="modal"
            data-target="#modelId"
          >
            Login
          </button>
        </div>
        <div className="signup">
          <button
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId1"
          >
            Sign Up
          </button>
        </div>
      </>
    );
  }
}
