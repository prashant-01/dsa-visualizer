import React from 'react'
import BubbleSortVisualization from './components/BubbleSortVisualization ';
import InsertionSortVisualization from './components/InsertionSortVisualization';

const App = () => {
  const initialArray = [6, 3, 8, 2, 5, 1, 7, 4]; // Example array
  return (
    <div>
      {/* <BubbleSortVisualization /> */}
      <InsertionSortVisualization/>
    </div>
  );
}

export default App