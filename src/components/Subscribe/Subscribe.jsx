import { FiMail } from "react-icons/fi"; 
import React from 'react'
import { Link } from 'react-router-dom'

const Subscribe = () => {
  return (
    <>
    <section className='Subscribe bg-[#F3F6FF] mb-[56px]'>
        <div className="container flex justify-around">
            <div className="Subscribe_left ">
                <div className='w-[526px] flex gap-[32px] items-center py-[72px]'>
                    <img src="public/notification.png" alt="" />
                    <h2 className='w-[416px] font-Manrope font-extrabold text-[24px] text-[#131022]'>Subscribe to our newsletter to stay informed about latest updates</h2>
                </div>
            </div>

            <div className="Subscribe_right">
                <div className='py-[85px] w-[456px] flex relative '>
                
                    <input  type="text"  placeholder='Your email' className='w-[456px] py-[13px] px-10 rounded-s-[8px] '>
                    </input>
                    <FiMail className="absolute top-[102px] left-[15px] text-[#B4B7C9]"/>
                    <Link className='w-[160px] py-[13px] px-[32px] text-[14px] font-Manrope font-semibold text-white bg-[#6366F1] rounded-r-[8px]'>Subscribe</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Subscribe