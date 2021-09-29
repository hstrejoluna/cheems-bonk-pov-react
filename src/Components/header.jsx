import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      window.navigator.vibrate([4000, 200, 4000, 200, 4000, 200, 4000, 200, 4000, 200, 4000, 200]);
      audio.currentTime = 0;
      audio.play();
    }
    else{
      audio.pause();
    }
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const Header = () => {
  // url nokia spy tone
  const [playing, toggle] = useAudio("/Tone/call.mp3");

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
