import * as React from "react"; // the most future proof import
import { useDispatch } from "react-redux";
import { bonk } from "../toneSlice";


const CallPanel = () => {
  const dispatch = useDispatch();


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
        <i className="accept-btn fa-solid fa-phone" onClick={() => { dispatch(bonk())}}></i>
        <p>accept</p>
      </div>
    </div>
  );
};
export default CallPanel;
