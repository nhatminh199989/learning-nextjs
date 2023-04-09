import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from "@/services/UserService";
import Cookies from 'js-cookie';

// Async thunk to call login API
export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async (params, thunkAPI) => {
    try {
      const loginData = await UserService.loginUser(params);
      return loginData;      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    }, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {        
        state.loading = true;
        state.isLoggedIn = false;
        state.user = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const userData = action.payload;
        if (userData?.error) return;
        if (userData?.success) {
          state.isLoggedIn = true;
          state.user = userData.data.user;
          Cookies.set('access_token', userData.data.user.token, {expires: 365 });
        }     
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loading = true;
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;