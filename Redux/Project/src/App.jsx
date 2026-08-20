import { useState } from 'react'
import {pexels_api} from './API/api';

function App() {
  return (
    <div>
      <h1>Testing my API Key:</h1>
      <p>{!pexels_api?'Api Not Comming':'Api Come'}</p> 
    </div>
  )
}

export default App
