import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Redux/Features/counter';
import Counter from './Counter';

const App = () => {
  return(
    <Counter />
  )
}

export default App