import { createSlice } from "@reduxjs/toolkit";

const sortingSlice = createSlice({
    name : "sorting" ,
    initialState : {
        black : localStorage.getItem("black") ? JSON.parse(localStorage.getItem("black")) : [] ,
        yellow : localStorage.getItem("yellow") ? JSON.parse(localStorage.getItem("yellow")) : [] ,
        red : localStorage.getItem("red") ? JSON.parse(localStorage.getItem("red")) : [] ,
        green : localStorage.getItem("green") ? JSON.parse(localStorage.getItem("green")) : [] ,
    } ,
    reducers : {
        setNormal : ( state , action ) => {

        } ,
        setComparisons : (state , action) => {
            state.yellow = action.payload;
            localStorage.setItem("yellow" , JSON.stringify(state.yellow));
        } ,
        setSwaps : (state , action) => {
            state.red = action.payload;
            localStorage.setItem("red" , JSON.stringify(state.red));
        } ,
        setSorted : (state , action) => {
            state.green = action.payload.length === 0 ? [] : [ ...state.green , action.payload ];
            localStorage.setItem("green" , JSON.stringify(state.green));
        } ,
    }
})

export const { setComparisons , setSwaps , setSorted } = sortingSlice.actions;
export default sortingSlice.reducer;