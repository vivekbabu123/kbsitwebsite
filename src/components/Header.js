// src/components/Header.js
import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'boxicons';
import 'boxicons/css/boxicons.min.css'; 
import kbsLogo from '../assest/image/kbs_logo.png'; 
import './header.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className="menu_nav">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src={kbsLogo} alt="Logo" className="img-fluid img_logo" width="100" />
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
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Company</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Service</a>
                  <ul className="dropdown-menu Service-item">
                    <li><a className="dropdown-item" href="#"><box-icon className="icon" type='solid' name='megaphone'></box-icon>Growth & Marketing</a></li>
                    <li><a className="dropdown-item" href="#"><box-icon name='globe'></box-icon>Web Development</a></li>
                    <li><a className="dropdown-item" href="#"><box-icon name='mobile'></box-icon>Mobile App Development</a></li>
                    <li><a className="dropdown-item" href="#"><box-icon name='cloud-lightning'></box-icon>Enterprise Software Development</a></li>
                    <li><a className="dropdown-item" href="#"><box-icon name='infinite'></box-icon>Blockchain</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown mega-dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Industry
                  </a>
                  <div className="dropdown-menu mega-dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <h5>FOOD DELIVERY</h5>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon name='restaurant'></box-icon>Delivery App</a></li>
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon name='map-pin'></box-icon>E-Commerce Delivery</a></li>
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon type='solid' name='coffee-alt'></box-icon>Grocery Delivery</a></li>
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon type='solid' name='ship'></box-icon>Food Delivery</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <h5>CRM</h5>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon type='solid' name='cabinet'></box-icon>CRM</a></li>
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon type='solid' name='layer-minus'></box-icon>Sales CRM</a></li>
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon type='solid' name='business'></box-icon>Real Estate CRM</a></li>
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon type='solid' name='book-reader'></box-icon>Education CRM</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <h5>E-COMMERCE</h5>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon type='solid' name='briefcase-alt'></box-icon>E-Mart</a></li>
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon name='server'></box-icon>Spectacles Store</a></li>
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon type='solid' name='fridge'></box-icon>Liquor Store</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <h5>SOFTWARE DEVELOPMENT</h5>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon name='globe'></box-icon>Web Development</a></li>
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon type='solid' name='mobile'></box-icon>Mobile App Development</a></li>
                          <li><a className="dropdown-item bg-secondary-subtle mt-2" href="#"><box-icon type='solid' name='user-voice'></box-icon>Partnership</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Live Demo</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Blogs</a></li>
                    <li><a className="dropdown-item" href="#">Video</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
              <div className="row">
                <div className="call col-6 rounded-circle mt-2">
                  <box-icon className="phonecall rounded-circle" name='phone-call'   color="#fff"></box-icon>
                </div>
                <div className="col-6">
                  <p className="text-nowrap mb-0 fs-6">Call any time</p>
                  <a href="#" className="text-decoration-none fs-5 fw-bold text-nowrap">+61455 254 491</a>
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