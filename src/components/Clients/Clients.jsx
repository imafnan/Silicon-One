import { FaRegStar } from "react-icons/fa"; 
import { BsStarFill } from "react-icons/bs"; 
import Slider from "react-slick";
import React from 'react'  
import "./Clients.css"

const Clients = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <section className='Client'>
        <div className="container">
            <h2 className=" text-[40px] font-extrabold font-Manrope text-center ">
            Clients are Loving Our App
            </h2>
{/* ============================================== */}
<div className="slider-container ml-auto">
      <Slider {...settings}>
        <div>
        <div className="pb-[48px]">
            <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[306px] h-[258px] mt-[48px] pt-[48px] pb-[54px] px-[24px] rounded-md '>
              <p className='w-[258px] h-[156px]  text-[16px] font-Manrope font-normal'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              <span className="flex gap-1 text-[#FFBA08]"><BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
              </span>
            </div>
            <div className="w-[258px]  flex gap-4 pt-[24px] mx-[24px] ">
              <img src="public/client.png" alt="" />
              <div>
                <h2 className="font-Manrope font-bold text-[#131022] text-[14px]">Fannie Summers</h2>
                <p className="font-Manrope font-normal text-[#9397AD] text-[12px]">Designer</p>
              </div>
            </div>
            </div>
        </div>

        <div>
        <div className="pb-[48px]">
            <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[306px] h-[258px] mt-[48px] pt-[48px] pb-[54px] px-[24px] rounded-md '>
              <p className='w-[258px] h-[156px]  text-[16px] font-Manrope font-normal'>Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>
              <span className="flex gap-1 text-[#FFBA08]"><BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
              </span>
            </div>
            <div className="w-[258px]  flex gap-4 pt-[24px] mx-[24px] ">
              <img src="public/client.png" alt="" />
              <div>
                <h2 className="font-Manrope font-bold text-[#131022] text-[14px]">Wade Warren</h2>
                <p className="font-Manrope font-normal text-[#9397AD] text-[12px]">QA Engineer</p>
              </div>
            </div>
            </div>
        </div>

        <div>
        <div className="pb-[48px]">
            <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[306px] h-[258px] mt-[48px] pt-[48px] pb-[54px] px-[24px] rounded-md '>
              <p className='w-[258px] h-[156px]  text-[16px] font-Manrope font-normal'>Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.</p>
              <span className="flex gap-1 text-[#FFBA08]"><BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <FaRegStar className="text-slate-500"/>
                     <FaRegStar className="text-slate-500"/>
              </span>
            </div>
            <div className="w-[258px]  flex gap-4 pt-[24px] mx-[24px] ">
              <img src="public/client.png" alt="" />
              <div>
                <h2 className="font-Manrope font-bold text-[#131022] text-[14px]">FAnnette Black</h2>
                <p className="font-Manrope font-normal text-[#9397AD] text-[12px]">Manager</p>
              </div>
            </div>
            </div>

        </div>

        <div>
        <div className="pb-[48px]">
            <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[306px] h-[258px] mt-[48px] pt-[48px] pb-[54px] px-[24px] rounded-md '>
              <p className='w-[258px] h-[156px]  text-[16px] font-Manrope font-normal'>Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Pellentesque vitae mattis aliquet velit arcu risus..</p>
              <span className="flex gap-1 text-[#FFBA08]"><BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
              </span>
            </div>
            <div className="w-[258px]  flex gap-4 pt-[24px] mx-[24px] ">
              <img src="public/client.png" alt="" />
              <div>
                <h2 className="font-Manrope font-bold text-[#131022] text-[14px]">Robert Fox</h2>
                <p className="font-Manrope font-normal text-[#9397AD] text-[12px]">PR-Director</p>
              </div>
            </div>
            </div>
        </div>

        
        
      </Slider>
    </div>



            {/* <span className="flex justify-center items-center gap-6">

            <div className="pb-[48px]">
            <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[306px] h-[258px] pt-[48px] pb-[54px] px-[24px] rounded-md '>
              <p className='w-[258px] h-[156px]  text-[16px] font-Manrope font-normal'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
              <span className="flex gap-1 text-[#FFBA08]"><BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
              </span>
            </div>
            <div className="w-[258px]  flex gap-4 pt-[24px] mx-[24px] ">
              <img src="public/client.png" alt="" />
              <div>
                <h2 className="font-Manrope font-bold text-[#131022] text-[14px]">Fannie Summers</h2>
                <p className="font-Manrope font-normal text-[#9397AD] text-[12px]">Designer</p>
              </div>
            </div>
            </div>



            <div className="pb-[48px]">
            <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[306px] h-[258px] pt-[48px] pb-[54px] px-[24px] rounded-md '>
              <p className='w-[258px] h-[156px]  text-[16px] font-Manrope font-normal'>Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>
              <span className="flex gap-1 text-[#FFBA08]"><BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
              </span>
            </div>
            <div className="w-[258px]  flex gap-4 pt-[24px] mx-[24px] ">
              <img src="public/client.png" alt="" />
              <div>
                <h2 className="font-Manrope font-bold text-[#131022] text-[14px]">Wade Warren</h2>
                <p className="font-Manrope font-normal text-[#9397AD] text-[12px]">QA Engineer</p>
              </div>
            </div>
            </div>


            <div className="pb-[48px]">
            <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[306px] h-[258px] pt-[48px] pb-[54px] px-[24px] rounded-md '>
              <p className='w-[258px] h-[156px]  text-[16px] font-Manrope font-normal'>Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.</p>
              <span className="flex gap-1 text-[#FFBA08]"><BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <FaRegStar className="text-slate-500"/>
                     <FaRegStar className="text-slate-500"/>
              </span>
            </div>
            <div className="w-[258px]  flex gap-4 pt-[24px] mx-[24px] ">
              <img src="public/client.png" alt="" />
              <div>
                <h2 className="font-Manrope font-bold text-[#131022] text-[14px]">FAnnette Black</h2>
                <p className="font-Manrope font-normal text-[#9397AD] text-[12px]">Manager</p>
              </div>
            </div>
            </div>

            <div className="pb-[48px]">
            <div className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[306px] h-[258px] pt-[48px] pb-[54px] px-[24px] rounded-md '>
              <p className='w-[258px] h-[156px]  text-[16px] font-Manrope font-normal'>Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Pellentesque vitae mattis aliquet velit arcu risus..</p>
              <span className="flex gap-1 text-[#FFBA08]"><BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
                     <BsStarFill />
              </span>
            </div>
            <div className="w-[258px]  flex gap-4 pt-[24px] mx-[24px] ">
              <img src="public/client.png" alt="" />
              <div>
                <h2 className="font-Manrope font-bold text-[#131022] text-[14px]">Robert Fox</h2>
                <p className="font-Manrope font-normal text-[#9397AD] text-[12px]">PR-Director</p>
              </div>
            </div>
            </div>
            </span> */}

        </div>
        
    </section>
    </>
  )
}

export default Clients