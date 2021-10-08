import { Haptics } from "@capacitor/haptics";
import { createSlice } from "@reduxjs/toolkit";
import imgthree from "./images/imgthree.png";
import imgtwo from "./images/imgtwo.png";
import imgone from "./images/imgone.png";

const ToneAudio = new Audio("./Tone/call.mp3");
const Accept = new Audio("./Tone/accept.mp3");
const Decline = new Audio("/Tone/decline.mp3");

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
    accept: (state) => {
      if (state.audio != null) {
        document.body.style.backgroundImage = `url('${imgtwo}')`;
        window.navigator.vibrate([100]);
        state.playing = false;
        state.audio.pause();
        state.audio = null;
        state.play = "play";
        state.audio = Accept;
        state.audio.currentTime = 0;
        state.audio.play();
        setTimeout(() => {
          document.body.style.backgroundImage = `url('${imgone}')`;
        }, 200);
      } else {
        document.body.style.backgroundImage = `url('${imgtwo}')`;
        window.navigator.vibrate([100]);
        state.playing = false;
        state.play = "play";
        state.audio = Accept;
        state.audio.currentTime = 0;
        state.audio.play();
        setTimeout(() => {
          document.body.style.backgroundImage = `url('${imgone}')`;
        }, 200);
      }
    },
    decline: (state) => {
      if (state.audio != null) {
        document.body.style.backgroundImage = `url('${imgthree}')`;
        window.navigator.vibrate([100]);
        state.playing = false;
        state.audio.pause();
        state.audio = null;
        state.play = "play";
        state.audio = Decline;
        state.audio.currentTime = 0;
        state.audio.play();
        setTimeout(() => {
          document.body.style.backgroundImage = `url('${imgone}')`;
        }, 500);
      } else {
        document.body.style.backgroundImage = `url('${imgthree}')`;
        window.navigator.vibrate([100]);
        state.playing = false;
        state.play = "play";
        state.audio = Decline;
        state.audio.currentTime = 0;
        state.audio.play();
        setTimeout(() => {
          document.body.style.backgroundImage = `url('${imgone}')`;
        }, 500);
      }
    },
  },
});

export const { playTone, stopTone, accept, decline } = toneSlice.actions;

export default toneSlice.reducer;
