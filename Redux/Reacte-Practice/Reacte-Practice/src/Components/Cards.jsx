import React from 'react'

const Cards = (props) => {
    const {user} = props;
  return (
    props.map((item)=>{
        <div className="w-50 h-100 ">
            <div className='w-10 h-70 ml-20 bg-amber-300 pt-70'>
                <h1 className='w-70 h-5 relative left-[-125px] top-[-200px] font-bold t-rose-500 rotate-270'>P R I N T F</h1>
                <h1 className='w-70 h-5 relative left-[-125px] top-[-320px] t-rose-500 font-bold rotate-270'>T E C H</h1>
            </div>
            <div className="w-10 h-10 rounded-b-full mb-[-20px] ml-20 border-t-10 border-b-5 border-amber-100 border-10"></div>
            <div className="w-10 h-10 rounded-t-full ml-20 border-t-5 border-b-0 border-amber-100 border-10"></div>
            <div className="container bg-amber-100 w-50 h-70 p-2 rounded-3xl">
                <div className='container bg-amber-400 w-full h-full rounded-2xl card-body'>
                    <div className="w-42 mt-2 ml-2 absolute rounded-md h-62 bg-amber-950">
                        <img src={item.img} className='rounded-xl w-full h-full'></img>
                        <div id="card-text" className='absolute top-20 w-full h-42 overflow-hidden'>
                            <h1 className='mt-20 text-amber-50 ml-2 text-lg font-bold'>{item.name}</h1>
                            <h6 className='font-bold text-white text-sm ml-2'>{item.role}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    })
  )
}

export default Cards