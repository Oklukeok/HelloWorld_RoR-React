import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_GREETINGS = 'RAILS-REACT-CAPSTONE-SETUP/app/javascript/redux/greetings/getGreetings';

const initialState = [];

const getGreetingsApi = 'http://127.0.0.1:3000/api/v1/greetings/random';

// action creators to get greetings
export const getGreetings = createAsyncThunk(
    GET_GREETINGS, () => axios.get(getGreetingsApi).then((res) => {
    const greetings = res.data.greeting;
    return greetings;
  }),
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (_, action) => action.payload);
    builder.addCase(getGreetings.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(getGreetings.pending, (_, action) => action.payload);
  },
});

export default greetingsSlice.reducer;