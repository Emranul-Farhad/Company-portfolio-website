import React from 'react'
import Designsolutions from '../Components/Design sloutions/Designsolutions'
import Hero from '../Components/Hero/Hero'
import Review from '../Components/Review/Review'
import Service from '../Components/SerrviceProvides/Service'

import Web from '../Components/WebDemo/Web'
import Designservice from '../Design services/Designservice'




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
       {/*  */}
       <div className='mt-[150px]'>
        <Designservice></Designservice>
       </div>
       <div className='mt-[120px]'>
        <Designsolutions></Designsolutions>
       </div>
       {/*  */}
       <div className='mt-[150px]' >
        <Review></Review>
       </div>
    </div>
  )
}

export default Pages