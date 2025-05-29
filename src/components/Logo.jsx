import React from 'react'
// import l1 from '../../src/assets/img/'
import l2 from '../../src/assets/img/logo2.png'
import l3 from '../../src/assets/img/logo3.png'
import l4 from '../../src/assets/img/logo4.png'
import l5 from '../../src/assets/img/logo5.png'
import l6 from '../../src/assets/img/logo6.png'

const Logo = () => {
  return (
    <>
    <section className='logo pb-[112px]'>
        <div className="container flex gap-[20px] ">
            <img src={l2} alt="" />
            <img src={l3} alt="" />
            <img src={l4} alt="" />
            <img src={l5} alt="" />
            <img src={l6} alt="" />
        </div>
    </section>
    </>
  )
}

export default Logo