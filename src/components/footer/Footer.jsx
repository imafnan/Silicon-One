import { AiFillApple, AiFillYoutube } from "react-icons/ai"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { BsTwitter } from "react-icons/bs"; 
import { AiFillFacebook } from "react-icons/ai"; 
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <section className='Footer pb-[48px]'>
        <div className="container">
            <div className="image pb-[56px]">
                <img src="public/logo.png" alt=""  className='mx-auto'/>
            </div>
            <ul className='flex justify-center gap-[56px] pb-[64px] text-[16px] font-Manrope font-semibold'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/"}>Features</Link></li>
                <li><Link to={"/"}>Overview</Link></li>
                <li><Link to={"/"}>Blog</Link></li>
                <li><Link to={"/"}>Contact</Link></li>
                <li><Link to={"/"}>Account</Link></li>
            </ul>
            <div className="button flex gap-6 pb-[56px] justify-center">
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

            <div>
                <ul className="flex gap-4 justify-center pb-[72px] ">
                    <li><Link className="p-[14px] rounded-lg bg-[#EFF2FC] flex items-center" to={"/"}><AiFillFacebook /></Link></li>
                    <li><Link className="p-[14px] rounded-lg bg-[#EFF2FC] flex items-center"to={"/"}><BsTwitter /></Link></li>
                    <li><Link className="p-[14px] rounded-lg bg-[#EFF2FC] flex items-center"to={"/"}><AiFillInstagram /></Link></li>
                    <li><Link className="p-[14px] rounded-lg bg-[#EFF2FC] flex items-center" to={"/"}><AiFillYoutube /></Link></li>
                </ul>
            </div>
            <p className="w-[856px] text-[14px] font-Manrope font-normal text-[#9397AD] mx-auto text-center">2021. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>

        </div>
    </section>
    </>
  )
}

export default Footer