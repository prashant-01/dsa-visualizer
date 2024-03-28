import { createSlice } from "@reduxjs/toolkit";

const bubbleSlice = createSlice({
    name : "bubble" ,
    initialState : {
        timeOutId : localStorage.getItem("timeOutId") ? JSON.parse(localStorage.getItem("timeOutId")) : null ,
        currentComparison : localStorage.getItem("currentComparison") ? JSON.parse(localStorage.getItem("currentComparison")) : [] ,
    } , 
    reducers : {
        setCurrentComparison : (state , action) => {
            state.currentComparison = action.payload;
            localStorage.setItem("currentComparison" , JSON.stringify(state.currentComparison));
        } ,
        setTimeOutId : ( state , action ) => {
            state.timeOutId = action.payload;
            localStorage.setItem("timeOutId" , JSON.stringify(state.timeOutId));
        }
    }
})

export const { setCurrentComparison , setTimeOutId } = bubbleSlice.actions;
export default bubbleSlice.reducer;