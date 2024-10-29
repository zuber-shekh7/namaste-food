import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    setDarkTheme: (state, action) => {
      state.isDarkTheme = action.payload;
    },
  },
});

export const { setDarkTheme } = appSlice.actions;
export default appSlice.reducer;
