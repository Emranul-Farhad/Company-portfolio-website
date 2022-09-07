import React from 'react'
import  './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
         <section className='flex flex-row lg:flex-col px-3 '>
            <ul className='intro'>
                <li className='mt-2' >Intro</li>
                <li className='mt-2' >about</li>
                <li className='mt-2' >featured </li>
            </ul>
            <p className='mx-auto mt-[150px] lg:mt-[0px]  art uppercase text-center font-extrabold'>Just <br />
            <span>solu<span className='text-[#5e9e9f] '>t</span>ions</span> </p>
        </section>
        <p className='slogan font-extrabold text-[#5e9e9f] uppercase text-center'> marketing | Web development | grapich Design | Ar/vr </p>
    </div>
  )
}

export default Hero