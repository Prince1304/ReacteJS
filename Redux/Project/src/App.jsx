import { useState } from 'react'
import {pexels_api} from './API/api';

function App() {
  return (
    <div>
      <h1>Testing my API Key:</h1>
      <p>{pexels_api}</p> 
    </div>
  )
}

export default App
