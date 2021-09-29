import { Link } from "react-router-dom";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { playTone, stopTone } from "../toneSlice";

const Header = () => {
  const play = useSelector((state) => state.tone.play);
  const playing = useSelector((state) => state.tone.playing);

  const dispatch = useDispatch();

  // url nokia spy tone

  return (
    <header className="header-cheems">
      <Link to="/about">
        <button> About</button>
      </Link>

      <h1>Cheems Call</h1>
      <Link to="/">
        <button
          onClick={() => {
            playing ? dispatch(stopTone()) : dispatch(playTone());
          }}
        >
          {play}
        </button>
      </Link>
    </header>
  );
};

export default Header;
