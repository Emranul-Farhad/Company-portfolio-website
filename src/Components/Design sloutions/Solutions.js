import React from 'react'
import './Solutions.css'


const Solutions = ({soldata}) => {
 
    const {src , title , des} = soldata

  return (
    <div>
        <div className='so-card mx-auto container px-6 mt-[20px]'>
        <div className='box-border w-[299px] h-[278px] pt-[40px]'>
                 <div className='so-card-img flex justify-center '>
                    <img src={src} alt="" />
                 </div>
                <div className='box-border'>
                <p className='mt-3 font-extrabold uppercase text-[#5e9e9f]' > {title} </p>
                <p className='mt-3' >{des} </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Solutions