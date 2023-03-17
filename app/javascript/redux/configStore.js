import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './greetings/Greetings';


const store = configureStore({
  reducer: {
    greetings: greetingsSlice,
  },
});

export default store;