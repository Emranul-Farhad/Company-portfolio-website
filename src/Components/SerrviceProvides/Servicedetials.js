import React from 'react'


const Servicedetials = ({serd}) => {

  const {des, title, icon} = serd


  return (
    <div className='mx-auto container px-6'>
        <div className='box-border  '>
            <p className=' flex justify-center text-center text-4xl hover:text-[#5e9e9f] ease-in-out '> {icon} </p>
            <div>
            <p className='mt-3 uppercase font-extrabold text-[#5e9e9f]' > {title} </p>
            <p className='mt-3' >{des} </p>
            </div>
        </div>
    </div>
  )
}

export default Servicedetials