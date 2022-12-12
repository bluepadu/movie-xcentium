import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import type { RootState } from '../store';
  
  // declaring the types for our state
  export type MovieState = any;
  
  const initialState: MovieState = {
  };
  
  export const movieSlice = createSlice({
    name: 'movie',
    initialState,
  // The `reducers` field lets us define reducers and generate associated actions. 
  // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app. 
  // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
    reducers: {
      updateMovie: (state, action: PayloadAction<any>) => {
        state[action.payload.imdbID] = action.payload;
      },
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    updateMovie,
  } = movieSlice.actions;
  
  // exporting the reducer here, as we need to add this to the store
  export default movieSlice.reducer;