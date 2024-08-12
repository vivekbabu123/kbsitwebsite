import React from "react";
import Header from "../components/Header";
import Contactus from "../components/Contactus";
import "./About.css";
import abouteimage1 from "../assest/image/about_men.jpg";

import hero1 from "../assest/image/homepage1.webp";
import hero2 from "../assest/image/homepage2.webp";
import hero3 from "../assest/image/homepage3.webp";
import hero4 from "../assest/image/driveere.png";

import abouticon1 from "../assest/image/abtcnt1.webp";
import abouticon2 from "../assest/image/abtcnt2.webp";
import abouticon3 from "../assest/image/abtcnt3.webp";
import teams1 from "../assest/image/t1.webp";
import teams2 from "../assest/image/t2.jpeg";
import teams3 from "../assest/image/t3.webp";
import teams4 from "../assest/image/t4.jpg";
import teams5 from "../assest/image/t5.jpg";
import teams6 from "../assest/image/t6.webp";
import aboutphoto from "../assest/image/aboutemp.jpg";
import howwe from "../assest/image/mobilec.jpg";

import Footer from "../components/Footer";

let About = () => {
  return (
    <React.Fragment>
      <Header />
      {/* technologies start */}
      <section className="technologies_start">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="tech_about">
                <h2>We are your technological partners in digital.</h2>
                <p>
                  Since 2013, we've been helping business likee yours accelerate
                  their <br />
                  journey to Success, backed by the right transformative
                  solutions.
                </p>
              <a href="/contact"><button className="btn text-white">Explore More</button></a>  
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_banner d-flex justify-content-between">
                <img src={abouteimage1} className="img-fluid" alt="image"></img>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section className="world_item">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-5 col-xl-5">
              <div className="world_trust">
                <h2 className="text-nowrap  fw-bold">
                  World's Leading Brands Trust Us
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-7 col-xl-7">
              <div className="row">
                <div className="col-6 col-md-3">
                  <img src={hero1} className="img-fluid" alt="image" />
                </div>
                <div className="col-6 col-md-3">
                  <img src={hero2} className="img-fluid" alt="image" />
                </div>
                <div className="col-6 col-md-3">
                  <img src={hero3} className="img-fluid" alt="image" />
                </div>
                <div className="col-6 col-md-3">
                  <img src={hero4} className="img-fluid" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* technologies finish */}
      {/* we are activated start */}
      <section className="activated_start">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 activated_img">
              <div className="">
                <h2> We,ve Activated </h2>
                <div className="bus_coun d-flex align-items-center justify-content-between">
                  <div className="3bus">
                    <h2>3000+</h2>
                    <h4 className="text-white">Businesses</h4>
                  </div>
                  <div class="vl"></div>
                  <div className="3bus">
                    <h2>150+</h2>
                    <h4 className="text-white">Countries</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="enterprises_delivered">
                <div className="counter_enterprise">
                  <h2>3 5 0 +</h2>
                </div>
                <div className="enterprises_deliever d-flex justify-content-evenly align-items-center">
                  <img src={abouticon1} className="img-fluid" alt="image" />
                  <h2>Enterprise Solutions Delivered</h2>
                </div>
              </div>
              <div className="enterprises_delivered">
                <div className="counter_enterprise">
                  <h2>2000 +</h2>
                </div>
                <div className="enterprises_deliever d-flex justify-content-evenly align-items-center">
                  <img src={abouticon2} className="img-fluid" alt="image" />
                  <h2>Startups Empowered</h2>
                </div>
              </div>
              <div className="enterprises_delivered">
                <div className="counter_enterprise">
                  <h2>100 +</h2>
                </div>
                <div className="enterprises_deliever d-flex justify-content-evenly align-items-center">
                  <img src={abouticon3} className="img-fluid" alt="image" />
                  <h2>Million-Funded Startups</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* we are activated finish */}
      {/* Our Teams start */}
      <section className="our_teams">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_ourteams">
                <a href="#" className="">
                  Our Teams
                </a>
                <h1 className="pt-4 fw-bold">
                  We Are An Innovative Team That Is Enthusiastic About Your
                  Success.
                </h1>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-4">
              <div className="card" style={{ backgroundColor: "#e6e8e2" }}>
                <div className="card-body text-center">
                  <img src={teams1} className="img-fluid" alt="img"></img>
                  <h4 className="pt-3">Taha</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ backgroundColor: "#e6e8e2" }}>
                <div className="card-body text-center">
                  <img src={teams2} className="img-fluid" alt="img"></img>
                  <h4 className="pt-3">Mukesh</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ backgroundColor: "#e6e8e2" }}>
                <div className="card-body text-center">
                  <img src={teams3} className="img-fluid" alt="img"></img>
                  <h4 className="pt-3">Ajay</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-3">
              <div className="card" style={{ backgroundColor: "#e6e8e2" }}>
                <div className="card-body text-center">
                  <img src={teams4} className="img-fluid" alt="img"></img>
                  <h4 className="pt-3">Jasneet</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-3">
              <div className="card" style={{ backgroundColor: "#e6e8e2" }}>
                <div className="card-body text-center">
                  <img src={teams5} className="img-fluid" alt="img"></img>
                  <h4 className="pt-3">Robin</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-3">
              <div className="card" style={{ backgroundColor: "#e6e8e2" }}>
                <div className="card-body text-center">
                  <img src={teams6} className="img-fluid" alt="img"></img>
                  <h4 className="pt-3">Ritika</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our teams finsih */}
      {/* About start */}
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title_heading">
                <h3>About us</h3>
              </div>
              <div className="heding_aboutus">
                <h1>We’re Your Digital Technological Partners</h1>
                <p>
                  We’ve been assisting organizations just like yours in
                  accelerating their path to success by providing the
                  appropriate revolutionary solutions.
                </p>
                <p>
                  A close-knit group of digital experts, KB IT focuses in the
                  most recent developments and developments in digital
                  marketing. Our team has experience developing effective,
                  high-impact digital solutions. We collaborate with businesses
                  all around the world to create digital goods and inventive
                  marketing that furthers their corporate objectives.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img p-5">
                <img
                  src={aboutphoto}
                  alt="about"
                  className="img-fluid rounded"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About finish */}
      {/* how we works start */}
      <section className="how_we">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="how_wephoto">
                <img
                  src={howwe}
                  alt="about"
                  className="img-fluid rounded"
                ></img>
              </div>
            </div>
            <div className="col-md-6">
              <div className="howwe_txt">
                <h6>HOW WE WORK</h6>
                <h1>Our App Procedure Will Set You Apart</h1>
                <p>
                  Develop Your Business More Rapidly With End-to-End Digital
                  Solutions
                </p>
                <hr></hr>
                <div className="work_anal d-flex justify-content-between align-items-center">
                  <h2>Analytics</h2>
                  <p>95%</p>
                </div>

                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    95%
                  </div>
                </div>
                <div className="work_anal mt-3 d-flex justify-content-between align-items-center">
                  <h2>Development</h2>
                  <p>75%</p>
                </div>
                <div class="progress mt-3">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* how we works finish */}
      {/* brewing process start */}
      <section className="brewing_process mb-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="txt_brewing text-center">
                <h2>
                  Ready to Empower Your Business With Our BREWing process?
                </h2>
              <a href="/contact"><button className="text-white border-0">Get in Touch</button></a>  
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contactus />
      <Footer />
    </React.Fragment>
  );
};
export default About;
