import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Accessibility from '../components/Accessibility'
import Product from '../components/Product'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home:React.FC = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Accessibility/>
        <Product/>
        <Pricing/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home