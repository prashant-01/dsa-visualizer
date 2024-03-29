import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useSort from '../hooks/useSort';
import { setArray } from '../redux/slices/arraySlice';
import { setAlgorithm } from '../redux/slices/algorithmSlice';
import useArray from '../hooks/useArray';

const InsertionSortVisualization = () => {
    const dispatch = useDispatch();
    const { algorithmType } = useSelector( store => store.algorithm );
    const { inputArray } = useSelector( store => store.array );
    const { timeOutId } = useSelector( store => store.bubble );

    const { 
        currentElement ,
        toInsert ,
        currentComparison ,
        toShift ,
        inserted ,
        sortedInsertion
    } = useSelector( store => store.insertion );

    const array_size = 10;
    useEffect( () => {
        useArray(array_size , dispatch , timeOutId);
        return () => dispatch(setArray([]));
    } , [])

    const sortFunction = useSort(algorithmType);
  return (
    <div className='bg-yellow-400 h-screen'>
        <p className='text-3xl'>Insertion Sort Visualization</p>
        <button onClick={ () => {
            console.log('clicked algo');
            dispatch(setAlgorithm("insertion"));
        } }
        className='border px-4 py-2 rounded-md border-black'>Insertion Sort</button>
        <button onClick={ () => sortFunction( inputArray , dispatch ) } 
        className='border px-4 py-2 rounded-md border-black'>Sort</button>
        <button onClick={ () => useArray(array_size , dispatch , timeOutId) }
        className='border px-4 py-2 rounded-md border-black'>New Array</button>
        <div className='flex gap-2 items-center justify-center h-[80%]'>
            {
                inputArray.length > 0 && 
                inputArray.map((value , index) => (
                    <div key={index} 
                    className={`p-4 rounded-md text-white bg-black 
                    ${ currentElement === index ? 'bg-blue-500' : 'bg-black' }
                    ${ toInsert === index && 'translate-y-[50px]' }
                    ${ toShift === index && 'translate-x-[30px]' }
                    ${ inserted === index && '-translate-x-[40px]' }
                    ${ sortedInsertion.includes(index) ? 'bg-green-500' : 'bg-black' } `}>
                        { value }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default InsertionSortVisualization