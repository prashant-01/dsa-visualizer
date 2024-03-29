import bubbleSort from "../algorithms/sorting/bubbleSort";
import insertionSort from "../algorithms/sorting/insertionSort";

const useSort = (algorithm) => {
    return  algorithm === "bubble" ? bubbleSort : 
            algorithm === "insertion" ? insertionSort :
            // algorithm === "quick" ? quickSort : 
            // algorithm === "heap" ? heapSort : 
            // algorithm === "merge" ? mergeSort : 
            null;
}

export default useSort;