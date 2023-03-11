import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import LoginService from '@/services/loginAxios';

// Async thunk to call login API
export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await LoginService.login({ email: username, password });
      
      return response.data;
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
    login2: () => {
      console.log('login2');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        console.log("Chạy vào đây 1");
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Chạy vào đây 2");
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        console.log("Chạy vào đây 3");
        state.error = action.payload;
      });
  },
});

export const { login, logout, login2 } = authSlice.actions;
export default authSlice.reducer;