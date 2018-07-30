import React, { Component } from "react";

export default class ConversationContainer extends Component {
  render() {
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
        ConversationContainer
      </div>
    );
  }
}
