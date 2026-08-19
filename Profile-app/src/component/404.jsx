import React from 'react'
import video from '../404.mp4';

const NF = () => {
  return (
    <div id='content'>
        <video src={video} width={600} height={500} autoPlay loop />
    </div>
  )
}

export default NF