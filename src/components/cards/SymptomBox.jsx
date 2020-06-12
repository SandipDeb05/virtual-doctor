import React from "react";
import "./../../App.css";
import SymptomHeader from "../basicParts/SymptomHeader";
import SymptomNav from "../basicParts/SymptomNav";
import SymptomList from "../symptomComponents/SymptomList";

function SymptomBox(props) {
  return (
    <div className="SymptomHeader">
      <SymptomHeader />
      <SymptomNav />
      {/* <SymptomList UserMessage={} /> */}
    </div>
  );
}
export default SymptomBox;
