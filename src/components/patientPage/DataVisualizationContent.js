import React, { Component } from "react";
import { Menu } from "antd";
//import Menu from "antd/lib/menu";

import PieChart from "./DataVisualizationDetails/PieChart";
import LineGraph from "./DataVisualizationDetails/LineGraph";
import BarChart from "./DataVisualizationDetails/BarChart";

export default class DataVisualizationContent extends Component {
  state = {
    current: "bar"
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div style={{ padding: "5px 20px 20px 20px" }}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          //   style={{ width: "100%" }}
        >
          <Menu.Item key="bar">
            <i className="fas fa-chart-bar" />&nbsp;Bar&nbsp;Chart
          </Menu.Item>
          <Menu.Item key="pie">
            <i className="fas fa-chart-pie" />&nbsp;Pie&nbsp;Chart
          </Menu.Item>
          <Menu.Item key="line">
            <i className="fas fa-chart-line" />&nbsp;Line&nbsp;Graph
          </Menu.Item>
        </Menu>
        <div style={{ height: 600, overflowY: "scroll" }}>
          {this.state.current === "pie" ? <PieChart /> : null}
          {this.state.current === "line" ? <LineGraph /> : null}
          {this.state.current === "bar" ? <BarChart /> : null}
        </div>
      </div>
    );
  }
}
