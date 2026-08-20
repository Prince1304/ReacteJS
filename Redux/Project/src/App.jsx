import { useState } from 'react'
import {pexels_api} from './API/api';
import axios from 'axios';

function App() {
  const respo = async ()=>{
    let data = await axios.get('https://api.pexels.com/v1/search', {
      // Axios lets us pass the query parameters cleanly as an object
      params: {
        query: 'car',
        per_page: 10,
        page: 2
      },
      headers: {
        Authorization: pexels_api
      }
    })
    console.log(data);
  }
  respo()
}

export default App
