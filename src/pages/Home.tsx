import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Accessibility from '../components/Accessibility'
import Product from '../components/Product'
import Pricing from '../components/Pricing'

const Home:React.FC = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Accessibility/>
        <Product/>
        <Pricing/>
    </>
  )
}

export default Home