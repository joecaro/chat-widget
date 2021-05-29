import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("AI");
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
        margin: "0 auto 40px",
        height: "600px",
        width: "400px",
        border: "none",
        borderRadius: "5px",
        transition: ".2s",
      });
    } else
      setIframeStyles({
        margin: "0 auto 40px",
        height: "0",
        width: "0",
        border: "none",
        transition: ".2s",
      });
    setOpen(!open);
    setSrc("AI");
  }

  function handleChangeSrc() {
    if (src === "AI") {
      setSrc("Human");
    } else setSrc("AI");
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
        <div className='App-chat-container'>
          {open && (
            <button
              className='App-change-button'
              type='button'
              onClick={handleChangeSrc}>
              <p>Talk to {src === "AI" ? "Human" : "Virtual Assistant"}</p>
            </button>
          )}
          <br />
          <iframe
            style={iframeStyles}
            src={
              src === "AI"
                ? "https://x8ywi-ajo2p-e78sa.netlify.app/"
                : "https://static.zdassets.com/web_widget/latest/liveChat.html?v=10#key=cmdihelp.zendesk.com&settings=JTdCJTIyd2ViV2lkZ2V0JTIyJTNBJTdCJTIyY2hhdCUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBbnVsbCUyQyUyMm1lbnVPcHRpb25zJTIyJTNBJTdCJTIyZW1haWxUcmFuc2NyaXB0JTIyJTNBdHJ1ZSU3RCUyQyUyMmRlcGFydG1lbnRzJTIyJTNBJTdCJTdEJTJDJTIycHJlY2hhdEZvcm0lMjIlM0ElN0IlMjJkZXBhcnRtZW50TGFiZWwlMjIlM0FudWxsJTJDJTIyZ3JlZXRpbmclMjIlM0FudWxsJTdEJTJDJTIyb2ZmbGluZUZvcm0lMjIlM0ElN0IlMjJncmVldGluZyUyMiUzQW51bGwlN0QlMkMlMjJjb25jaWVyZ2UlMjIlM0ElN0IlMjJhdmF0YXJQYXRoJTIyJTNBbnVsbCUyQyUyMm5hbWUlMjIlM0FudWxsJTJDJTIydGl0bGUlMjIlM0FudWxsJTdEJTdEJTJDJTIyY29sb3IlMjIlM0ElN0IlMjJhcnRpY2xlTGlua3MlMjIlM0ElMjIlMjIlMkMlMjJidXR0b24lMjIlM0ElMjIlMjIlMkMlMjJoZWFkZXIlMjIlM0ElMjIlMjIlMkMlMjJsYXVuY2hlciUyMiUzQSUyMiUyMiUyQyUyMmxhdW5jaGVyVGV4dCUyMiUzQSUyMiUyMiUyQyUyMnJlc3VsdExpc3RzJTIyJTNBJTIyJTIyJTJDJTIydGhlbWUlMjIlM0FudWxsJTdEJTdEJTdE&&locale=en-US&title=Web%20Widget%20Live%20Chat"
            }
            title='Chat AI'></iframe>
          <button className='App-button' type='button' onClick={handleToggle}>
            <span className='App-button-icon'>
              <i className='bi bi-chat-square'></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
