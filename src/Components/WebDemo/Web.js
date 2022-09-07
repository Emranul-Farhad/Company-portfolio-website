import React from 'react'
import Webdetails from './Webdetails'


const Web = () => {


  const web =[

    {
      src: "https://preview.envytheme.com/gunter-wp/img/light-home-four-with-slider.jpg",
      title: "Digital agency",
      id: "3"
    },
  {
    src: "https://preview.envytheme.com/gunter-wp/img/dark-home-eight.jpg",
    title: "startup",
    id: "6"
  },
  {
    src: "https://preview.envytheme.com/gunter-wp/img/about.jpg",
    title: "School",
    id: "1"
  },
  {
    src: "https://preview.envytheme.com/gunter-wp/img/dark-home-five-with-slider.jpg",
    title: "Digital marketing",
    id: "4"
  },
  {
    src: "https://preview.envytheme.com/gunter-wp/img/home-nine.jpg",
    title: "Digital marketing",
    id: "2"
  },
  {
    src: "https://preview.envytheme.com/gunter-wp/img/dark-home-nine.jpg",
    title: "Seo agency ",
    id: "5"
  }
  

  ]

  return (
    <div>
        <div>
            <div>
                <p className='text-left px-6 container mx-auto
                '>
                    <span className='text-[#5e9e9f] font-extrabold uppercase text-[15px] '>Portfolio</span> <br /> 
                    <span className='text-4xl uppercase font-bold common' >web solutions</span>  </p>
            </div>
            {/*  */}

          <div className='container px-6 mt-[100px] grid grid-row md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 gap-y-10'>
          {
                web.map(webs => <Webdetails key={webs.id}
                  data={webs}  ></Webdetails> )
         }
          </div>

        </div>
    </div>
  )
}

export default Web