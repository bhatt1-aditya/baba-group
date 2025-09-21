import React from 'react'
import Aboutus from './aboutus/Aboutus'
import Financials from './aboutus/Financials'
import VisionMission from './aboutus/VisionMission'
import Values from './aboutus/Values'
import Certificates from './aboutus/Certificates'

const AboutUs = () => {
  return (
    <div>
        <Aboutus/>
        {/* <Financials/> */}
        <VisionMission/>
        <Values/>
        <Certificates/>
    </div>
  )
}

export default AboutUs