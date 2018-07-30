import React, { Component } from "react";
import Comment from "./Comment";

export default class ConversationContent extends Component {
  render() {
    const { userInfo } = this.props;
    const comments = [
      {
        image: userInfo.image,
        createAt: "Wed Jul 11 2018",
        author: userInfo.patientname,
        body: "Hi Doctor, I took the pills you gave me yesterday"
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_pMbdMXBQpEeS39X9qJ1NoCYjKlzKj9xawcVupLM32jv2fShxQ",
        createAt: "Wed Jul 11 2018",
        author: "testDoctor",
        body: "Hi there, how are you feeling now?"
      },
      {
        image: userInfo.image,
        createAt: "Thur Jul 12 2018",
        author: userInfo.patientname,
        body: "I feel great! :)"
      }
    ];
    return (
      <div
        style={{
          minHeight: 250,
          background: "white",

          padding: "10px",
          marginBottom: 30
        }}
      >
        {comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
      </div>
    );
  }
}
