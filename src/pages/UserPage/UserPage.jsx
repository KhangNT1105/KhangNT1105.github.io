import React, { Component } from "react";
import UserSidebar from "./UserSidebar/UserSidebar";
import OverlayHeader from "../../components/HOC/OverlayHeader/OverlayHeader";
import OverlayUser from "../../components/HOC/UserOverlay/UserOverlay";
import UserContent from "./UserContent/UserContent";
const UserOverlay = OverlayHeader(OverlayUser);
export default class UserPage extends Component {
  render() {
    return (
      <div className="userPage">
        <UserOverlay />
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <UserSidebar />
            </div>
            <div className="col-md-8">
              <UserContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
