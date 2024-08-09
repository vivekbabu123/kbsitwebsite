// src/components/Header.js
import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'boxicons';
import 'boxicons/css/boxicons.min.css'; 
import logo from '../assest/image/kbslogo.png'; 
import './header.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className="menu_nav">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" className="img-fluid img_logo" width="100" />
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Company</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Service</Link>
                  <ul className="dropdown-menu Service-item">
                  <li><Link className="dropdown-item"  to="/ServicesGrid"><box-icon className="icon" color='#f0ac40'  type='solid' name='user-voice'></box-icon>Service</Link></li>
                    <li><Link className="dropdown-item" to="/ServicesGrid/GrowthandMarketing"><box-icon className="icon" color="#3dad57" type='solid' name='megaphone'></box-icon>Growth & Marketing</Link></li>
                    <li><Link className="dropdown-item" to="/ServicesGrid/WebDevelopment"><box-icon name='globe' color='blue'></box-icon>Web Development</Link></li>
                    <li><Link className="dropdown-item" to="/ServicesGrid/MobileDevelopment"><box-icon name='mobile' color="#f75e35"></box-icon>Mobile App Development</Link></li>
                    <li><Link className="dropdown-item" to="/ServicesGrid/EnterpriseSoftwareDevelopment"><box-icon name='cloud-lightning' color="#f0ac40"></box-icon>Enterprise Software Development</Link></li>
                    <li><Link className="dropdown-item" to="/ServicesGrid/BlockChain"><box-icon name='infinite' color="#f0ac40"></box-icon>Blockchain</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown mega-dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Industry
                  </Link>
                  <div className="dropdown-menu mega-dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <h5 className="ps-3">FOOD DELIVERY</h5>
                        <ul className="list-unstyled">
                          <li><Link className="dropdown-item  mt-2" to="/Industry/DeliveryApp"><box-icon name='restaurant' color='#f0ac40'></box-icon>Delivery App</Link></li>
                          <li><Link className="dropdown-item  mt-2" to="/Industry/ECommerce2"><box-icon name='map-pin' color="#3dad57"></box-icon>E-Commerce Delivery</Link></li>
                          <li><Link className="dropdown-item  mt-2" to="/Industry/GroceryDelivery"><box-icon type='solid' name='coffee-alt' color='blue'></box-icon>Grocery Delivery</Link></li>
                          <li><Link className="dropdown-item  mt-2" to="/Industry/FoodDelivery"><box-icon type='solid' name='ship' color="#f75e35"></box-icon>Food Delivery</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <h5 className="ps-3">CRM</h5>
                        <ul className="list-unstyled">
                          <li><Link className="dropdown-item  mt-2" to="/Industry/CRM"><box-icon type='solid' name='cabinet' color="#f75e35"></box-icon>CRM</Link></li>
                          <li><Link className="dropdown-item  mt-2" to="/Industry/SalesCRM"><box-icon type='solid' name='layer-minus' color="#f75e35"></box-icon>Sales CRM</Link></li>
                          <li><Link className="dropdown-item  mt-2" to="/Industry/RealEstateCRM"><box-icon type='solid' name='business' color="#f0ac40"></box-icon>Real Estate CRM</Link></li>
                          <li><Link className="dropdown-item  mt-2" to="/Industry/EducationCRM"><box-icon type='solid' name='book-reader' color="#f4f62f"></box-icon>Education CRM</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <h5 className="ps-3">E-COMMERCE</h5>
                        <ul className="list-unstyled">
                          <li><Link className="dropdown-item  mt-2" to="/Industry/EMart"><box-icon type='solid' name='briefcase-alt' color='blue'></box-icon>E-Mart</Link></li>
                          <li><Link className="dropdown-item  mt-2" to="/Industry/Spactacles"><box-icon name='server' color="#3dad57"></box-icon>Spectacles Store</Link></li>
                          <li><Link className="dropdown-item  mt-2" to="/ServicesGrid"><box-icon type='solid' name='fridge' color='#f0ac40'></box-icon>Liquor Store</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <h5 className="ps-3">SOFTWARE DEVELOPMENT</h5>
                        <ul className="list-unstyled">
                          <li><Link className="dropdown-item  mt-2" to="/ServicesGrid/WebDevelopment"><box-icon name='globe' color="#f0ac40"></box-icon>Web Development</Link></li>
                          <li><Link className="dropdown-item  mt-2" to="/ServicesGrid/MobileDevelopment"><box-icon type='solid' name='mobile' color="#f0ac40"></box-icon>Mobile App Development</Link></li>
                          <li><Link className="dropdown-item  mt-2" to="/Industry/PartnerShip"><box-icon type='solid' name='user-voice' color="#f75e35"></box-icon>Partnership</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Live Demo
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item nav-link w-auto" to="/Blog">Blog</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item nav-link w-auto" to="/Video">Video</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
              <div className="row">
                <div className="call col-6 rounded-circle mt-2">
                  <box-icon className="phonecall rounded-circle" name='phone-call' color="#fff"></box-icon>
                </div>
                <div className="col-6">
                  <p className="text-nowrap mb-0 fs-6">Call any time</p>
                  <a href="tel:+61455254491" className="text-decoration-none fs-5 fw-bold text-nowrap">+61455 254 491</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
