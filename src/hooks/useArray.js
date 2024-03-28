import { setAlgorithm } from "../redux/slices/algorithmSlice";
import { setArray } from "../redux/slices/arraySlice";
import { setCurrentComparison, setTimeOutId } from "../redux/slices/bubbleSlice";
import { setIsRunning } from "../redux/slices/runningSlice";
import { setCurrentSorted } from "../redux/slices/sortedSlice";
import { setCurrentSwap } from "../redux/slices/swapperSlice";

const useArray = (array_size , dispatch , timeOutId) => {
    let array = [];
    for(let i=0 ; i<array_size ; i++){
        let num = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
        array.push(num);
    }
    dispatch(setArray(array));
    dispatch(setAlgorithm(""));
    dispatch(setCurrentSwap([]));
    dispatch(setCurrentComparison([]));
    dispatch(setCurrentSorted([]));
    dispatch(setIsRunning(false));
    timeOutId && clearTimeout(timeOutId) && dispatch(setTimeOutId(null));
}

export default useArray;