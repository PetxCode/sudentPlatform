import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { createUser, removeUser } = GlobalState.actions;

export default GlobalState.reducer;
