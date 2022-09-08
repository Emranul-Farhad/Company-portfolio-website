import React from 'react'



const Designservices = ({seri}) => {
  const {src} = seri
  
  return (
    <div className='mx-auto container px-6'>
        <div>
          <img className="h-[377px] w-[336px] object-cover" src={src} alt="" />
        </div>
    </div>
  )
}

export default Designservices