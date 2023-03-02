import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import userInfoSlice from './features/user/userInfoSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    userDetails: userInfoSlice
  },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());