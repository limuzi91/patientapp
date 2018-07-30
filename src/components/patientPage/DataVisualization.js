import React, { Component } from "react";
import DataVisualizationContent from "./DataVisualizationContent";
import Collapse from "react-bootstrap/lib/Collapse";

export default class DataVisualization extends Component {
  state = {
    open: true
  };

  onToggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    return (
      <div className="panel panel-default">
        <div
          className="panel-heading flex-row align-items-center justify-content-between"
          style={{ borderBottom: 0 }}
        >
          <h3 className="panel-title " style={{ color: "white" }}>
            Patient's Data Visualization
          </h3>
          <button
            onClick={this.onToggle}
            style={{ width: 85 }}
            className="btn btn-primary btn-outline"
          >
            {this.state.open ? "Hide" : "Expand"}
          </button>
        </div>
        <Collapse in={this.state.open}>
          <div className="panel-body" style={{ padding: 0 }}>
            <DataVisualizationContent />
          </div>
        </Collapse>
      </div>
    );
  }
}
