import { createSlice } from "@reduxjs/toolkit";

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
      console.log("enter playTone");
      state.playing = true;
      state.play = "stop";
      state.audio = new Audio("/Tone/call.mp3");
      state.audio.currentTime = 0;
      console.log(state.audio);
      state.audio.play();
    },
    stopTone: (state) => {
      window.navigator.vibrate([0]);
      state.playing = false;
      state.play = "play";
      state.audio.pause();
      state.audio = null;
    },
  },
});

export const { playTone, stopTone } = toneSlice.actions;

export default toneSlice.reducer;
