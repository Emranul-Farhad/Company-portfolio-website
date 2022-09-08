import React from 'react'
import Hero from '../Components/Hero/Hero'
import Service from '../Components/SerrviceProvides/Service'

import Web from '../Components/WebDemo/Web'



const Pages = () => {
  return (
    <div>
       <Hero></Hero>
       {/*  */}
       <div className='mt-[150px]'>
        <Web></Web>
       </div>
       {/*  */}
       <div className='mt-[150px]'>
        <Service></Service>
       </div>

    </div>
  )
}

export default Pages