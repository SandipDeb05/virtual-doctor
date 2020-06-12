import React from "react";

const DoctorMessage = ({ DoctorMessage }) => {
  const messageList = DoctorMessage.length ? (
    DoctorMessage.map((texts) => {
      return (
        <div className="doctorMessage-container">
          <div key={texts.id} className="message-box doctor-message">
            <span>{texts.text}</span>
          </div>
        </div>
      );
    })
  ) : (
    <p>nothing</p>
  );
  return <div>{messageList}</div>;
};
export default DoctorMessage;
