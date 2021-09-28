import * as React from "react"; // the most future proof import

const CallPanel = () => {
  return (
    <div className="call-panel">
      <div className="triad-btn">
        <p>Remind me</p>
        <button className="decline-btn">decline</button>
        <p>decline</p>
      </div>
      <div className="triad-btn">
      <p>Message</p>
        <button className="accept-btn">accept</button>
        <p>accept</p>
      </div>
    </div>
  );
};
export default CallPanel;
