import React from "react";
import "./Review.css";
import Reviews from "./Reviews";
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




const Review = () => {

  const reviews = [
    {
      name: "jhon dow",
      src: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/user1.jpg",
      id : "1",
      qutes : " Worked withjust solutionson a project and he was highly Professional and also had things done in a timely manner. He has a Designes eye and is highly skilled and easy to work with."
    },
    {
      name: "jhon dow",
      src: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/user2.jpg",
      id : "2",
      qutes : " Worked withjust solutionson a project and he was highly Professional and also had things done in a timely manner. He has a Designes eye and is highly skilled and easy to work with."
    },
    {
      name: "jhon dow",
      src: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/user3.jpg",
      id : "3",
      qutes : " Worked withjust solutionson a project and he was highly Professional and also had things done in a timely manner. He has a Designes eye and is highly skilled and easy to work with."
    },
    {
      name: "jhon dow",
      src: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/user3.jpg",
      id : "4",
      qutes : " Worked withjust solutionson a project and he was highly Professional and also had things done in a timely manner. He has a Designes eye and is highly skilled and easy to work with."
    },
 
 

  ]


  return (
    <div>
      <div className="mb-[50px]">
        <p
          className="text-left px-6 container mx-auto
                "
        >
          <span className="text-[#5e9e9f] font-extrabold uppercase text-[15px] ">
            {" "}
            Review{" "}
          </span>{" "}
          <br />
          <span className="text-4xl uppercase font-bold common">
            what clients says{" "}
          </span>{" "}
        </p>
      </div>
      {/*  */}
       <div className="">
         
          <Swiper
          modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y]}
          slidesPerView={1}
          centeredslide="true"
          key={reviews.length}
          autoplay={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide className=" flex justify-center " key={index}>
              <Reviews revdata={review}></Reviews>
            </SwiperSlide>
          ))}
        </Swiper>
         
       </div>
    </div>
  );
};

export default Review;
