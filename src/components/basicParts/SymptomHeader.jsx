import React from "react";
import "./../../App.css";

function SymptomHeader() {
  return (
    <div className="symptom-header">
      <div className="user-profile">
        <div className="profile-img">
          <i class="fas fa-user user-icon"></i>
        </div>
        <div className="user-info">
          <p className="user-name">Hola kr. prasad</p>
          <p className="user-age">
            Male,<span> 22 years</span>
          </p>
        </div>
      </div>
      <div className="edit">
        <a href="#" className="edit-icon-link">
          <i class="fas fa-user-edit edit-icon"></i>
        </a>
      </div>
    </div>
  );
}
export default SymptomHeader;
