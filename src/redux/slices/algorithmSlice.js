import { createSlice } from "@reduxjs/toolkit";

const algorithmSlice = createSlice({
    name : "algorithm" ,
    initialState : {
        algorithmType : localStorage.getItem("algorithmType") ? JSON.parse(localStorage.getItem("algorithmType")) : "" ,
    } , 
    reducers : {
        setAlgorithm : (state , action) => {
            state.algorithmType = action.payload;
            console.log(action.payload);
            localStorage.setItem("algorithmType" , JSON.stringify(action.payload));
        }
    }
})

export const { setAlgorithm } = algorithmSlice.actions;
export default algorithmSlice.reducer;