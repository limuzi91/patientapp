import React from "react";
import { Link } from "react-router-dom";

const ListItem = props => {
  const { profile } = props;

  const medicalHistoryValuesArray = Object.keys(profile.medicalHistory).map(
    item => {
      return profile.medicalHistory[item];
    }
  );
  const medicalHistory = medicalHistoryValuesArray
    .slice(0, 4)
    .map((item, index) => (
      <li key={index} className="list-group-item">
        {item}
      </li>
    ));

  return (
    <div
      className="panel panel-default border-shadow"
      style={{ padding: "0 15px" }}
    >
      <div className="panel-body">
        <div
          className="row flex-row align-items-center justify-content-center"
          style={{ minHeight: 200 }}
        >
          <div className="col-xs-5 col-md-3 col-lg-2 ">
            <img
              className=" img-responsive center-block"
              style={{ borderRadius: "50%" }}
              src={profile.image}
              alt=""
            />
          </div>
          <div className="col-xs-6 col-sm-4 ">
            <div className="">
              <div>
                <h3 style={{ whiteSpace: "nowrap", marginTop: 0 }}>
                  {profile.patientname}
                </h3>

                <p style={{ whiteSpace: "nowrap" }}>
                  <span>{profile.location}</span>
                </p>
                <Link
                  to={`/patients/${profile.patientname}`}
                  className="btn btn-success"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 visible-lg-inline-block  ">
            <div className="panel panel-default" style={{ marginBottom: 0 }}>
              <div className="panel-heading">
                <h4 style={{ margin: "0 20px" }}>Medical&nbsp;History</h4>
              </div>

              <ul className="list-group">{medicalHistory}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
