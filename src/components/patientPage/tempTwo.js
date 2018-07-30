import React, { Component } from "react";

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
        <div className="panel-heading flex-row align-items-center justify-content-between">
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
          <div className="panel-body">
            <div
              style={{
                minHeight: 250,
                background: "white",

                padding: "10px",
                marginBottom: 30
              }}
            >
              DataVisualizationContent
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}
