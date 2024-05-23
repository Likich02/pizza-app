import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  jwt: string | null;
}

const initialState: UserState = {
  jwt: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addJWT: (state) => {
      state.jwt = "afkdvj";
    },
    logout: (state) => {
      state.jwt = null;
    },
  },
});

export default userSlice.reducer;
export const userAction = userSlice.actions;
