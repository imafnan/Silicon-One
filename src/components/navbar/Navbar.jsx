import { RxPerson } from "react-icons/rx"; 
import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import lg from '../../assets/img/logo.png'
const Navbar = () => {
  return (
    <>
    <nav className="navbar py-[16px]">
        <div className="container flex justify-between">
            {/* left  side*/}
        <div className="nav_left flex items-center gap-[48px]">
            <img src={lg} alt="logo" />
            <ul className="flex gap-[24px] text-[#3E4265] font-semibold text-[16px]">
                <li><Link href="#">Features</Link></li>
                <li><Link href="#">Overview</Link></li>
                <li><Link href="#">Store</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>
        </div>



        {/* right side */}
        <div className="nev_right flex items-center">
           <div className="flex gap-2 mr-[32px] text-[16px] font-semibold text-[#585C7B]">
                <li><Link href="#">light</Link></li>
                <li><Link href="#">dark</Link></li>
           </div>
            <div className='button'>
                <RxPerson />
                <button> Sign in</button>
            </div>
        </div>
           
        </div>
    </nav>
    </>
  )
}

export default Navbar