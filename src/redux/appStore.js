import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./slices/arraySlice";
import swapperReducer from "./slices/swapperSlice";
import bubbleReducer from "./slices/bubbleSlice";
import sortedReducer from "./slices/sortedSlice";
import runningReducer from "./slices/runningSlice";
import algorithmReducer from "./slices/algorithmSlice";

import insertionReducer from "./slices/insertionSlice";
const appStore = configureStore({
    reducer : {
        array : arrayReducer ,
        swapper : swapperReducer ,
        sorted : sortedReducer ,
        algorithm : algorithmReducer ,
        running : runningReducer ,
        bubble : bubbleReducer ,

        insertion : insertionReducer ,
    }
});

export default appStore;