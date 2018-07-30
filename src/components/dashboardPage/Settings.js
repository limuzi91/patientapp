import React, { Component } from "react";

import classnames from "classnames";

import GoBack from "../common/GoBack";

import Script from "react-load-script";
import Popover from "react-bootstrap/lib/Popover";

import OverlayTrigger from "react-bootstrap/lib/OverlayTrigger";

class Settings extends Component {
  state = {
    errors: {},
    scriptLoaded: false,
    hint: false,
    display: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_pMbdMXBQpEeS39X9qJ1NoCYjKlzKj9xawcVupLM32jv2fShxQ",
    password: "",
    password2: ""
  };

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // IMPORTANT!!!! NEVER setState inside componentDidUpdate !!!!
  // Do not do this!

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     typeof this.props.errors === "object" &&
  //     Object.keys(this.props.errors).length > 0
  //   ) {
  //     this.setState({ display: true, errors: this.props.errors });
  //     console.log("errors", this.props.errors);
  //     this.createNotification("warning")();
  //   }
  //   if (!isEqual(this.props.currentUser, prevProps.currentUser)) {
  //     this.createNotification("success")();
  //   }
  // }

  render() {
    const { errors } = this.state;

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        <img
          src={this.state.image}
          alt=""
          style={{ width: 200, height: 200 }}
        />
      </Popover>
    );
    const changePassword = (
      <div>
        <div className="form-group">
          <input
            type="password"
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.password
            })}
            placeholder="New Password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          {errors.password && (
            <p>
              <small style={{ color: "red", marginTop: 0 }}>
                {errors.password}
              </small>
            </p>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            className={classnames("form-control form-control-lg", {
              "is-invalid": errors.password2
            })}
            placeholder="Confirm New Password"
            name="password2"
            value={this.state.password2}
            onChange={this.onChange}
          />

          {errors.password2 && (
            <p>
              <small style={{ color: "red", marginTop: 0 }}>
                {errors.password2}
              </small>
            </p>
          )}
        </div>
      </div>
    );
    return (
      <div style={{ width: "90%" }} className="center-block">
        <div style={{ margin: 0, padding: 0, display: "inline-block" }}>
          <GoBack />
        </div>
        <div
          className="border-shadow border-radius"
          style={{
            padding: 20,
            background: "white",
            border: "1px solid #ddd"
          }}
        >
          <h1 className=" text-center">Account Settings</h1>
          <p className="lead text-center">
            Edit all your account settings here
          </p>

          <form className="form-horizontal">
            <h3
              style={{
                borderBottom: "1px solid #ddd",
                paddingBottom: 10,
                marginLeft: 20
              }}
            >
              Basics
            </h3>
            <div className="form-group">
              <label className="control-label col-sm-3">Username:</label>
              <div className="col-sm-9">
                <p className="form-control-static">{"testDoctor"}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3">Password:</label>
              <div className="col-sm-8">
                <div
                  className="flex-row justify-content-between"
                  style={{ marginBottom: 10 }}
                >
                  <p
                    style={{ lineHeight: "20px" }}
                    className="form-control-static"
                  >
                    <span>********</span>
                  </p>
                  <button
                    onClick={() => {
                      this.setState(prevState => ({
                        display: !prevState.display
                      }));
                    }}
                    type="button"
                    className="btn btn-primary"
                    style={{ width: 160 }}
                  >
                    {!this.state.display ? "Change Password" : "Cancel"}
                  </button>
                </div>
                {this.state.display ? changePassword : null}
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3">Profile:</label>
              <div className="col-sm-8">
                <div
                  className="flex-row justify-content-between"
                  style={{ marginBottom: 10 }}
                >
                  <div>
                    <OverlayTrigger
                      trigger={["hover", "focus"]}
                      rootClose
                      placement="top"
                      overlay={popoverHoverFocus}
                    >
                      <img
                        src={this.state.image}
                        alt=""
                        className="avatar"
                        style={{ cursor: "pointer", width: 50, height: 50 }}
                      />
                    </OverlayTrigger>
                  </div>
                  <div className="flex-row align-items-center">
                    <Script
                      url={`https://widget.cloudinary.com/global/all.js`}
                      onLoad={this.handleScriptLoad}
                    />

                    {this.state.scriptLoaded && (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          window.cloudinary.openUploadWidget(
                            {
                              cloud_name: "dbceyrev6",
                              upload_preset: "d0xfvpgr",
                              theme: "white",
                              multiple: false,
                              max_image_width: 300,
                              max_image_height: 300,
                              cropping_show_back_button: true,
                              cropping_aspect_ratio: 1,
                              cropping: "server",
                              gravity: "custom"
                            },
                            (error, result) => {
                              try {
                                this.setState({
                                  image: result[0].secure_url,
                                  hint: true
                                });
                              } catch (err) {
                                console.log("do nothing");
                              }
                            }
                          );
                        }}
                      >
                        Change Profile Image
                      </button>
                    )}
                  </div>
                </div>
                {this.state.hint ? (
                  <p>
                    Press the "Updating Settings" button below to upload your
                    image
                  </p>
                ) : null}
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3 " htmlFor="gender">
                Gender:
              </label>
              <div className="col-sm-9">
                <label className="radio-inline">
                  <input type="radio" name="optradio" />Male
                </label>
                <label className="radio-inline">
                  <input type="radio" name="optradio" />Female
                </label>
                <label className="radio-inline">
                  <input type="radio" name="optradio" />N/A
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3">Birth&nbsp;Date:</label>
              <div className="col-sm-8">
                <div className="form-group ">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": false
                    })}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3 ">Hometown:</label>
              <div className="col-sm-8">
                <div className="form-group ">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": false
                    })}
                  />
                </div>
              </div>
            </div>

            <button
              style={{ marginBottom: 30, width: "50%", marginTop: 30 }}
              type="button"
              className="btn btn-success btn-lg btn-block center-block"
            >
              Update Settings
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
