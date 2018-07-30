import React, { Component } from "react";
import ConversationContent from "./ConversationContent";
import Collapse from "react-bootstrap/lib/Collapse";

export default class ConversationContainer extends Component {
  state = {
    open: true
  };

  onToggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const { userInfo } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading flex-row align-items-center justify-content-between">
          <h3 className="panel-title " style={{ color: "white" }}>
            Patient & Doctor Conversation
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
          <div className="panel-body" style={{ paddingTop: 30 }}>
            <ConversationContent userInfo={userInfo} />
          </div>
        </Collapse>
      </div>
    );
  }
}
