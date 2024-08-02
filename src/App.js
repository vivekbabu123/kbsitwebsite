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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
