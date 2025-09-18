import React from 'react'
import MainHome from './MainHome'
import CristalloSection from './CristalloSection'
import StatsSection from './StatsSection'
import ExplorePanel from './ExplorePannel'
import WhyCristalloo from './WhyCristalloo'
import WhatsNew from './WhatsNew'
import WhyChooseCristalloo from './WhyChooseCristalloo'
import ExploreCristallooProduct from './ExploreCristallooProduct'
import OtherBrands from './OtherBrands'
import Certificates from './Certificates'
import Gallery from '../../../components/common/Gallery'

const Cristalloo = () => {
  return (
    <div>
        <MainHome/>
        <CristalloSection />
        <StatsSection/>
        <ExplorePanel/>
        <WhyCristalloo />
        <WhatsNew />
        <WhyChooseCristalloo/>
        <ExploreCristallooProduct/>
        <OtherBrands/>
        <Certificates/>
        <Gallery/>
    </div>
  )
}

export default Cristalloo