import React from 'react'
import Hero from '../Components/Hero/Hero'
import Web from '../Components/WebDemo/Web'



const Pages = () => {
  return (
    <div>
       <Hero></Hero>
       <div className='mt-[150px]'>
        <Web></Web>
       </div>
    </div>
  )
}

export default Pages