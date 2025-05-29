import { BiRightArrowAlt } from "react-icons/bi"; 
import { MdOutlineCheckCircle } from "react-icons/md"; 
import React from 'react'
import v from '../../assets/img/video.png'
import "./Use.css"
const Use = () => {
  return (
    <>
    <section className='use'>
        <div className="container flex justify-between items-center">
            <div className="use_des py-[174px]">
                <h2>Simple & Easy to Use</h2>
                <p><MdOutlineCheckCircle size={20} className="text-[#6366F1]"/> Banking transactions are free for you</p>
                <p><MdOutlineCheckCircle size={20} className="text-[#6366F1]"/> Banking transactions are free for you</p>
                <p><MdOutlineCheckCircle size={20} className="text-[#6366F1]"/> Banking transactions are free for you</p>
                <p><MdOutlineCheckCircle size={20} className="text-[#6366F1]"/> Banking transactions are free for you</p>
                <p><MdOutlineCheckCircle size={20} className="text-[#6366F1]"/> Banking transactions are free for you</p>
                <button>Learn more <BiRightArrowAlt size={20}/></button>
            </div>
            
            <div className="use_img">
                <img src={v} alt="" className="w-[746px] h-[460px] bg-slate-500 rounded-md"/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Use