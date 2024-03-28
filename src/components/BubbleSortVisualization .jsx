import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../redux/slices/arraySlice';
import { setAlgorithm } from '../redux/slices/algorithmSlice';
import useSort from '../hooks/useSort';
import useArray from '../hooks/useArray';
const BubbleSortVisualization  = () => {
    const dispatch = useDispatch();
    const { algorithmType } = useSelector( store => store.algorithm );
    const { inputArray } = useSelector( store => store.array );
    const { currentComparison , timeOutId } = useSelector( store => store.bubble );
    const { currentSwap } = useSelector( store => store.swapper );
    const { currentSorted } = useSelector( store => store.sorted );
    const array_size = 10;
    useEffect( () => {
        useArray(array_size , dispatch , timeOutId);
        return () => dispatch(setArray([]));
    } , [])

    const sortFunction = useSort(algorithmType);
  return (
    <div className='bg-yellow-400 h-screen'>
        <p className='text-3xl'>Bubble Sort Visualization</p>
        <button onClick={ () => {
            console.log('clicked algo');
            dispatch(setAlgorithm("bubble"));
        } }
        className='border px-4 py-2 rounded-md border-black'>Bubble Sort</button>
        <button onClick={ () => sortFunction( inputArray , dispatch ) } 
        className='border px-4 py-2 rounded-md border-black'>Sort</button>
        <button onClick={ () => useArray(array_size , dispatch , timeOutId) }
        className='border px-4 py-2 rounded-md border-black'>New Array</button>
        {
            inputArray.length > 0 && 
            <div className='flex items-end justify-center gap-2 h-[80%] py-10'>
                {
                    inputArray.map((height , i) => (
                        <div key={i} style={{ height: `${height}px` }} 
                        className={`w-10 flex items-end justify-center text-white transition-all duration-500 ease-in-out
                        ${ currentComparison.includes(i) ? 'bg-blue-500' : 'bg-black' }
                        ${ currentSwap.includes(i) ? 'bg-red-500 animate-pulse' : 'bg-black' }
                        ${ currentSorted.includes(i) && 'bg-green-500' }`}>
                            {height}
                        </div>
                    ))
                }
            </div>
        }
    </div>
  )
}

export default BubbleSortVisualization 