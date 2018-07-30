import React, { Component } from "react";
import { Link } from "react-router-dom";

import Info from "./Info";

import ScrollToNext from "../layout/ScrollToNext";

class Landing extends Component {
  render() {
    const guestLink = (
      <div className="col-sm-4">
        <form
          className="well  bg-danger center-block"
          style={{ maxWidth: 330 }}
        >
          <div className="form-group">
            <label className="text-left">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group" style={{ marginBottom: 20 }}>
            <label className="text-left">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pwd"
            />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-success btn-block ">
              Submit
            </button>
          </div>
          <label
            style={{ marginBottom: 14 }}
            className="text-center center-block"
          >
            Don't have an account ?
          </label>

          <Link to="/register" className="btn btn-success btn-block ">
            Sign Up
          </Link>
        </form>
      </div>
    );

    return (
      <div>
        <header className="landing__header">
          <div className="landing__dark-overlay">
            <div className="landing__dark-overlay__inner">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 ">
                    <h1
                      style={{ marginTop: 0, marginBottom: 40 }}
                      className="font-slim "
                    >
                      <span className="font-normal " style={{ fontSize: 60 }}>
                        <i className="fab fa-app-store-ios" />&nbsp;Patient App
                      </span>
                    </h1>
                    <h1 className="other-font">
                      Track Your Patients Medical History And Analyze Their
                      Conditions Anywhere & Anytime
                    </h1>
                    <div
                      className="visible-lg-block visible-md-block visible-sm-block text-light"
                      style={{ fontSize: 25, marginTop: 30 }}
                    >
                      <div className="media">
                        <div className="media-left media-top">
                          <i className="fas fa-hands-helping" />
                        </div>
                        <div className="media-body">
                          <p style={{ fontWeight: 300 }}>
                            Bridging the gaps between Doctor & Patients
                            communication
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {guestLink}
                </div>
              </div>
            </div>
            <ScrollToNext pageSelector="#info-page" fontColor={"#e6e6e6"} />
          </div>
        </header>
        <Info />
      </div>
    );
  }
}
export default Landing;
