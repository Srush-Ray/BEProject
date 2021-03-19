import React, { Component } from "react";
import "./SecondPipeline.css";
import Dropzone from "react-dropzone";
import { MdFileUpload } from "react-icons/md";
import { sendVideo } from "../DataServices/FirstPipeline";
export default class SecondPipeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      filename: "",
      video: null,
    };
  }
  handleDrop = (incoming) => {
    console.log(incoming);
    // let tempFiles = this.state.files;
    // tempFiles.push(...incoming);
    // let names;
    // tempFiles.map((file, index) => {
    //   names = names + file.name;
    // });
    this.setState({
      filename: incoming[0].name,
    });
    this.setState({
      video: incoming[0],
    });

    // let data = new FormData();
    // data["video"] = incoming[0];
    // data["name"] = incoming[0].name;
    // console.log(data);
    // sendVideo(data)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    // data["video"] = this.state.video;
    // data["name"] = this.state.filename;
    if (this.state.video === null) {
      alert("Select video to translate");
    } else {
      data.append("video", this.state.video);
      console.log(data);
      sendVideo(data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  handleChange = (event) => {
    this.setState({
      filename: event.target.files[0].name,
    });
    this.setState({
      video: event.target.files[0],
    });
  };
  render() {
    return (
      <div className="SecondPipeline_MainDiv">
        <div className="row m-0 p-0">
          <div className="col-md-2"></div>
          <div className="col-md-4 mt-3">
            <h3 className="SecondPipeline_text1">Enter text here:</h3>
            <form onSubmit={this.handleSubmit}>
              <textarea
                name="inputText"
                className="SecondPipeline_inputText"
              ></textarea>
              <button type="submit" className="btn btn-dark mt-3">
                Convert
              </button>
            </form>

            <p>{this.state.filename}</p>
          </div>
          <div className="col-md-5 mt-3">
            <h3 className="SecondPipeline_text2">Interpreted Video:</h3>
          </div>
        </div>
      </div>
    );
  }
}
