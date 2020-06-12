import React from "react";
import "./../../App.css";
import logo from "../logo192.png";

function ChatHeader() {
  return (
    <div className="ChatHeader">
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav-box">
        <a href="#" className="refresh-link">
          <i class="fas fa-redo-alt"></i>
        </a>
        <a href="#" className="nav-bar">
          <i class="fas fa-bars"></i>
        </a>
      </div>
    </div>
  );
}
export default ChatHeader;
