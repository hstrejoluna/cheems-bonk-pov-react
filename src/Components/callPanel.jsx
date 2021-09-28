import * as React from "react"; // the most future proof import

const CallPanel = () => {
  return (
    <div className="call-panel">
      <div className="triad-btn">
        <p>Remind me</p>
        <i className="decline-btn fa-solid fa-phone-slash"></i>
        <p>decline</p>
      </div>
      <div className="triad-btn">
      <p>Message</p>
        <i className="accept-btn fa-solid fa-phone"></i>
        <p>accept</p>
      </div>
    </div>
  );
};
export default CallPanel;
