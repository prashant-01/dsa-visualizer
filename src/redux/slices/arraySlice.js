import { createSlice } from "@reduxjs/toolkit";

const arraySlice = createSlice({
    name : "array" ,
    initialState : {
        inputArray : localStorage.getItem("inputArray") ? JSON.parse(localStorage.getItem("inputArray")) : [] ,
    } , 
    reducers : {
        setArray : (state , action) => {
            state.inputArray = action.payload;
            localStorage.setItem("inputArray" , JSON.stringify(action.payload));
        }
    }
})

export const { setArray } = arraySlice.actions;
export default arraySlice.reducer;