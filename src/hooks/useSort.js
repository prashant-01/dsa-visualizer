import bubbleSort from "../algorithms/sorting/bubbleSort";

const useSort = (algorithm) => {
    return  algorithm === "bubble" ? bubbleSort : 
            // algorithm === "quick" ? quickSort : 
            // algorithm === "heap" ? heapSort : 
            // algorithm === "merge" ? mergeSort : 
            null;
}

export default useSort;