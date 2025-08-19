import React from 'react'
import Home from './Home'
// import Products from './Products'
import BestSeller from './BestSeller'
import CoreFlexxProducts from './CoreFlexxProducts'
import Choose from './Choose'
import Inspirations from './Inspirations'
import About from './About'
import Faq from './Faq'
import CheckOut from './CheckOut'

const CoreFlexx = () => {
  return (
    <div className='overflow-x-hidden'>
        <Home/>
        {/* <Products/> */}
        <CheckOut/>
        <BestSeller/>
        <CoreFlexxProducts/>
        <Inspirations/>
        <Choose/>
        <About/>
        <Faq/>
    </div>
  )
}

export default CoreFlexx