import React, { useState } from "react";
//import socketIOClient from "socket.io-client";
//const ENDPOINT = "http://localhost:3002";
// const ENDPOINT = "Backend.eba-x2nqvpvs.us-west-2.elasticbeanstalk.com";

export default function SendMessage({ user, roomName, socket }) {
  const [msg, setMsg] = useState(null);
  const handleMsgInput = (e) => {
    setMsg(e.target.value);
  };
  const sendMsg = () => {
    //const socket = socketIOClient(ENDPOINT);
    let newMsg = { text: msg, user };
    socket.emit('send_message',{data: newMsg, roomName})
    //setMessageList([...messageList, newMsg]);
    //socket.emit('send_message',[...messageList, newMsg])
    setMsg(null);
  };
  return (
    <div className="msg-input-form">
      <input className="msg-input" value={msg || ""} onChange={handleMsgInput}></input>
      <button className="send-btn" disabled={!msg} onClick={sendMsg}>
        Send
      </button>
    </div>
  );
}
