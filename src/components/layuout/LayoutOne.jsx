import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

const LayOutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default LayOutOne