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
          <div className="col-md-1 col-lg-2"></div>
          <div className="col-md-5 col-lg-4 mt-3">
            <form onSubmit={this.handleSubmit}>
              <Dropzone onDrop={this.handleDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input type="file" {...getInputProps()} />
                    <p>
                      <MdFileUpload size={40} />
                    </p>
                    <p className="Dropzone_text ml-md-1 ml-lg-3 ml-1">
                      Drag 'n' drop files, or click to select files
                    </p>
                  </div>
                )}
              </Dropzone>
              <button type="submit" className="btn btn-dark mt-3">
                Check
              </button>
            </form>

            <p>{this.state.filename}</p>
          </div>
          <div className="col-md-5 mt-3">
            <h3 className="FirstPipeline_text2">
              Converted text will be displayed here:
            </h3>
            <textarea disabled className="FirstPipeline_text"></textarea>
          </div>
        </div>
      </div>
    );
  }
}
