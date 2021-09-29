
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      audio.currentTime = 0
      audio.play();
    }
     
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Header = () => {
  // url nokia spy tone
  const [playing, toggle] = useAudio('/Tone/call.mp3');

  return (
    <header className="header-cheems">
      <Link to="/about">
        <button> About</button>
      </Link>

      <h1>Cheems Call</h1>
      <Link to="/">
        <button onClick={toggle}> START </button>
      </Link>
    </header>
  );
};

export default Header;
