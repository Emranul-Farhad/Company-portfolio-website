import React from 'react'
import Solutions from './Solutions'



const Designsolutions = () => {


 const logos = [
    {
        id : "1",
        title : "Ingfo Grapich",
        des : "orem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, beatae",
        src : 'https://graphicsolo.com/wp-content/uploads/2020/03/infographics.png'
    },
    {
        id : "2",
        title : "Illustrations & Icons",
        des : "orem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, beatae",
        src : 'https://graphicsolo.com/wp-content/uploads/2020/03/illustrations.png'
    },
    {
        id : "3",
        title : "Social Media Imagery",
        des : "orem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, beatae",
        src : 'https://graphicsolo.com/wp-content/uploads/2020/03/social-media.png'
    },
    {
        id : "4",
        title : "E-Books",
        des : "orem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, beatae",
        src : 'https://graphicsolo.com/wp-content/uploads/2020/03/ebooks.png'
    },
    {
        id : "5",
        title : "Reports & Whitepapers",
        des : "orem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, beatae",
        src : 'https://graphicsolo.com/wp-content/uploads/2020/03/reports.png'
    },
    {
        id : "6",
        title : "Logo Design",
        des : "orem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, beatae",
        src : 'https://graphicsolo.com/wp-content/uploads/2020/03/logo-design.png'
    },
    
 ]


  return (
    <div>
        <div className='mb-[50px]'>
        <p className='text-left px-6 container mx-auto
                '>
                    <span className='text-[#5e9e9f] font-extrabold uppercase text-[15px] '> grapich solution </span> <br /> 
                    <span className='text-4xl uppercase font-bold common' > that you will get from us </span>  </p>
        </div>
        {/* grapich servcices detials */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto px-6 lg:w-[1220px] gap-x-5 gap-y-7' >
            {
                logos.map(logo => <Solutions key={logo.id}  soldata={logo} ></Solutions>  )
            }
        </div>
    </div>
  )
}

export default Designsolutions