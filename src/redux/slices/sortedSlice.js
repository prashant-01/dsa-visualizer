import { createSlice } from "@reduxjs/toolkit";

const soretdSlice = createSlice({
    name : "sorted" ,
    initialState : {
        currentSorted : localStorage.getItem("currentSorted") ? JSON.parse(localStorage.getItem("currentSorted")) : [] ,
    } , 
    reducers : {
        setCurrentSorted : (state , action) => {
            state.currentSorted = action.payload.length === 0 ? [] : 
            action.payload.length > 2 ? action.payload :
            [...state.currentSorted , action.payload[1] ];
            localStorage.setItem("currentSorted" , JSON.stringify(state.currentSorted));
        }
    }
})

export const { setCurrentSorted } = soretdSlice.actions;
export default soretdSlice.reducer;