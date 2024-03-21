import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieNames: null,
    movieResult: null,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.movieNames = movieNames;
      state.movieResult = movieResult;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
