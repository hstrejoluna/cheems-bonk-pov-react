import { Link } from "react-router-dom";
import * as React from "react";
import UseAudio from "./useAudio";


const Header = () => {
  // url nokia spy tone
  const [playing, toggle] = UseAudio("/Tone/call.mp3");

  return (
    <header className="header-cheems">
      <Link to="/about">
        <button> About</button>
      </Link>

      <h1>Cheems Call</h1>
      <Link to="/">
        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
      </Link>
    </header>
  );
};

export default Header;
