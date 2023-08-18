import { createSlice } from "@reduxjs/toolkit";
import status from "../../constants/status";
import { login } from "./thunk";

const initialState = {
  user: {},
  token: "",
  isLogin: false,
  loader: false,
  status: status.IDLE,
};

const slice = createSlice({
  name: "authetication",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.status = status.LOADING;
      state.loader = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = status.SUCCEDED;
      state.loader = false;
      state.user = action.payload?.data;
      state.isLogin = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = status.FAILED;
      state.loader = false;
      state.user = initialState.user;
      state.isLogin = initialState.isLogin;
    });
  },
});

export default slice.reducer;
