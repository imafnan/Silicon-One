import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ip from  '../../assets/img/iPhone 12 Pro.png'
import ip1 from '../../assets/img/iPhone 12 Pro1.png'
import ip2 from '../../assets/img/iPhone 12 Pro2.png'
import "./Work.css"
const Work = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <section className='work bg-[#F3F6FF] pt-[80px] pb-[96px]'>
        <div className="container ">
            <h2 className='text-center font-extrabold font-Manrope text-[40px] pb-[48px]'>How Does It Work?</h2>
              <div className="slider-container mx-auto pb-[44px]">
                <Slider {...settings} className='slider '>
                    <div>
                      <img src={ip} alt="" />
                    </div>
                    <div>
                      <img src={ip1} alt="" />
                    </div>
                    <div>
                      <img src={ip2} alt="" />
                    </div>
                    
                </Slider>
              </div>

              <div className='text-center'>
                <h2 className='font-Manrope font-extrabold text-[24px] text-[#131022]'>Step 2. Latest transaction history</h2>
                <p className='w-[636px] mx-auto text-[#585C7B] font-Manrope font-normal'>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
              </div>
        </div>
        {/* ======= */}
     </section>
    </>
  )
}

export default Work