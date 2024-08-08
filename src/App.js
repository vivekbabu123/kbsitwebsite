import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePages from './pages/HomePages';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Video from './pages/Video';
import ServicesGrid from './pages/ServicesGrid';
import GrowthandMarketing from './pages/GrowthandMarketing';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import EnterpriseSoftwareDevelopment from './pages/EnterpriseSoftwareDevelopment';
import BlockChain from './pages/BlockChain';
import DeliveryApp from './pages/DeliveryApp';
import ECommerce2 from './pages/ECommerce2';
import GroceryDelivery from './pages/GroceryDelivery';
import FoodDelivery from './pages/FoodDelivery';
import CRM from './pages/CRM';
import SalesCRM from './pages/SalesCRM';
import Spactacles from './pages/Spectacles';
import RealEstateCRM from './pages/RealEstateCRM';
import EducationCRM from './pages/EducationCRM';
import PartnerShip from './pages/PartnerShip';
import EMart from './pages/EMart';
import 'boxicons/css/boxicons.min.css';





function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []); 
  return (
    <div className="App">
      <Router>
        <Routes> 
          <Route path="/" element={<HomePages />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/Video" element={<Video/>} />
          <Route path="/contact" element={<Contact />}/>  
          <Route path="/ServicesGrid" element={<ServicesGrid />}/>  
          <Route path="/ServicesGrid/GrowthandMarketing" element={<GrowthandMarketing />}/> 
          <Route path="/ServicesGrid/WebDevelopment" element={<WebDevelopment />}/>  
          <Route path="/ServicesGrid/MobileDevelopment" element={<MobileDevelopment />}/>  
          <Route path="/ServicesGrid/EnterpriseSoftwareDevelopment" element={<EnterpriseSoftwareDevelopment />}/>  
          <Route path="/ServicesGrid/BlockChain" element={<BlockChain />}/> 
          <Route path="/Industry/DeliveryApp" element={<DeliveryApp />}/>    
          <Route path="/Industry/ECommerce2" element={<ECommerce2 />}/>  
          <Route path="/Industry/GroceryDelivery" element={<GroceryDelivery />}/>  
          <Route path="/Industry/FoodDelivery" element={<FoodDelivery />}/>  
          <Route path="/Industry/CRM" element={<CRM />}/>  
          <Route path="/Industry/SalesCRM" element={<SalesCRM />}/>  
          <Route path="/Industry/Spactacles" element={<Spactacles />}/> 
          <Route path="/Industry/RealEstateCRM" element={<RealEstateCRM />}/> 
          <Route path="/Industry/EducationCRM" element={<EducationCRM />}/> 
          <Route path="/Industry/EMart" element={<EMart />}/> 
          <Route path="/Industry/PartnerShip" element={<PartnerShip />}/> 



        </Routes>
      </Router>
    </div>
  );
}

export default App;
