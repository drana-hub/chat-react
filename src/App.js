import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import { useState } from "react";
import RoomIndex from "./components/chat-room/RoomIndex";
import Room from "./components/chat-room/Room";

function App() {
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser}/>}></Route>
        <Route path="/room-list" element={<RoomIndex {...{setSocket, user, socket}} />}></Route>
        <Route path="/room/:id" element={<Room {...{socket, user}}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
