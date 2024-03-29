import React, { Component } from "react";
import { FaCertificate, FaRegEnvelope, FaBuffer } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./UserSidebar.scss";
import avt from "../../../assets/img/avt.png";
export default class UserSidebar extends Component {
  render() {
    return (
      <div className="userSidebar">
        <div className="userSidebar__img">
          <img src={avt} alt="" />
        </div>
        <div className="userSidebar__name">
          <h4>Khang</h4>
        </div>
        <div className="userSidebar__editProfile">
          <button>Edit Profile</button>
        </div>
        <div className="userSidebar__someFunction">
          <ul>
            <li>
              <NavLink to="">
                <FaCertificate className="mr-2" />
                My certificates
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <FaRegEnvelope className="mr-2" />
                My messages
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <FaBuffer className="mr-2" />
                Assigments
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
