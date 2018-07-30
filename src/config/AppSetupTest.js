import React, { Component } from "react";
// import { Button } from "antd";
import Button from "antd/lib/button";
//import Button from "antd/lib/button";
//import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className=" less-test">less test</h1>
        <h1 className=" sass-test">sass test</h1>
        <Button>click</Button>
        <h1>
          <i className="fas fa-database " />Icon test{" "}
          <i className="fa fa-spinner fa-spin" />
        </h1>
      </div>
    );
  }
}

export default App;
