import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from "@/services/UserService";
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, ACCESS_TOKEN_EXPIRE } from '@/config/CookieConfig';

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
      Cookies.remove(ACCESS_TOKEN);
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
          Cookies.set(ACCESS_TOKEN, userData.data.user.token, {expires: ACCESS_TOKEN_EXPIRE });
        }     
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loading = true;
        state.user = null;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;