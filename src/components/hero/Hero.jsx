import { RiArrowDownSLine } from "react-icons/ri"; 
import { AiFillApple } from "react-icons/ai"; 
import React from 'react'
import "./Hero.css"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <section className='Hero'>
        <div className="container flex">
            <div className="h-left">
                <h1>Manage All Your Money in One App</h1>
                <p>We offer you a new generation of the mobile banking.
                   Save, spend & manage money in your pocket.
                </p>
                {/* button */}
                <div className="button flex gap-6 pt-[48px]">
                    <div className="flex items-center gap-[10px] py-[5px] px-[20px] rounded-lg bg-[#131022] w-[180px]">
                        <div className="text-[50px] flex items-center justify-center text-white "><AiFillApple /></div>
                        <Link to={"#"}><span className="text-[10px] text-white">Download on the</span> <br /><span className="text-[17px] font-bold text-white">App Store</span></Link>
                    </div>
                    <div className="flex items-center gap-[10px] py-[5px] px-[20px] rounded-lg bg-[#131022] w-[180px]">
                        <div className="text-[50px] flex items-center justify-center text-white ">
                            <img src="public/playStore.png" alt="" />
                        </div>
                        <Link to={"#"}><span className="text-[10px] text-white">Download on the</span> <br /><span className="text-[17px] font-bold text-white">App Store</span></Link>
                    </div>
                </div>
                {/* ======== */}

                <div className="flex items-center gap-[16px] pt-[194px]">
                    <div className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"><RiArrowDownSLine size={25} /></div>
                    <Link to={"#"}>Discover more</Link>
                </div>

            </div>

            <div className="h-right ">
                <img src="public/phone.png" alt="image"/>
            </div>
        </div>

    </section>
    </>
  )
}

export default Hero