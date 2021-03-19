import React, { Component } from "react";
import "./Homepage.css";
import logo from "../Images/logo.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FirstPipeline from "./FirstPipeline";
import SecondPipeline from "./SecondPipeline";
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
        <div className="row m-0 p-0 d-flex justify-content-center mt-5">
          <div className="col-md-10 col-12">
            <Tabs>
              <TabList>
                <Tab>Video to Text</Tab>
                <Tab>Text to Video</Tab>
              </TabList>

              <TabPanel>
                <FirstPipeline />
              </TabPanel>
              <TabPanel>
                <SecondPipeline />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
