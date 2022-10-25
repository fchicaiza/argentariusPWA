import { createSlice } from "@reduxjs/toolkit";

export const UserInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfo: { logged: false, token: null },
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = UserInfoSlice.actions;

export default UserInfoSlice.reducer;
