import React from "react";
import {
  BsFacebook,
  BsTelephoneFill,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import './Contact.css'



const Contact = () => {
  return (
    <div>
      <div>
        <p
          className="text-left px-6 container mx-auto
                "
        >
          <span className="text-[#5e9e9f] font-extrabold uppercase text-[15px] ">
            want to work
          </span>{" "}
          <br />
          <span className="text-4xl uppercase font-bold common">
            with our team ?
          </span>{" "}
        </p>
      </div>

  {/* contact div */}

    <div>
    <div className='mt-[50px]'>
            
            <div className='flex  justify-around items-center-center'>
                <div className=''>
                    <div className=''>
                        
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <ImLocation2></ImLocation2>  </p>
                            <h6 className=' font-bold'> Bondor,Chittagong,Bangladesh </h6>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <BsTelephoneFill></BsTelephoneFill>  </p>
                            <h6 className=' font-bold'> 01880084176 </h6>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <MdEmail></MdEmail> </p>
                            <h6 className=' font-bold'> Emranulfarhad@gmail.com </h6>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <BsLinkedin></BsLinkedin>  </p>
                            <a className='hover:text-[#07D3D3]' href="https://www.linkedin.com/in/yeasmin-akter-704411206/">
                                <h6 className=' font-bold'> Emranul Farhad  </h6>
                            </a>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <BsFacebook></BsFacebook> </p>
                            <a className='hover:text-[#07D3D3]' href="https://www.facebook.com/emranul.farhad">
                                <h6 className=' font-bold'> Emranul Farhad  </h6>
                            </a>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <BsGithub></BsGithub> </p>
                            <a className='hover:text-[#07D3D3]' href="https://github.com/Emranul-Farhad">
                                <h6 className=' font-bold'> Emranul Farhad  </h6>
                            </a>
                        </div>

                    </div>
                </div>
                {/* contact form */}
                <div className=" flex flex-col gap-y-10">
                    <input    className="cont-input" type="text" placeholder="name" />
                    <input    className="cont-input"  type="text" placeholder="name" />
                    <textarea className="cont-input"   name="" id="" cols="10" rows="5"></textarea>
                    <button className=" font-extrabold bg-[#5e9e9f] p-[10px] rounded-lg" > Submit </button>
                </div>
                
            </div>
        </div>
    </div>

    </div>
  );
};

export default Contact;
