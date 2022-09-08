import React from "react";

import {
  BsLaptop,
  BsFillDropletFill,
  BsBrushFill,
  BsTelegram,
  BsCloudDownloadFill,
} from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { DiCss3Full } from "react-icons/di";
import { ImLifebuoy } from "react-icons/im";
import Servicedetials from "./Servicedetials";

const Service = () => {
  const icons = [
    {
      id: "FaLeaf",
      icon: <FaLeaf></FaLeaf>,
      title: "High quality theme",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur",
    },
    {
      id: "BsLaptopl",
      icon: <BsLaptop></BsLaptop>,
      title: "Full responsive",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur ",
    },
    {
      id: "BsFillDropletFill",
      icon: <BsFillDropletFill></BsFillDropletFill>,
      title: "Retina Display Ready",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatu",
    },
    {
      id: "BsBrushFill",
      icon: <BsBrushFill></BsBrushFill>,
      title: "Clean Modern Code",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatu",
    },
    {
      id: "BsTelegram",
      icon: <BsTelegram></BsTelegram>,
      title: "Fast & Light Theme",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatu",
    },
    {
      id: "DiCss3Full",
      icon: <DiCss3Full></DiCss3Full>,
      title: "Css3 Transitions",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatu",
    },
    {
      id: " BsCloudDownloadFill",
      icon: <BsCloudDownloadFill></BsCloudDownloadFill>,
      title: "Free Updates",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatu",
    },
    {
      id: "ImLifebuoy",
      icon: <ImLifebuoy></ImLifebuoy>,
      title: "Help & Support",
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatu",
    },
  ];

  return (
    <div>
      <div className="">
        <p className='text-left px-6 container mx-auto uppercase' > <span className="text-[#5e9e9f] text-3xl font-extrabold ">services </span> <br />
        <span className="font-bold text-[14px] common" >that you will get from us</span></p>

        <div className='mt-[90px] grid grid-row md:grid-cols-3 lg:grid-cols-4 mx-auto container px-6 gap-6 gap-y-10' >
          {icons.map((ico) => (
            <Servicedetials key={ico.id} serd={ico}></Servicedetials>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Service;
