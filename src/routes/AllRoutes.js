import Home from "../screens/users/Home";
import Brands from "../screens/users/Brands";
import Products from "../screens/users/Products";
import Galleria from "../screens/users/Galleria";
import Tesimonials from "../screens/users/Testimonials";
import AboutUs from "../screens/users/AboutUs";
import About_Us from "../components/menubar/AboutUs";
import Florex from "../screens/users/Florex";
import CristaloFlexx from "../screens/users/FooterFlorex/CristaloFlexx";
// import CoreFlexx from "../screens/users/CoreFlexx/CoreFlexx";
import CoreFlexx from "../screens/users/CoreFlorex/CoreFlexx";
import Wallexx from "../screens/users/Wallexx/Wallexx";
import Quartz from "../screens/users/Quartz/Quartz";
import BabaQuartz from "../screens/users/Quartz/BabaQuartz";
import Floorrex from "../screens/users/floorrex/Floorrex";
import Careers from "../components/menubar/Carrers";
import ContactUs from "../components/menubar/ContactUs";
import EnvironmentalCommitment from "../components/menubar/EnvironmentalCommitment";
import PublicationsSection from "../components/menubar/PublicationsSection";
import PartnerWithUsForm from "../components/menubar/PartnerWithUsForm";
import GlobalPresence from "../components/menubar/GlobalPresence";
import SampleRequest from "../components/menubar/SampleRequest";
import ECatalogues from "../components/menubar/ECatalogues";
import NewsEvents from "../components/menubar/NewsEvents";
import ResourcesSection from "../components/menubar/ResourcesSection";
import NewsEventSection from "../components/menubar/NewsEventSection";
import ProjectsPage from "../components/menubar/ProjectsPage";
import CoreResponsibilities from "../components/menubar/CoreResponsibilities";
import AwardsAchievements from "../components/menubar/AwardsAchievements";
import Inspirations from "../components/menubar/Inspirations";
import Promoters from "../components/menubar/Promoters"
import MainHome from "../screens/new_home/home/MainHome";
import AboutSection from "../screens/new_home/home/AboutSection";
import Home2 from "../screens/new_home/home/Home"
import Floorexx from "../screens/new_home/floorexx/Floorexx";
import NewWallexx from "../screens/new_home/wallexx/NewWallexx";
import WallPannel from "../screens/new_home/wallPannel/WallPannel";
import ShowerPannel from "../screens/new_home/showerPannel/ShowerPannel";
import Cristalloo from "../screens/new_home/cristalloo/Cristalloo";
import Coreflexx from "../screens/new_home/coreflexx/Coreflexx";
import Minerals from "../screens/new_home/minerals/Minerals";
import Calcite from "../screens/new_home/calcite/Calcite";
import QuartzMinerals from "../screens/new_home/quartz_minerals/QuartzMinerals";
import FeldSpar from "../screens/new_home/feldspar/FeldSpar";
import BabaGroup from "../screens/new_home/baba_group/BabaGroup";
import ProductDetail from "../components/menubar/ProductDetail";
import ManufacturingProcess from "../components/menubar/ManufacturingProcess";
import CareAndMaintenance from "../components/menubar/CareAndMaintenance";
import TechnicalSpecifications from "../components/menubar/TechnicalSpecifications";
import AdvantagesAndUses from "../components/menubar/AdvantagesAndUses";
import QuartzFinishes from "../components/menubar/QuartzFinishes";
import SimilarCristalloAbout from "../components/menubar/SimilarCistalloAbout";
import SimilarCristalloProductDetails from "../components/menubar/SimilarCristalloProductDetails";
import SimilarCristalloManufacturingProcess from "../components/menubar/SimilarCristalloManufacturingProcess";
import SimilarCristalloCareAndMaintenance from "../components/menubar/SimilarCristalloCareAndMaintenance";
import SimilarCristalloAdvantagesAndUses from "../components/menubar/SimilarCristalloAdvantagesAndUses";
import SimilarFloorexx from "../components/menubar/SimilarFloorexx";
import SimilarFloorexxProductDetail from "../components/menubar/SimilarFloorexxProductDetails";
import SimilarFloorexxInstaliationGuideline from "../components/menubar/SimilarFloorexxInstaliationGuideline";
import SimilarFloorexxCareAndMaintenance from "../components/menubar/SimilarFloorexxCareMaintenance";
import SimilarFloorrexAdvantages from "../components/menubar/SimilarFloorexxAdvantages";
import SimilarFloorrexAccessories from "../components/menubar/SimilarFloorexxAccessories";
import SimilarWallex from "../components/menubar/SimilarWallex";
import SimilarWallexProductDetail from "../components/menubar/SimilarWallexProductDetails";
import WallexInstallationGuide from "../components/menubar/WallexInstallationGuide";
export const userRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/brands",
    component: <Brands />,
  },
  {
    path: "/products",
    component: <Products />,
  },
  {
    path: "/galleria",
    component: <Galleria />,
  },
  {
    path: "/testimonials",
    component: <Tesimonials />,
  },
  {
    path: "/aboutus",
    component: <About_Us/>,
  },
  {
    path: "/florex",
    component: <Florex />,
  },


  // Footer cristalo-flexx
  {
    path:"/cristalo-flexx",
    component:<CristaloFlexx/>
  },
  // Home cristalo-flexx
  {
    path:"/corflexx",
    component:<CoreFlexx/>
  },
  // Home cristalo-flexx
  {
    path:"/wallexx",
    component:<Wallexx/>
  },
  {
    path:"/quartz",
    component:<Quartz/>
  },
  {
    path:"/baba-quartz",
    component:<BabaQuartz/>
  },
  {
    path:"/floorrex",
    component:<Floorrex/>
  },
  {
    path:"/carrers",
    component:<Careers/>
  },
  {
    path:"/contact-us",
    component:<ContactUs/>
  },
  {
    path:"/environmental-commitment",
    component:<EnvironmentalCommitment/>
  },
  {
    path:"/publications-section",
    component:<PublicationsSection/>
  },
  {
    path:"/partner-with-us-form",
    component:<PartnerWithUsForm/>
  },
  {
    path:"/global-presence",
    component:<GlobalPresence/>
  },
  {
    path:"/sample-request",
    component:<SampleRequest/>
  },
  {
    path:"/e-catalogues",
    component:<ECatalogues />
  },
  {
    path:"/news-events",
    component:<NewsEvents />
  },
  {
    path:"/resources-section",
    component:<ResourcesSection />
  },
  {
    path:"/news-event-section",
    component:<NewsEventSection />
  },
  {
    path:"/projects-page",
    component:<ProjectsPage />
  },
  {
    path:"/core-responsibilities",
    component:<CoreResponsibilities  />
  },
  {
    path:"/awards-achievements",
    component:<AwardsAchievements   />
  },
  {
    path:"/inspirations",
    component:<Inspirations />
  },
  {
    path:"/promoters",
    component:<Promoters />
  },
  {
    path:"/aboutus",
    component:<AboutUs />
  },
  {
    path:"/productdetails",
    component:<ProductDetail />
  },
  {
    path:"/manufacturing-process",
    component:<ManufacturingProcess />
  },
  
  {
    path:"/care-and-maintenance",
    component:<CareAndMaintenance />
  },
  
  {
    path:"/rechnical-specifications",
    component:<TechnicalSpecifications  />
  },
  
  {
    path:"/advantages-and-uses",
    component:<AdvantagesAndUses />
  },
  
  {
    path:"/quartz-finishes",
    component:<QuartzFinishes />
  },
  
  {
    path:"/similar-cristallo-about",
    component:<SimilarCristalloAbout />
  },
  {
    path:"/similar-cristallo-product-details",
    component:<SimilarCristalloProductDetails />
  },
  {
    path:"/similar-cristallo-manufacturing-process",
    component:<SimilarCristalloManufacturingProcess />
  },
  {
    path:"/similar-cristallo-care-and-maintenance",
    component:<SimilarCristalloCareAndMaintenance />
  },
  {
    path:"/similar-cristallo-advantages-and-uses",
    component:<SimilarCristalloAdvantagesAndUses />
  },
  
  {
    path:"/similar-floorexx",
    component:<SimilarFloorexx />
  },
  
  {
    path:"/similar-floorexx-product-detail",
    component:<SimilarFloorexxProductDetail />
  },
  {
    path:"/similar-floorexx-instaliation-guideline",
    component:<SimilarFloorexxInstaliationGuideline />
  },
  
  {
    path:"/similar-floorexx-care-maintenance",
    component:<SimilarFloorexxCareAndMaintenance />
  },
  {
    path:"/similar-floorexx-advantages",
    component:<SimilarFloorrexAdvantages />
  },
  {
    path:"/similar-floorexx-accessories",
    component:<SimilarFloorrexAccessories />
  },
  {
    path:"/similar-wallex",
    component:<SimilarWallex />
  },
  {
    path:"/similar-wallex-product-detail",
    component:<SimilarWallexProductDetail />
  },
  
  {
    path:"/wallex-installation-guide",
    component:<WallexInstallationGuide />
  },
  




  //New Home component
    {
    path:"/new-quartz",
    component:<Home2/>
  },
    {
    path:"/new-floorexx",
    component:<Floorexx/>
  }
  ,
    {
    path:"/new-wallexx",
    component:<NewWallexx/>
  },
    {
    path:"/wall-pannel",
    component:<WallPannel/>
  },
    {
    path:"/shower-pannel",
    component:<ShowerPannel/>
  },
    {
    path:"/cristalloo-pannel",
    component:<Cristalloo/>
  },
    {
    path:"/coreflexx-pannel",
    component:<Coreflexx/>
  },
    {
    path:"/minerals-pannel",
    component:<Minerals/>
  },
    {
    path:"/calcite",
    component:<Calcite/>
  },
  
    {
    path:"/quartz-minerals",
    component:<QuartzMinerals/>
  },
    {
    path:"/feldspar-minerals",
    component:<FeldSpar/>
  },
    {
    path:"/baba-group",
    component:<BabaGroup/>
  },
  
];
