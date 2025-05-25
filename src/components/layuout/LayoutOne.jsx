import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const LayoutOne = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default LayoutOne