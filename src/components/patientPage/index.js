import React, { Component } from "react";
import ComplexBanner from "../common/ComplexBanner";
import BasicInfo from "./BasicInfo";
import ImageList from "./ImageList";
import DataVisualization from "./DataVisualization";
import ConversationContainer from "./ConversationContainer";
import GoBack from "../common/GoBack";
import mockData from "../../mockData";

class UserCenter extends Component {
  render() {
    const userInfo = mockData.filter(item => {
      return item.patientname === this.props.match.params.patientname;
    })[0];

    return (
      <div>
        <ComplexBanner userInfo={userInfo} />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <GoBack />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4  col-md-push-8  ">
              <ImageList userInfo={userInfo} />
            </div>
            <div className="col-md-8  col-md-pull-4 ">
              <BasicInfo userInfo={userInfo} />
              <DataVisualization userInfo={userInfo} />
              <ConversationContainer userInfo={userInfo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserCenter;
