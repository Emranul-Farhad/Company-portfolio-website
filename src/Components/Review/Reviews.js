import React from 'react'

const Reviews = ({revdata}) => {

    const {qutes, src ,name } = revdata


  return (
    <div>
        <div>
        <div class="review-card">
          <div class="img">
            <img src={src} />
          </div>
          <div class="infos">
            <div class="name text-left">
              <h2 className='uppercase text-[#5e9e9f] font-extrabold ' >{name} </h2>
              <h4>@{name} </h4>
            </div>
            <p class="text text-left">
             {qutes}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews