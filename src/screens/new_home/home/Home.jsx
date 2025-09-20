import React from 'react'
import MainHome from './MainHome'
import AboutSection from './AboutSection'
import StatsSection from './StatsSection'
import WhatsNewSection from './WhatsNewSection'
import WhyChooseSection from './WhyChooseSection'
import ProductSection from './ProductSection'
import OtherBrands from './OtherBrands'
import Certificatestes from './Certificates'
import FAQSection from './FAQSection'
import Gallery from '../../../components/common/Gallery'

const Home = () => {
  return (
    <div>
        <MainHome/>
        <AboutSection/>
        <StatsSection />
        <WhatsNewSection/>
        <WhyChooseSection/>
        <ProductSection/>
        <OtherBrands/>
        <Certificatestes/>
        <Gallery/>
        <FAQSection/>
    </div>
  )
}

export default Home