import { useState, useEffect } from "react";
import bg from "../images/cheems-bonk.png";
import bgnb from "../images/cheems-call.png";

const UseAudio = (url, setBonk) => {
  const [audio] = useState(new Audio(url, setBonk));
  const [playing, setPlaying] = useState(false);

  let toggle = () => setPlaying(!playing);
  // play audio
  useEffect(() => {
    if (setBonk === false && playing === true) {
      window.navigator.vibrate([
        4000, 200, 4000, 200, 4000, 200, 4000, 200, 4000, 200, 4000, 200,
      ]);
      audio.currentTime = 0;
      audio.play();
    
    } else if (setBonk === true && playing === true) {
      audio.pause();
      window.navigator.vibrate([0])  
      audio.currentTime = 0;
      audio.play()

      console.log("set bonk is true!");
      document.body.style.backgroundImage = `url('${bg}')`;
    } else {
      document.body.style.backgroundImage = `url('${bgnb}')`;
      audio.pause();
    }
  }, [playing, audio, setBonk]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

export default UseAudio;
