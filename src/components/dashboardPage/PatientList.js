import React, { Component } from "react";

import GoBack from "../common/GoBack";
import List from "./List";

class Settings extends Component {
  render() {
    return (
      <div style={{ width: "90%" }} className="center-block">
        <div style={{ margin: 0, padding: 0, display: "inline-block" }}>
          <GoBack />
        </div>

        <List />
      </div>
    );
  }
}

export default Settings;
