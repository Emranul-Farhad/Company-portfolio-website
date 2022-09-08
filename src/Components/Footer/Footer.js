import React from 'react'
import { FaDiscord, FaFacebook, FaTelegramPlane } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='mt-[70px] bg-[#5e9e9f]' >
        <footer className="">
			<div className="flex flex-col lg:flex-row justify-between container mx-auto px-6  py-12  ">
				<div className="flex flex-col items-start w-1/2 box-border">
					<p>
						<span className="text-3xl common font-extrabold text-black">
							all solutions{" "}
						</span>
						&copy; {new Date().getFullYear()}
					</p>
					<p className="text-sm text-white mt-4 text-start">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Libero ducimus amet placeat cumque reiciendis!
						Laboriosam nam esse perferendis et quam, facere ducimus
						saepe, repellat quaerat sit, incidunt sint reiciendis
						maxime! Distinctio nam at numquam itaque fugit optio
						magni, recusandae accusamus deserunt ipsam non? Odio
						adipisci earum ab quos nesciunt amet!
					</p>
					<div className="mt-5 flex items-center justify-start">
						<a className='' href="https://facebook.com" target={"_blank"}>
							<FaFacebook className=" mr-4 text-xl text-white" />
						</a>
						<a href="https://telegram.com" target={"_blank"}>
							<FaTelegramPlane className="mr-4 text-xl text-white" />
						</a>
						<a href="https://telegram.com" target={"_blank"}>
							<FaDiscord className="mr-4 text-xl text-white" />
						</a>
					</div>
				</div>
				<div className="flex flex-col items-start  mt-16 lg:mt-0  ">
					<h3 className="text-xl common text-black font-extrabold">
						Contact Us
					</h3>
					<p className="text-sm text-white mt-4">
						Email:
						<a href="mailto:samiulbasirfahim360@gmail.com">
							Emranulfarhad@gmail@gmail.com
						</a>
					</p>
					<p className="text-sm text-white mt-4">
						Email:
						<a href="mailto:samiulbasirfahim360@gmail.com">
							Emranulfarhad@gmail@gmail
						</a>
					</p>
					<p className="text-sm text-white mt-4">
						phone: <a href="tel:+8801755555555">+8801867029836</a>
					</p>
					<p className="text-sm text-white mt-4">
						phone: <a href="tel:+8801755555555">+8801880084176</a>
					</p>
				</div>
			</div>
		</footer>
        <p className='mt-[50px]'>all &copy; right reserved by emranul farhad emon</p>
    </div>
  )
}

export default Footer