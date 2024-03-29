import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import movieList from "./slices/moviesList";
import movie from "./slices/movies";
import infoSystem from './slices/infoSystem'
import auth from "./slices/auth";
const store = configureStore({
  reducer: {
    movie,
    movieList,
    infoSystem,
    auth,
  },
  middleware: [thunk, logger]
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
