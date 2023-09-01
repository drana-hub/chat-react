import React from "react";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import "./chatbox.css";

export default function Chatbox({ user, roomName, messageList, setMessageList, socket }) {
  return (
    <div className="chat-box">
      <MessageList messageList={messageList} />
      <SendMessage {...{ messageList, setMessageList, user, roomName, socket }} />
    </div>
  );
}
