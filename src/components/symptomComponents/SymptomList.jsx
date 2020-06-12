import React from "react";

const SymptomList = ({ UserMessage, DeleteMessage }) => {
  const messageList = UserMessage.length
    ? UserMessage.map((texts) => {
        return (
          <div className="Symptom-Container">
            <div key={texts.id} className="Symptom-list">
              <span
                onClick={() => {
                  DeleteMessage(texts.id);
                }}
              >
                {texts.text}
              </span>
            </div>
          </div>
        );
      })
    : null;
  return <div>{messageList}</div>;
};
export default SymptomList;
