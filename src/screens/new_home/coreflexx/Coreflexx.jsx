import React from 'react'
import MainHome from './MainHome'
import StatsSection from './StatsSection'
import WalleexSection from './WalleexSection'
import BabaGroupSection from './BabaGroupSection'
import WhyChooseCoreflexx from './WhyChooseCoreflexx'
import CoreflexxSection from './CoreflexxSection'
import CoreflexxFeatures from './CoreflexxFeatures'
import ExploreCoreflexx from './ExploreCoreflexx'
import Certificates from './Certificates'
import Gallery from '../../../components/common/Gallery'

const Coreflexx = () => {
  return (
    <div>
        <MainHome/>
        <StatsSection/>
        <WalleexSection/>
        <BabaGroupSection/>
        <WhyChooseCoreflexx/>
        {/* <CoreflexxSection/> */}
        <CoreflexxFeatures/>
        <ExploreCoreflexx/>
        <Certificates/>
        <Gallery/>
    </div>
  )
}

export default Coreflexx