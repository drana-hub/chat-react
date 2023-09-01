import { useParams, useNavigate } from "react-router-dom";
import Chatbox from "../chat-box/Chatbox";
import { useEffect, useState } from "react";
const Room = ({ user, socket }) => {
  const navigate = useNavigate();
  let msgList = [];
  const [messageList, setMessageList] = useState(msgList);
  const { id } = useParams();
  console.log("code is here");
  const handleMsgReceived = (message) => {
    setMessageList(prevList => [...prevList, message]);
  }
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
    console.log("code is here");
    socket.emit("joinRoom", { roomName: id, user });
    socket.on("msg_received", handleMsgReceived);
    return () => {
      socket.off("msg_received", handleMsgReceived);
      socket.emit("leaveRoom", { roomName: id, user });
    };
  },[]);
  return (
    <div className="room">
      <div className="welcome">
        Hello {user}, Welcome to RoomId: {id}
      </div>
      <Chatbox
        user={user}
        messageList={messageList}
        setMessageList={setMessageList}
        roomName={id}
        socket={socket}
      ></Chatbox>
    </div>
  );
};

export default Room;
