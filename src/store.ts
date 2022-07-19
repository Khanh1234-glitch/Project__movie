import createinfoSystem from "./slices/infoSystem";
import MovieList from "./slices/getmoviesList";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movie from "./slices/movies";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: {
    movie,
    MovieList,
    createinfoSystem,
  },
  middleware: [thunk, logger]
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
