import React, { Component } from "react";
import "./Homepage.css";
import logo from "../Images/logo.png";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              className="Homepage_logo"
              // class="d-inline-block align-top"
              alt=""
            />
            <span className="Homepage_title">
              INDIAN SIGN LANGUAGE INTERPRETER
            </span>
          </a>
        </nav>
      </div>
    );
  }
}
