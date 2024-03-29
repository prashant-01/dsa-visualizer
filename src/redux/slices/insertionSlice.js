import { createSlice } from "@reduxjs/toolkit";

const insertionSlice = createSlice({
    name : "insertion" ,
    initialState : {
        currentElement : localStorage.getItem("currentElement") ? JSON.parse(localStorage.getItem("currentElement")) : 1 ,
        toInsert : localStorage.getItem("toInsert") ? JSON.parse(localStorage.getItem("toInsert")) : null ,
        currentComparison : localStorage.getItem("currentComparison") ? JSON.parse(localStorage.getItem("currentComparison")) : [] ,
        toShift : localStorage.getItem("toShift") ? JSON.parse(localStorage.getItem("toShift")) : null ,
        inserted : localStorage.getItem("inserted") ? JSON.parse(localStorage.getItem("inserted")) : [] ,
        sortedInsertion : localStorage.getItem("sortedInsertion") ? JSON.parse(localStorage.getItem("sortedInsertion")) : [0] ,
    } ,
    reducers : {
        setCurrentElement : (state , action) => {
            state.currentElement = action.payload[0];
            localStorage.setItem("currentElement" , JSON.stringify(state.currentElement));
        } ,
        setToInsert : (state , action) => {
            state.toInsert = action.payload[0];
            localStorage.setItem("toInsert" , JSON.stringify(state.toInsert));
        } ,
        setCurrentComparison : (state , action) => {
            state.currentComparison = action.payload;
            localStorage.setItem("currentComparison" , JSON.stringify(state.currentComparison));
        } ,
        setToShift : (state , action) => {
            state.toShift = action.payload[1];
            localStorage.setItem("toShift" , JSON.stringify(state.toShift));
        } ,
        setInserted : (state , action) => {
            state.inserted = [ action.payload[1] , action.payload[2] ];
            localStorage.setItem("inserted" , JSON.stringify(state.inserted));
        } ,
        setSorted : (state , action) => {
            state.sortedInsertion = [ ...state.sortedInsertion , action.payload[1] ];
            localStorage.setItem("sortedInsertion" , JSON.stringify(state.sortedInsertion));
        }
    }
})

export const { 
    setCurrentElement , 
    setCurrentComparison , 
    setToInsert , 
    setToShift , 
    setInserted ,
    setSorted } = insertionSlice.actions;

export default insertionSlice.reducer;