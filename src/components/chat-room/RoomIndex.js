import React, { useEffect, useState } from "react";
import "./room.css";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { API_ENDPOINT } from "../../utils/constants";
const ENDPOINT = process.env.NODE_ENV === 'production' ? API_ENDPOINT.prod : API_ENDPOINT.local;

export default function RoomIndex({ user, socket, setSocket }) {
  const navigate = useNavigate();
  const roomSize = [
    { id: 1, name: "Room1", currentSize: 2, maxSize: 3 },
    { id: 2, name: "Room2", currentSize: 2, maxSize: 3 },
  ];
  const [roomList] = useState(roomSize);
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
    if(!socket){
      const socket = socketIOClient(ENDPOINT, {
        query: {
          userName: user,
          // token: "YOUR_TOKEN",
          // ... any other data you'd like to send
        },
      });
      setSocket(socket);
    }
    
  },[]);

  const enterRoom = (id) => {
    navigate("/room/" + id);
  };
  return (
    <>
      <div>
        Hello {user}, We have different rooms available for you to chat.
      </div>
      {roomList.map((room, index) => (
        <div className="room-list" key={index}>
          <button
            disabled={room.currentSize >= room.maxSize}
            onClick={() => {
              enterRoom(room.name);
            }}
          >
            Enter {room.name}
          </button>
          <p>Current Size: {room.currentSize}</p>
          <p>Max Size: {room.maxSize}</p>
        </div>
      ))}
      <div>
        <button>Create new Room</button>
      </div>
    </>
  );
}
