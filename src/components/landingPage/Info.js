import React, { Component } from "react";

import Dialog from "material-ui/Dialog";

class SocialHeader extends Component {
  state = {
    open: false
  };

  enlargeImg = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <button
        className="btn btn-success"
        style={{ marginRight: 20, marginBottom: 10 }}
        onClick={this.handleClose}
      >
        Close
      </button>
    ];
    return (
      <div
        id="info-page"
        className="landing__meetup social-page"
        style={{ position: "relative" }}
      >
        <section className="bg-colorful " style={{ minHeight: "30vh" }}>
          <div className="container" style={{ padding: "50px 20px 50px 20px" }}>
            <div className="row">
              <div className="col-12 text-center ">
                <h1>How to use this App ?</h1>
                <p style={{ fontSize: 17, margin: "20px auto" }}>
                  This is just a Front End mock up App for demo purpose. No
                  backend API is provided, you can not provide any data to
                  backend with this App
                </p>

                <a
                  className="btn btn-outline btn-inherit"
                  href="https://github.com/limuzi91/patientapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view source code
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className=" text-dark  flex-row align-items-center"
          style={{ minHeight: "70vh" }}
        >
          <div className="container " style={{ padding: "20px" }}>
            <div className="row ">
              <div className="col-md-6 " style={{ padding: "15px" }}>
                <div
                  onClick={this.enlargeImg}
                  style={{ position: "relative", maxWidth: "100%" }}
                >
                  <img
                    src="/assets/image/screenshot.jpg"
                    alt=""
                    className="img-responsive img-thumbnail  center-block pointer"
                  />
                  <i
                    style={{ position: "absolute", bottom: 20, right: 50 }}
                    className="fas fa-search-plus pointer text-muted fa-lg"
                  />
                </div>
              </div>
              <div className="col-md-6" style={{ padding: "15px" }}>
                <h3
                  style={{ marginTop: 10, marginBottom: 35, lineHeight: 1.6 }}
                >
                  Track Your Patients Medical History & Analyze Their Conditions
                </h3>

                <div className="media text-muted">
                  <div className="media-left" style={{ minWidth: 50 }}>
                    <i className="fas fa-users-cog fa-2x" />
                  </div>
                  <div className="media-body">
                    <p>Step 1: Lorem dolor sit amet adipisicing elit.</p>
                  </div>
                </div>

                <div className="media  text-muted">
                  <div className="media-left" style={{ minWidth: 50 }}>
                    <i className="fas fa-user-check fa-2x" />
                  </div>
                  <div className="media-body">
                    <p>
                      Step 2: Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.
                    </p>
                  </div>
                </div>

                <div className="media  text-muted">
                  <div className="media-left" style={{ minWidth: 50 }}>
                    <i className="fab fa-google fa-2x" />
                  </div>
                  <div className="media-body">
                    <p>
                      Step 3: Lorem ipsum dolor sit consectetur adipisicing
                      elit.
                    </p>
                  </div>
                </div>

                <div className="media text-muted">
                  <div className="media-left" style={{ minWidth: 50 }}>
                    <i className="fas fa-user-friends  fa-2x" />
                  </div>
                  <div className="media-body">
                    <p>Step 4: Lorem ipsum dolor sit amet adipisicing elit.</p>
                  </div>
                </div>

                <div className="media text-muted">
                  <div className="media-left" style={{ minWidth: 50 }}>
                    <i className="far fa-comments  fa-2x" />
                  </div>
                  <div className="media-body">
                    <p>
                      Step 5: Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          className="dialog-override"
          onRequestClose={this.handleClose}
          contentStyle={{
            width: "90%",
            maxWidth: "1000px",
            overflowX: "scroll"
          }}
        >
          <img
            src="/assets/image/screenshot.jpg"
            alt=""
            style={{ minWidth: 600 }}
            className="img-responsive center-block dialog-img"
          />
        </Dialog>
      </div>
    );
  }
}
export default SocialHeader;
