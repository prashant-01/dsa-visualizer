import { createSlice } from "@reduxjs/toolkit";

const runningSlice = createSlice({
    name : "running" ,
    initialState : {
        isRunning : localStorage.getItem("isRunning") ? JSON.parse(localStorage.getItem("isRunning")) : [] ,
    } , 
    reducers : {
        setIsRunning : (state , action) => {
            state.isRunning = action.payload;
            localStorage.setItem("isRunning" , JSON.stringify(state.isRunning));
        }
    }
})

export const { setIsRunning } = runningSlice.actions;
export default runningSlice.reducer;