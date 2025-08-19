import React from 'react'
import Hero from './Hero'
import Collections from './Collections'
import Products from './Products'
import CoreFlexxProducts from './Products'
import WhyChoose from './WhyChoose'
import LocateDealer from './LocateDealer'
import Inspirations from './Inspirations'
import About from './About'
import Faqs from './Faqs'

const Wallexx = () => {
  return (
    <div className='overflow-x-hidden'>
        <Hero/>
        <Collections/>
        <CoreFlexxProducts/>
        <WhyChoose/>
        <LocateDealer/>
        <Inspirations/>
        <About/>
        <Faqs/>
    </div>
  )
}

export default Wallexx