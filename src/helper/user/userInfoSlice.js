import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    name: '',
    role: ''
}

const userInfoSlice = createSlice(
    {
        name: 'userDetails',
        initialState,
        reducers: {
            userInfo: (state, {payload}) => {
                state.email = payload.email;
                state.name = payload.name;
                state.role = payload.role;
            }
        }
    }
)

export const { userInfo } = userInfoSlice.actions;
  
export default userInfoSlice.reducer;