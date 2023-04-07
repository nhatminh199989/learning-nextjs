import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from "@/services/UserService";

// Async thunk to call login API
export const loginAsync = createAsyncThunk(
  'auth/loginUser',
  async (params, thunkAPI) => {
    try {
      const login = await UserService.loginUser(params);
      console.log(login);
      return login;
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
      state.user = action.payload;
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
        const data = action.payload;
        if (data?.success) {
          state.user = data?.user;
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