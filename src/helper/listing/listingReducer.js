import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    title: '',
    desc: '',
    value: ''
}

const listingReducer = createSlice(
    {
        name: 'listingData',
        initialState,
        reducers: {
            listingData: (state, {payload}) => {
                state[payload.key] = payload.value;
            }
        }
    }
)

export const { listingData } = listingReducer.actions;

export default listingReducer.reducer;