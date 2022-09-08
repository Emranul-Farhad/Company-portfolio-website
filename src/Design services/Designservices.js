import React from 'react'



const Designservices = ({seri}) => {

  const {src} = seri

  return (
    <div className='mx-auto'>
        <div>
          <img className="h-[377px] w-[336px] object-cover" src={src} alt="" />
        </div>
    </div>
  )
}

export default Designservices