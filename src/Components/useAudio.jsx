import { useState, useEffect } from "react";

const UseAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);
  // play audio
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

export default UseAudio;