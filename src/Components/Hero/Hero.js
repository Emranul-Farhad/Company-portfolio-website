import React from 'react'
import  './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
         <section className=' mt-5 flex flex-row lg:flex-col '>
            <ul className='intro'>
                <li className='mt-2' >Intro</li>
                <li className='mt-2' >about</li>
                <li className='mt-2' >featured </li>
            </ul>
            <p className='mt-[150px] lg:mt-[0px]  art uppercase text-center font-extrabold'> Just 
            technolo </p>
           
            {/* <div>
               
            </div> */}
        </section>
    </div>
  )
}

export default Hero