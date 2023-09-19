import { configureStore } from '@reduxjs/toolkit';
import { tweetsReducer } from './tweets/tweetsSlice';

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
