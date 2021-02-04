import React from "react";

const SentMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        style={{ float: "right", width: "200px", height: "200px" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#000000",
      }}
    >
      {message.text}
    </div>
  );
};

export default SentMessage;
