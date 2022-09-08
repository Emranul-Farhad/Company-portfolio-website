import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Zoom,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Designservices from "./Designservices";

const Designservice = () => {
  const grapichs = [
    {
      src: "https://marketifythemes.net/html/kura/img/portfolio/3.jpg",
    },
    {
      src: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/blog6-380x330.jpg",
    },
    {
      src: "https://marketifythemes.net/html/kura/img/portfolio/1.jpg",
    },
    {
      src: "https://marketifythemes.net/html/kura/img/portfolio/4.jpg",
    },
    {
      src: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/blog5-380x330.jpg",
    },
    {
      src: "https://marketifythemes.net/html/kura/img/portfolio/5.jpg",
      title: "",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-6 mb-[25px]">
        <p
          className="text-left 
                "
        >
          <span className="text-[#5e9e9f] font-extrabold uppercase text-[15px] ">
            {" "}
            design{" "}
          </span>{" "}
          <br />
          <span className="text-4xl uppercase font-bold common">
            solutions
          </span>{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:gap-x-12 gap-y-10 mx-auto container px-6 ">
        <div className="">
          <img
            className=""
            src="https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/project4.jpg"
            alt=""
          />
          <div className="container mx-auto px-6">
            {" "}
            <p className="text-left mb-[40px] uppercase font-extrabold text-[#5e9e9f]">
              {" "}
              Illustrator design{" "}
            </p>{" "}
          </div>
        </div>

        <div className=" ">
          <img
            src="https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/project5.jpg"
            alt=""
          />
          <div className="container mx-auto px-6">
            {" "}
            <p className="text-left mb-[40px] uppercase font-extrabold text-[#5e9e9f]">
              {" "}
              Ui/Ux Design{" "}
            </p>{" "}
          </div>
        </div>
      </div>

      <div className="text-left mb-[30px] mt-[50px] container mx-auto px-6">
        <p className="text-left ">
          <span className="text-[#5e9e9f] font-extrabold uppercase text-[15px] ">
            latest work
          </span>
          <br />
          <span className="text-4xl uppercase font-bold common">
            for our cliens
          </span>
        </p>
      </div>

      {/* grapich photto design  detilas here */}
      <div className=" px-6 container mx-auto mt-[50px]">
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          centeredslide="true"
          key={grapichs.length}
          autoplay={true}
        >
          {grapichs.map((image, index) => (
            <SwiperSlide key={index}>
              <Designservices seri={image}></Designservices>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ullam.
        </p>
      </div>
    </div>
  );
};

export default Designservice;
