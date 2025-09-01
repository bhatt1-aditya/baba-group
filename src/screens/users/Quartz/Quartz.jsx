import React from 'react'
import Hero from './Hero'
import Collections from './Collections'
import BabaQuartz from './BabaQuartz'
import QuartzProducts from './QuartzProducts'
import Inspirations from './Inspirations'
import CheckOut from './CheckOut'
import Faq from './Faq'
import Values from './Values'
import FeaturesSection from './featuresection'
import Whychooseus from './whychooseus'
import { Award } from 'lucide-react'
import Awards from './Awards'
import Certificates from './Certificates'
import Projects from './Projects'

const Quartz = () => {
  return (
    <div>
        <Hero/>
        <Collections/>
        <BabaQuartz/>
        <QuartzProducts/>
        <Values/>
        <Inspirations/>
        <Whychooseus/>
        <FeaturesSection/>
        <Awards/>
        <CheckOut/>
        <Projects/>
        <Certificates/>
        <Faq/>
    </div>
  )
}

export default Quartz