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
                for(let i=0; i<payload.key.length; i++){
                    state[payload.key[i]] = payload.value[i];
                }
            }
        }
    }
)

export const { listingData } = listingReducer.actions;

export default listingReducer.reducer;