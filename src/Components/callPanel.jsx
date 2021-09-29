import * as React from "react"; // the most future proof import
import UseAudio from "./useAudio";


const CallPanel = () => {
  const [toggle] = UseAudio("/Tone/bonk.mp3", true);
 
  return (
    <div className="call-panel">
      <div className="triad-btn">
        <i className="fa-solid fa-clock"></i>
        <p>Remind me</p>
        <i className="decline-btn fa-solid fa-phone-slash"></i>
        <p>decline</p>
      </div>
      <div className="triad-btn">
        <i className="fa-solid fa-comment"></i>
        <p>Message</p>
        <i className="accept-btn fa-solid fa-phone" onClick={toggle}></i>
        <p>accept</p>
      </div>
    </div>
  );
};
export default CallPanel;
