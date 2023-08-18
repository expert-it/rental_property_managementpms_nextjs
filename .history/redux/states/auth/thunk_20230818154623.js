import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { endpoints } from "../../../endpoints";

export const login = createAsyncThunk("/auth/login", async (payload, Thunk) => {
  try {
    const response = await axios.post(endpoints.auth.login, payload);
    return response?.data;
  } catch (error) {
    return Thunk.rejectWithValue(error);
  }
});
export const signup = createAsyncThunk(
  "/auth/signup",
  async (payload, Thunk) => {
    try {
      const response = await axios.post(endpoints.auth.signup, payload);
      return response?.data;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
