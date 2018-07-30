import React, { Component } from "react";

class ComplexBanner extends Component {
  render() {
    const { userInfo, mBottom } = this.props;

    return (
      <div
        className="flex-row align-items-center  banner "
        style={{ marginBottom: mBottom }}
      >
        <div className="container text-center">
          <img
            src={userInfo.image}
            className="avatar"
            alt="alt"
            style={{ width: 70, height: 70, marginTop: 20 }}
          />

          <h4>
            <span>{userInfo.patientname}</span>
          </h4>

          <div style={{ marginBottom: 20 }}>
            <button className="btn btn-sm  btn-success" style={{ width: 140 }}>
              Live chat with patient
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ComplexBanner.defaultProps = {
  mBottom: 30
};
export default ComplexBanner;
