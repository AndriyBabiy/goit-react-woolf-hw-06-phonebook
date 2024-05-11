import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState: INITIAL_STATE,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { setName, setNumber } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
