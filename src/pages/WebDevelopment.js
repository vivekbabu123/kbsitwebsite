import React from "react";
import Header from "../components/Header";
import heroweb from "../assest/image/webdevelopment/hero.png";
import './webdevlopment.css';
import socialicon1 from '../assest/image/webdevelopment/a1.png';
import socialicon2 from '../assest/image/webdevelopment/a2.png';
import socialicon3 from '../assest/image/webdevelopment/a3.png';
import socialicon4 from '../assest/image/webdevelopment/a4.png';
import bussiness1 from '../assest/image/webdevelopment/b1.webp';
import bussiness2 from '../assest/image/webdevelopment/b2.webp';
import bussiness3 from '../assest/image/webdevelopment/b3.webp';
import bussiness4 from '../assest/image/webdevelopment/b4.webp';
import bussiness5 from '../assest/image/webdevelopment/b5.webp';
import bussiness6 from '../assest/image/webdevelopment/b6.webp';
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

let FlipBox = ({ icon, type, name, title, frontContent, backContent }) => {
  return (
    <div className="col-md-6 col-lg-3 col-xl-3">
      <div className="whycard text-center flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <div className="card-body">
              <div className="flip-box-icon">
                <box-icon type={type} name={name} size="50px"></box-icon>
              </div>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{frontContent}</p>
            </div>
          </div>
          <div className="flip-box-back">
            <div className="card-body">
              <div className="flip-box-icon">
                <box-icon type={type} name={name} size="50px" color="#fff"></box-icon>
              </div>
              <p className="card-text">{backContent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


let WebDevelopment = () => {
  return (
    <React.Fragment>
      <Header />
      {/* start hero section */}
      <section className="hero-section text-center">
        <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero_text text-start">
            <h1>Intuitive Web Solutions To Boost Your Brand Growth</h1>
            <p>
              We Create Personalised Websites To Meet Your Exact Business Needs.
            </p>
            <button
              className="btn
            "
            >
              Book a Demo
            </button>
            </div>
           
          </div>
          <div className="col-md-6 text-start">
            <img src={heroweb} alt="Web Solution" className="img-fluid" />
          </div>
        </div>
        </div>
       
      </section>
      {/* finish hero section */}
      {/* number section start */}
      <section className="numbers-section text-center my-5">
            <div className="container">
                <div className="row">

                <h2 className="number_speakers">Our Numbers Speak For Themselves</h2>
        <div className="row g-3">
          <div className="col-md-3">
            <div className="numbers-box" style={{ backgroundColor: '#FFDBE4' }}>
                <img src={socialicon1} alt="img" className="img-fluid"></img>
              <p>700+ Websites Delivered</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="numbers-box " style={{ backgroundColor: '#FFDBA8' }}>
            <img src={socialicon2} alt="img" className="img-fluid"></img>
              <p>10k+ Clients Worldwide</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="numbers-box " style={{ backgroundColor: '#EBFFB6' }}>
            <img src={socialicon3} alt="img" className="img-fluid"></img>
              <p>100+ Web Developers</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="numbers-box " style={{ backgroundColor: '#E4E7FF' }}>
            <img src={socialicon4} alt="img" className="img-fluid"></img>
              <p>10+ Years of Experience</p>
            </div>
          </div>

                </div>
            </div>



        
        </div>
      </section>
      {/* number section finish */}
      {/* driven quality start */}
        <section className="driven_quality">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="driven_txt">
                            <h2 className="text-white fw-bold">For Quality-Driven & Business-Specific Web Development Services, Reach Us Out</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="driven_btn text-center">
                            <button className="text-white btn ">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
      {/* driven quality finish */}

      <section className="services-section text-center my-5">
        <h2 className="service_bussiness">Website Development To Take Your Business To The Next Level</h2>
        <p className="service_title">We offer a wide range of services to help you turn your fantastic business ideas into successful business solutions.</p>
        <div className="container">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="services-box" style={{ backgroundColor: '#62C8FF' }}>
            <img src={bussiness1} alt="image" className="img-fluid"></img>
              <h4>Development of Web Portals</h4>
              <p>Customer-focused websites with all the features you need to grow your business online</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-box" style={{ backgroundColor: '#C5EC5D' }}>
            <img src={bussiness2} alt="image" className="img-fluid"></img>
              <h4>Web Development Customised</h4>
              <p>Websites that are fully customised to increase productivity, accelerate business processes, and increase revenue</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-box" style={{ backgroundColor: '#FFA4C4' }}>
            <img src={bussiness3} alt="image" className="img-fluid"></img>
              <h4>E-commerce Development</h4>
              <p>E-commerce solutions to simplify online shopping, increase revenue & attract a larger customer base</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-box" style={{ backgroundColor: '#D1C6FF' }}>
            <img src={bussiness4} alt="image" className="img-fluid"></img>
              <h4>Web Development for CMS</h4>
              <p>Web applications with a simple user interface for managing your digital content effectively and gaining a competitive edge</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-box" style={{ backgroundColor: '#4EEAD2' }}>
            <img src={bussiness5} alt="image" className="img-fluid"></img>
              <h4>Organisational Web Development</h4>
              <p>Highly functional web solutions for improved user engagement, team collaboration, and transparent results</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-box" style={{ backgroundColor: '#FFD965' }}>
            <img src={bussiness6} alt="image" className="img-fluid"></img>
              <h4>Support & Maintenance</h4>
              <p>Unparalleled maintenance support and services to ensure that your website is operating properly, securely, and without bugs</p>
            </div>
          </div>
        </div>
        </div>
        
      </section>
       {/* driven quality start */}
       <section className="driven_quality">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="driven_txt">
                            <h2 className="text-white fw-bold">For Quality-Driven & Business-Specific Web Development Services, Reach Us Out</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="driven_btn text-center">
                            <button className="text-white btn ">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
      {/* driven quality finish */}
    {/* Notch web application start */}
    <section className="notch_web">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="notch_web-heading">
            <h1 className="text-center pt-5">Technologies To Build Top-Notch Web Solutions</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-12">
          <div className="step">
            <div className="step-icon">
              <box-icon name='check' color='white'></box-icon>
            </div>
            <div className="step-item2">
            <div className="step-number">01</div>
            <div className="step-description">Designing</div>
            <div className="step-divider"></div>
            </div>
           
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-12">
          <div className="step">
            <div className="step-icon">
              <box-icon name='pencil' color='white'></box-icon>
            </div>
            <div className="step-item2">
            <div className="step-number">02</div>
            <div className="step-description">Web Framework</div>
            <div className="step-divider"></div>
            </div>
            
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-12">
          <div className="step">
            <div className="step-icon">
              <box-icon name='data' color='white'></box-icon>
            </div>
            <div className="step-item2">
            <div className="step-number">03</div>
            <div className="step-description">Databases</div>
            <div className="step-divider"></div>
            </div>
          
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-12">
          <div className="step">
            <div className="step-icon">
              <box-icon name='link' color='white'></box-icon>
            </div>
            <div className="step-item2">
            <div className="step-number">04</div>
            <div className="step-description">Platforms</div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>

    {/* Noteh web application finish */}
    {/* why choose web development start */}
    <section className="why_choosewebdevelopment">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_whydevelopment">
              <h1>Why Choose KBS IT For Your Web Development Solutions?</h1>
            </div>
          </div>
        </div>
        <div className="container my-4">
          <div className="row">
            <FlipBox
              type="solid"
              name="universal-access"
              title="Robust & Scalable"
              frontContent=""
              backContent="Solution that is fully functional and scalable and expands along with your business"
            />
            <FlipBox
              type="solid"
              name="landmark"
              title="Highly Responsive"
              frontContent=""
              backContent="Web solutions that work well on mobile, tablet, and desktop devices"
            />
            <FlipBox
              type="solid"
              name="truck"
              title="Quick Loading"
              frontContent=""
              backContent="We offer a minimalistic setup to ensure your website load faster"
            />
            <FlipBox
              type="logo"
              name="trip-advisor"
              title="Secure Solutions"
              frontContent=""
              backContent="Highly secure websites to withstand high traffic without any glitches"
            />
          </div>
        </div>
      </div>
    </section>

    {/* why choose web development finish */}
   

      <Contactus/>
      <Footer/>


      
      

    </React.Fragment>
  );
};
export default WebDevelopment;
