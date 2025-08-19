import Home from "../screens/users/Home";
import Brands from "../screens/users/Brands";
import Products from "../screens/users/Products";
import Galleria from "../screens/users/Galleria";
import Tesimonials from "../screens/users/Testimonials";
import AboutUs from "../screens/users/AboutUs";
import Florex from "../screens/users/Florex";
import CristaloFlexx from "../screens/users/FooterFlorex/CristaloFlexx";
// import CoreFlexx from "../screens/users/CoreFlexx/CoreFlexx";
import CoreFlexx from "../screens/users/CoreFlorex/CoreFlexx";
import Wallexx from "../screens/users/Wallexx/Wallexx";
import Quartz from "../screens/users/Quartz/Quartz";
import BabaQuartz from "../screens/users/Quartz/BabaQuartz";
import Floorrex from "../screens/users/floorrex/Floorrex";


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
    component: <AboutUs />,
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
  }
];
