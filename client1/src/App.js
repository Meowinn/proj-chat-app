import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './chat';

const socket = io.connect("http://localhost:3001");

function App() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if(username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  }

  return (
    <div className="App">
     <div className="joinChatContainer">
       <h3 className=''>Join A Chat</h3>
       <input type="text" placeholder="John..." onChange={(event) => {setUsername(event.target.value)}}></input>
       <input type="text" placeholder="Room ID..." onChange={(event) => {setRoom(event.target.value)}}></input>
       <button onClick={joinRoom}>Join a Room</button>
     </div>
     
    

    <Chat socket={socket} username={username} room={room}/>

    </div>
  );
}

export default App;
