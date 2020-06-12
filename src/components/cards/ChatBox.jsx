import React, { Component } from "react";
import "./../../App.css";
import ChatHeader from "../basicParts/ChatHeader";
import ChatInput from "../basicParts/ChatInput";
import UserMessages from "./../basicParts/UserMessages";
import DoctorMessages from "./../basicParts/DoctorMessage";

class ChatBox extends Component {
  state = {
    userMessage: [
      // { id: 1, text: "hello" },
      // { id: 4, text: "allo" },
    ],
    doctorMessage: [
      { id: 2, text: "Hi, I am a Doctor" },
      { id: 3, text: "Send your symptoms" },
    ],
  };
  deleteMessage = (id) => {
    const userMessage = this.state.userMessage.filter((text) => {
      return text.id !== id;
    });
    this.setState({
      userMessage: userMessage,
    });
  };
  newMessage = (text) => {
    text.id = Date.now();
    let texts = [...this.state.userMessage, text];
    this.setState({
      userMessage: texts,
    });
  };
  render() {
    return (
      <div className="Chatbox">
        <ChatHeader />
        <div className="message-container">
          <DoctorMessages
            DoctorMessage={this.state.doctorMessage}
            className="doctor-message message-text"
          />
          <UserMessages
            UserMessage={this.state.userMessage}
            DeleteMessage={this.deleteMessage}
            className="user-message message-text"
          />
        </div>
        <ChatInput newMessage={this.newMessage} />
      </div>
    );
  }
}
export default ChatBox;
