import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
  };

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logIn: (state, action) => {
        state.isLoggedIn = true;
      },
      logOut: (state, action) => {
        state.isLoggedIn = false;
      },
    },
  });
  
  export const { logIn, logOut } = userSlice.actions;
  
  export default userSlice.reducer;