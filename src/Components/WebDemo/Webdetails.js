import React from 'react'
import './Web.css'


const Webdetails = ({data}) => {
  const {src, title} = data

  return (
    <div>
      <div className=''>       
          <p className='title mb-2 mt-2 p-2 text-left common text-[#5e9e9f] font-extrabold uppercase' > {title} </p>
        <div className='box-hover'>
          <img className='webdi' src={src} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Webdetails