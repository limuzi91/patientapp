import React, { Component } from "react";

export default class BasicInfo extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div
        className="border-shadow"
        style={{
          minHeight: 250,
          background: "white",
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: 30
        }}
      >
        <div className="row">
          <div className="col-sm-6">
            <h3
              className="bg-primary border-radius"
              style={{
                margin: " 10px auto",
                padding: "8px 15px",
                fontSize: 20
              }}
            >
              Basic Info
            </h3>
            <form className="form-horizontal userInfo-form">
              <div className="form-group">
                <label className="control-label col-sm-3 ">Gender:</label>
                <div className="col-sm-8 pull-right">
                  <p className="form-control-static">{userInfo.gender}</p>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3 ">Age:</label>
                <div className="col-sm-8 pull-right">
                  <p className="form-control-static">{userInfo.age}</p>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3 ">Occupation:</label>
                <div className="col-sm-8 pull-right">
                  <p className="form-control-static">{userInfo.occupation}</p>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3 ">City:</label>
                <div className="col-sm-8 pull-right">
                  <p className="form-control-static">{userInfo.location}</p>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-6">
            <h3
              className="bg-primary border-radius"
              style={{
                margin: " 10px auto",
                padding: "8px 15px",
                fontSize: 20
              }}
            >
              Medical History
            </h3>
            <form className="form-horizontal userInfo-form">
              <div className="form-group">
                <label className="control-label col-sm-3 ">Respiratory:</label>
                <div className="col-sm-8 pull-right">
                  <p className="form-control-static">
                    {userInfo.medicalHistory.Respiratory}
                  </p>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-3 ">Cardiology:</label>
                <div className="col-sm-8 pull-right">
                  <p className="form-control-static">
                    {userInfo.medicalHistory.Cardiology}
                  </p>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-3 ">Oncology:</label>
                <div className="col-sm-8 pull-right">
                  <p className="form-control-static">
                    {userInfo.medicalHistory.Oncology}
                  </p>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-sm-3 ">Orthopedics:</label>
                <div className="col-sm-8 pull-right">
                  <p className="form-control-static">
                    {userInfo.medicalHistory.orthopedics}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
