import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chatbox from "./components/cards/ChatBox";
import SymptomBox from "./components/cards/SymptomBox";
import OutcomeBox from "./components/cards/OutcomeBox";

function App() {
  return (
    <div className="App">
      <Chatbox />
      <SymptomBox />
      <OutcomeBox />
    </div>
  );
}

export default App;
