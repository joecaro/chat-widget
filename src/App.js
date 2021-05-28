import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [iframeStyles, setIframeStyles] = useState({
    margin: "0",
    height: "0",
    width: "0",
    border: "none",
    transition: ".2s",
  });

  function handleToggle() {
    if (!open) {
      setIframeStyles({
        margin: "30px auto 20px",
        height: "600px",
        width: "400px",
        border: "none",
        transition: ".2s",
      });
    } else
      setIframeStyles({
        margin: "0",
        height: "0",
        width: "0",
        border: "none",
        transition: ".2s",
      });
    setOpen(!open);
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Crimson App with Chat</h1>
        <p>Type things like:</p>
        <p>
          <span>"Hello"</span>
          <span>"Start over"</span>
          <span>"How do I import"</span>
        </p>
        <iframe
          style={iframeStyles}
          src='https://x8ywi-ajo2p-e78sa.netlify.app/'
          title='Chat Bot'></iframe>
        <button className='App-button' type='button' onClick={handleToggle}>
          <i class='bi bi-chat-square'></i>
        </button>
      </div>
    </div>
  );
}

export default App;
