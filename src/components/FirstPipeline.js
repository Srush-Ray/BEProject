import React, { Component } from "react";
import "./FirstPipeline.css";
import Dropzone from "react-dropzone";
import { MdFileUpload } from "react-icons/md";
import { sendVideo } from "../DataServices/FirstPipeline";
export default class FirstPipeline extends Component {
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
      <div className="FirstPipeline_MainDiv">
        <div className="row m-0 p-0">
          <div className="col-2"></div>
          <div className="col-4 mt-3">
            <form onSubmit={this.handleSubmit}>
              <Dropzone onDrop={this.handleDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input type="file" {...getInputProps()} />
                    <p>
                      <MdFileUpload size={40} />
                    </p>
                    <p className="Admin_text">
                      Drag 'n' drop files, or click to select files
                    </p>
                  </div>
                )}
              </Dropzone>
              <button type="submit">Check</button>
            </form>

            <p>{this.state.filename}</p>
          </div>
          <div className="col-5 mt-3">
            <h3>Converted text will be displayed here:</h3>
            <textarea
              rows="10"
              cols="50"
              disabled
              className="FirstPipeline_text"
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}
