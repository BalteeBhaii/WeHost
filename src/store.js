import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/Utilities/user/userSlice';
import userInfoSlice from './components/Utilities/user/userInfoSlice';
import listingReducer from './components/Utilities/listing/listingReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    userDetails: userInfoSlice,
    listing: listingReducer
  },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());