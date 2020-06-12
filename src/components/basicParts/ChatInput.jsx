import React, { Component } from "react";
import "./../../App.css";

class ChatInput extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newMessage(this.state);
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <div className="ChatInput">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="symptom"
            id="inputChat"
            className="chat-input-area"
            placeholder="Enter Symptom..."
            onChange={this.handleChange}
            value={this.state.text}
          />
          {/* <input type="submit" value="x" className="submit-btn" /> */}

          <a href="#">
            <i class="fas fa-file-upload submit-btn"></i>
          </a>
          <a href="#" onClick={this.handleSubmit}>
            <i class="fas fa-paper-plane submit-btn"></i>
          </a>
        </form>
      </div>
    );
  }
}
export default ChatInput;
