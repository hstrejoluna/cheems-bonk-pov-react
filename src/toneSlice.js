import { Haptics } from '@capacitor/haptics';
import { createSlice } from "@reduxjs/toolkit";
import imgbonk from "./images/cheems-bonk.png";
import cheems from "./images/cheems-call.png";

const ToneAudio = new Audio("/Tone/call.mp3");
const Bonk = new Audio("/Tone/bonk.mp3");

export const toneSlice = createSlice({
  name: "tone",
  initialState: {
    playing: false,
    play: "play",
    audio: null,
    Changeimage: null,
  },
  reducers: {
    playTone: (state) => {
      vibrate(500) 
      window.navigator.vibrate([
        4000, 200, 4000, 200, 4000, 200, 4000, 200, 4000, 200, 4000, 200,
      ]);
      state.playing = true;
      state.play = "stop";
      state.audio = ToneAudio;
      state.audio.currentTime = 0;
      state.audio.play();
    },
    stopTone: (state) => {
      window.navigator.vibrate([0]);
      state.playing = false;
      state.play = "play";
      state.audio.pause();
      state.audio = null;
    },
    bonk: (state) => {
      if (state.audio != null) {
        document.body.style.backgroundImage = `url('${imgbonk}')`;
        window.navigator.vibrate([100]);
        state.playing = false;
        state.audio.pause();
        state.audio = null;
        state.play = "play";
        state.audio = Bonk;
        state.audio.currentTime = 0;
        state.audio.play();
        setTimeout(() => {
          document.body.style.backgroundImage = `url('${cheems}')`;
        }, 200);
      } else {
        document.body.style.backgroundImage = `url('${imgbonk}')`;
        window.navigator.vibrate([100]);
        state.playing = false;
        state.play = "play";
        state.audio = Bonk;
        state.audio.currentTime = 0;
        state.audio.play();
        setTimeout(() => {
          document.body.style.backgroundImage = `url('${cheems}')`;
        }, 200);
      }
    },
  },
});

export const { playTone, stopTone, bonk } = toneSlice.actions;

export default toneSlice.reducer;
