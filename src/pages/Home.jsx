import React from 'react'
import Clients from '../components/Clients/Clients'
import Use from '../components/uses/Use'
import Work from '../components/work/Work'
import Features from '../components/features/Features'
import Logo from '../components/Logo'
import Hero from '../components/hero/Hero'
import Faq from '../components/FAQ/Faq'
import Subscribe from '../components/Subscribe/Subscribe'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Logo/>
    <Features/>
    <Work/>
    <Use/>
    <Clients/>
    <Faq/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default Home