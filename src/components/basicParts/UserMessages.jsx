import React from "react";

const UserMessage = ({ UserMessage, DeleteMessage }) => {
  const messageList = UserMessage.length
    ? UserMessage.map((texts) => {
        return (
          <div className="userMessage-container">
            <div key={texts.id} className="message-box user-message">
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
export default UserMessage;
