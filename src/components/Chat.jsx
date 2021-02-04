import React from "react";

import MessageForm from "./MessageForm";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

const Chat = ({ chats, activeChat, userName, messages, ...props }) => {
  console.log(messages);

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );
  };

  const renderMessages = () => {
    return Object.keys(messages).map((key, index) => {
      const message = messages[key];
      const lastMessageKey =
        index === 0 ? null : Object.keys(messages)[index - 1];
      const isMyMessage = userName === message.sender.username;
      return (
        <div key={`msg_${key}`} style={{ padding: "0 12px" }}>
          <div style={{ width: "100%" }}>
            <div className="message-block">
              {isMyMessage ? (
                <SentMessage message={message} />
              ) : (
                <ReceivedMessage
                  message={message}
                  lastMessage={messages[lastMessageKey]}
                />
              )}
            </div>
            <div
              className="read-receipts"
              style={{
                marginRight: isMyMessage ? "18px" : "0px",
                marginLeft: isMyMessage ? "0px" : "68px",
              }}
            >
              {renderReadReceipts(message, isMyMessage)}
            </div>
          </div>
        </div>
      );
    });
  };

  return !chat ? (
    <p>Loading...</p>
  ) : (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {`(
            ${chat?.people?.map((person) => `${person.person.username} `)}
            )`}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default Chat;
