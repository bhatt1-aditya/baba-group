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
import AwardsProjectsEvents from './AwardsProjectsEvents'
import { Info } from 'lucide-react'
// import Info from './info'
import Whychooseus from './whychooseus'


const CoreFlexx = () => {
  return (
    <div className='overflow-x-hidden'>
        <Home/>
        {/* <Products/> */}
        <CheckOut/>
        {/* <Info/> */}
        <BestSeller/>
        <CoreFlexxProducts/>
        <Whychooseus/>
        <Inspirations/>
        <Choose/>
        <About/>
        <AwardsProjectsEvents/>
        <Faq/>
    </div>
  )
}

export default CoreFlexx