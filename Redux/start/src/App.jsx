import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const App = () => {
  export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(decrement())}>- Decrement</button>
        <button onClick={() => dispatch(increment())} style={{ marginLeft: '10px' }}>
          + Increment
        </button>
      </div>
    );
  }
}

export default App