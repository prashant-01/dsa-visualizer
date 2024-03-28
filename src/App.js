import React from 'react'
import BubbleSortVisualization from './components/BubbleSortVisualization ';

const App = () => {
  const initialArray = [6, 3, 8, 2, 5, 1, 7, 4]; // Example array
  return (
    <div>
      <BubbleSortVisualization />
    </div>
  );
}

export default App