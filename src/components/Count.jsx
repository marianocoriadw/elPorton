import React from 'react'



function Count({count, restar, incrementar}) {



  return (
    <>
    {/* Contador */}
    <div className='text-center text-xl lg:text-2xl pt-5 pb-5'>
        <button className='px-3 pb-1 bg-[#eed763] rounded font-bold' onClick={restar}>-</button>
        <strong className='px-2'>{count}</strong>
        <button className='px-2 pb-1 bg-[#eed763] rounded font-bold' onClick={incrementar}>+</button>
     </div>
    </>
  )
}

export default Count
