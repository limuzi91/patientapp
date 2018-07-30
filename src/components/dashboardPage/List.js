import React, { Component } from "react";
import ListItem from "./ListItem";
import mockData from "../../mockData";

class ProfileList extends Component {
  render() {
    const profiles = [...mockData];
    const profileItems = profiles.map(item => (
      <ListItem profile={item} key={item.id} />
    ));

    return <div>{profileItems}</div>;
  }
}

export default ProfileList;
