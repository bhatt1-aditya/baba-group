import React from 'react'
import Home from './Home'
import New from './New'
import Product from './Product'
import Map from './Map'
import FloorrexSection from './FloorrexSection'
import Inspirations from './Inspirations'
import WhyChooseUs from './whychooseus'
import FeaturesSection from './featuresection'
import CheckOut from './CheckOut'
import Faq from './Faq'
import Awards from './Awards'
import Projects from './Projects'
import Certificates from './Certificates'

const Floorrex = () => {
  return (
    <div className='overflow-x-hidden'>
        <Home/>
        <New/>
        <Product/>
        <Map/>
        <CheckOut/>
        <WhyChooseUs/>
        <FeaturesSection/>
        <Awards/>
        <FloorrexSection/>
        <Inspirations/>
        <Projects/>
        <Certificates/>
        <Faq/>
    </div>
  )
}

export default Floorrex