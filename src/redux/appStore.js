import { configureStore } from "@reduxjs/toolkit";
import sortingReducer from "./slices/sortingSlice";
import arrayReducer from "./slices/arraySlice";
import swapperReducer from "./slices/swapperSlice";
import bubbleReducer from "./slices/bubbleSlice";
import sortedReducer from "./slices/sortedSlice";
import runningReducer from "./slices/runningSlice";
import algorithmReducer from "./slices/algorithmSlice";
const appStore = configureStore({
    reducer : {
        sorting : sortingReducer ,
        array : arrayReducer ,
        swapper : swapperReducer ,
        sorted : sortedReducer ,
        algorithm : algorithmReducer ,
        running : runningReducer ,
        bubble : bubbleReducer ,
    }
});

export default appStore;