import React from "react";
import "./../../App.css";

function OutcomeHeader() {
  return (
    <div className="OutcomeHeader">
      <div className="outcome-img">
        <i class="fas fa-notes-medical outcome-icon"></i>
      </div>
      <div className="outcome-content">
        <p className="outcome-heading">Possible Causes</p>
        <p>
          <span>52%</span> Confidence
        </p>
      </div>
    </div>
  );
}
export default OutcomeHeader;
