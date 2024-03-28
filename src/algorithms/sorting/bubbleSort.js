import { setArray } from "../../redux/slices/arraySlice";
import { setCurrentComparison, setTimeOutId } from "../../redux/slices/bubbleSlice";
import { setIsRunning } from "../../redux/slices/runningSlice";
import { setCurrentSorted } from "../../redux/slices/sortedSlice";
import { setCurrentSwap } from "../../redux/slices/swapperSlice";

const bubbleSort = (inputArray , dispatch) => {
    dispatch(setIsRunning(true));
    let array = inputArray.slice();
    let toDispatch = [];
    let sorted = false;
    let round = 0;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1 - round; i++) {
            toDispatch.push([i, i + 1]);
            if (array[i] > array[i + 1]) {
                toDispatch.push([i, i + 1, true]);
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
                toDispatch.push(array.slice());
                toDispatch.push([]);
            }
        }
        toDispatch.push([true, array.length - 1 - round]);
        round++;
    }
    toDispatch.push([ true , 0 ]);
    console.log(toDispatch);
    handleDispatch(toDispatch, dispatch, array , 1000);
    return array;
}

const handleDispatch = (toDispatch, dispatch, array , speed) => {
    if (!toDispatch.length) {
        // dispatch(setCurrentComparison(array.map((_, index) => index)));
        setTimeout(() => {
            dispatch(setCurrentComparison([]));
            dispatch(setCurrentSorted(array.map((_, index) => index)));
            dispatch(setIsRunning(false));
        }, 200);
        return;
    }
    let dispatchFunction = toDispatch[0].length > 3 ?
    setArray : 
    toDispatch[0].length === 3 || toDispatch[0].length === 0 ?
    setCurrentSwap : 
    toDispatch[0].length === 2 && (toDispatch[0][0] === true || toDispatch[0][0] === false) ?
    setCurrentSorted : 
    setCurrentComparison ;
    dispatch(dispatchFunction(toDispatch.shift()));
    const timeOutId = setTimeout(() => {
        handleDispatch(toDispatch, dispatch, array, speed);
    }, speed);

    dispatch(setTimeOutId(timeOutId));
}

export default bubbleSort;