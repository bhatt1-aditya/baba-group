import React from 'react'
import Home from './Home'
import New from './New'
import Product from './Product'
import Map from './Map'
import FloorrexSection from './FloorrexSection'
import Inspirations from './Inspirations'
import CheckOut from './CheckOut'
import Faq from './Faq'

const Floorrex = () => {
  return (
    <div className='overflow-x-hidden'>
        <Home/>
        <New/>
        <CheckOut/>
        <Product/>
        <Map/>
        <Inspirations/>
        <FloorrexSection/>
        <Faq/>
    </div>
  )
}

export default Floorrex