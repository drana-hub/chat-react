import React from "react";
import Message from "./Message";

export default function MessageList({ messageList }) {
  return (
    <div className="msg-list">
      {messageList.map((msg, index) => (
        <Message key={index} user={msg.user} text={msg.text}/>
      ))}
    </div>
  );
}
