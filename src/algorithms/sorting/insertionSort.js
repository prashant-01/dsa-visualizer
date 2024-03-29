import { setTimeOutId } from "../../redux/slices/bubbleSlice";
import { setCurrentElement, setInserted, setSorted, setToInsert, setToShift } from "../../redux/slices/insertionSlice";
import { setIsRunning } from "../../redux/slices/runningSlice";


const insertionSort = ( inputArray , dispatch ) => {
    dispatch(setIsRunning(true));
    let array = inputArray.slice();
    let toDispatch = [];

    for(let i = 1 ; i<array.length ; i++){
        toDispatch.push([i]);
        let key = array[i];
        let j = i-1;
        let isInserted = false;
        let toShiftArray = [];
        while(j>=0 && array[j] > key){
            isInserted = true;
            array[j+1] = array[j];
            toShiftArray.push([ "shift" , j ]);
            j--;
        }
        array[j+1] = key;
        if(isInserted){
            toDispatch.push([i , true]);
            toDispatch = [ ...toDispatch , ...toShiftArray ];
            toDispatch.push(["insert" , j+1 , i]);
        }
        toDispatch.push([true , i]);
    }

    handleDispatch(toDispatch, dispatch, array , 1000);
    return;
}

function handleDispatch(toDispatch, dispatch, array , speed){
    if(!toDispatch.length){
        setTimeout(() => {
            dispatch(setIsRunning(false));
        } , speed);
        return;
    }
    let dispatchFunction = toDispatch[0].length === 2 ?
    typeof toDispatch[0][0] === "boolean" ? setSorted :
    typeof toDispatch[0][1] === "boolean" ? setToInsert : setToShift : 
    toDispatch[0].length === 1 ? setCurrentElement : setInserted;

    dispatch(dispatchFunction(toDispatch.shift()));
    const timeOutId = setTimeout(() => {
        handleDispatch(toDispatch, dispatch, array, speed);
    }, speed);

    dispatch(setTimeOutId(timeOutId));
}

export default insertionSort;