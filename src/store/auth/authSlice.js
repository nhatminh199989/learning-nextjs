import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from "@/services/UserService";

// Async thunk to call login API
// export const loginAsync = createAsyncThunk(
//   'auth/loginAsync',
//   async ({ username, password }, thunkAPI) => {
//     try {
//       const response = await LoginService.login({ email: username, password });
      
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login: async (state, action) => {
      console.log("action payload", action.payload);
      const login = await UserService.loginUser(action.payload);
      console.log("login payload", login);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    userLogin: () => {
      console.log('login2');
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginAsync.pending, (state) => {
  //       console.log("Chạy vào đây 1");
  //       state.loading = true;
  //     })
  //     .addCase(loginAsync.fulfilled, (state, action) => {
  //       state.loading = false;
  //       console.log("Chạy vào đây 2");
  //       state.user = action.payload;
  //     })
  //     .addCase(loginAsync.rejected, (state, action) => {
  //       state.loading = false;
  //       console.log("Chạy vào đây 3");
  //       state.error = action.payload;
  //     });
  // },
});

export const { login, logout, login2 } = authSlice.actions;
export default authSlice.reducer;