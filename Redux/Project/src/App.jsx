import { useState } from 'react'
import {pexels_api} from './API/api';

function App() {
  const respo = async ()=>{
    let data = await fetch('https://api.pexels.com/v1/curated',
      {params:('car',2,10)},
      {Authentication:`User ${pexels_api}`}
    )
    console.log(data);
  }
  respo()
}

export default App
