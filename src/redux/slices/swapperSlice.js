import { createSlice } from "@reduxjs/toolkit";

const swapperSlice = createSlice({
    name : "swapper" ,
    initialState : {
        currentSwap : localStorage.getItem("currentSwap") ? JSON.parse(localStorage.getItem("currentSwap")) : [] ,
    } , 
    reducers : {
        setCurrentSwap : (state , action) => {
            state.currentSwap = action.payload
            localStorage.setItem("currentSwap" , JSON.stringify(state.currentSwap));
        }
    }
})

export const { setCurrentSwap } = swapperSlice.actions;
export default swapperSlice.reducer;