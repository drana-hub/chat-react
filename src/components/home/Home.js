import logo from "../../logo.svg";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleChatting = () => {
    window.sessionStorage.setItem('username', user)
    navigate("/room-list");
  };
  const handleUsername = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi, wanna chat? Enter your name:</p>
        <input onKeyUp={handleUsername}></input>
        <button disabled={!(user && user.length > 3)} onClick={handleChatting}>
          Start Chatting
        </button>
      </header>
    </div>
  );
};

export default Home;
