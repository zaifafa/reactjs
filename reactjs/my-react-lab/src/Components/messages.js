import React from 'react';
import "../styles/messages.css";

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      <h3>Messages</h3>
      {messages.map((message) => (
        <div key={message.id} className="message-item">
          <p>{message.content}</p>
          <small>{message.timestamp}</small>
        </div>
      ))}
    </div>
  );
};

export default Messages;
