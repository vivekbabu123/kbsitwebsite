import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contactus from "../components/Contactus";
import growhero from "../assest/image/digital_hero.png";
import "./growmarket.css";
import webdesin from "../assest/image/webdesign.jpg";
import googleser from "../assest/image/googleseo.png";
import smm from "../assest/image/smm.jpg";
import sem from "../assest/image/digitalmarketing.jpg";
import content5 from "../assest/image/contentmarketing.jpg";
import app_analytics from "../assest//image/app_anayltics.jpg";
import automated from "../assest/image/automates_segmentation.jpg";
import aso from "../assest/image/aso.jpg";
import camapagind from "../assest/image/app_campaigns.jpg";


const campaignData = [
  {
    title: "Campaign Optimization",
    description:
      "In order to increase client lifetime value and profitability, fine-tune your campaigns using biweekly audits and monthly reports.",
  },
  {
    title: "Social Media Management",
    description:
      "Boost your online presence with consistent, high-quality content across all social media platforms.",
  },
  {
    title: "Email Marketing",
    description:
      "Engage your audience with personalized email campaigns that drive conversions.",
  },
  {
    title: "SEO Services",
    description:
      "Improve your website’s search engine ranking and attract more organic traffic.",
  },
];

let GrowthandMarketing = () => {
  return (
    <React.Fragment>
      <Header />
      {/* Digital marketing Services start*/}
      <section className="digit_market">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="digit_text">
                <h2>Digital Marketing Services</h2>
                <p>
                  <span> Increasing the Digital Footprint of Companies</span>
                  We provide complete internet marketing solutions to help your
                  business become digital
                </p>
                <button className="btn">Click here</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="grow_img">
                <img src={growhero} alt="img" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Digital marketing Services finish */}

      {/* Why choose us start growth development */}
      <section className="why_choosegrowth">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why_choose_heading">
                <h2>Why Choose Us?</h2>
                <h5>We Help Drive Measurable Growth For Your Business</h5>
                <ul>
                  <li>No Set-Up Fee Required</li>
                  <li>Data & Analytics Driven Approach</li>
                  <li>Personal Audit & Competitor Analysis</li>
                  <li>Monthly Marketing Roadmaps</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="map-container">
                    {campaignData.slice(0, 2).map(
                      (
                        campaign,
                        index // Show the first 2 campaigns in the first column
                      ) => (
                        <div key={index} className="whycard">
                          <h2>{campaign.title}</h2>
                          <p>{campaign.description}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="map-container">
                    {campaignData.slice(2, 4).map(
                      (
                        campaign,
                        index // Show the next 2 campaigns in the second column
                      ) => (
                        <div key={index + 2} className="whycard">
                          {" "}
                          {/* Adjust index to maintain unique keys */}
                          <h2>{campaign.title}</h2>
                          <p>{campaign.description}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why choose us finish growth development */}

      {/* service growth development start  */}
      <section className="growth_service">
        <div className="container">
          <div className="row">
            <div className="growth_heading">
              <div class="services-container">
                <div class="line"></div>
                <span>Services</span>
                <div class="line"></div>
              </div>
              <h2 className="text-center pb-5">
                We Just Don’t Market, We <br></br>Build Relationships
              </h2>
            </div>
            <div class="container">
            <div className="row g-3"> {/* Use Bootstrap gutter class for spacing */}
            <div className="col">
                <div className="text-center service-box">
                    <i className='bx bx-desktop'></i>
                    <p>Web Design</p>
                </div>
            </div>
            <div className="col">
                <div className="text-center service-box">
                    <i className='bx bx-search-alt-2'></i>
                    <p>SEO</p>
                </div>
            </div>
            <div className="col">
                <div className="text-center service-box">
                    <i className='bx bx-cog'></i>
                    <p>SSM</p>
                </div>
            </div>
            <div className="col">
                <div className="text-center service-box">
                    <box-icon name='target-lock'></box-icon>
                    <p>SEM</p>
                </div>
            </div>
            <div className="col">
                <div className="text-center service-box">
                    <i className='bx bx-edit'></i>
                    <p>Content Marketing</p>
                </div>
            </div>
        </div>


</div>
          </div>
        </div>
      </section>
      {/* service growth development finish */}

      {/* service Web Deign start */}
              <section className="web_designgrowth">
                <div className="container">
                    <div className="row align-items-center g-5">
                      <div className="col-md-6">
                        <div className="web_designimg">
                          <img src={webdesin} alt="image" className="img-fluid"></img>
                          
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="web_text">
                          <h2>WEB DESGIN</h2>
                          <h5>Crafting Experiences That Brings Results</h5>
                          <p>Use logical UI/UX designs created by our in-house design team to communicate your brand’s message and boost visibility.</p>
                          <p>Provide your customers a smooth experience with internet marketing services, which increases engagement and sales prospects.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="web_text">
                          <h2>SEO</h2>
                          <h5>Increasing Traffic Organically</h5>
                          <p>Improve click-through rates for your website by using customized meta tags, graphics, content, etc.</p>
                          <p>We assist you in generating high-quality traffic from pertinent backlinks, a labor-intensive technique that nevertheless ensures excellent outcomes.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="web_designimg">
                          <img src={googleser} alt="image" className="img-fluid"></img>
                          
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="web_designimg">
                          <img src={smm} alt="image" className="img-fluid"></img>
                          
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="web_text">
                          <h2>SMM</h2>
                          <h5>Grow Your Brand With Social Media</h5>
                          <p>Get your brand known and shared with a social media plan or campaign developed after careful consideration of your company’s objectives.</p>
                          <p>Increase client happiness & engagement by providing them with material they’d want to share.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="web_text">
                          <h2>SEM</h2>
                          <h5>Reach Your Audience Faster Than Ever</h5>
                          <p>Use various marketing services on the appropriate platform to connect with the right audience at the right moment.</p>
                          <p>In a shorter amount of time, strengthen your internet visibility with effective search engine marketing efforts.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="web_designimg">
                          <img src={sem} alt="image" className="img-fluid"></img>
                          
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="web_designimg">
                          <img src={content5} alt="image" className="img-fluid"></img>
                          
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="web_text">
                          <h2>Content Marketing</h2>
                          <h5>Educate, Engage & Convert</h5>
                          <p>Keep your audience informed and interested by providing them with information (blogs, videos, infographics, whitepapers, creatives, etc.) that is pertinent to both them and your company.</p>
                          <p>We craft the creation and distribution of content to boost your visibility and lead conversion while balancing quality and quantity.</p>
                        </div>
                      </div>
                    </div>
                </div>

              </section>
      {/* servide web design finish */}
      {/* Mobile app marketing start */}
      <section className="Mob_application">
        <div className="container">
          <div className="row">
            <div className="col-12">
                    <div className="mobileapp-title">
                      <h1>Mobile App Marketing</h1>
                    </div>
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="app_analytics">
                        <img src={app_analytics} alt="image" className="img-fluid"></img>
                        <h2>App Analytics</h2>  
                        <p>With the aid of gain access to the appropriate metrics and use them to create effective engagement plans that result in conversions and lower the churn rate.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="app_analytics">
                        <img src={automated} alt="image" className="img-fluid"></img>
                        <h2>Automated Segmentation</h2>  
                        <p>By classifying your consumers based on their interests, behaviours, lifestyle, and personality factors, you may increase conversions.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="app_analytics">
                        <img src={aso} alt="image" className="img-fluid"></img>
                        <h2>ASO</h2>  
                        <p>Increase the number of downloads by convincing your audience to click the “download” button with compelling app descriptions and attractive screenshots.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="app_analytics">
                        <img src={camapagind} alt="image" className="img-fluid"></img>
                        <h2>App Campaigns</h2>  
                        <p>With the aid of mobile app development services, social media ad campaigns, and other display ads, increase the number of app installs by targeting the most appropriate users with them.</p>
                      </div>
                    </div>
                    </div>
                   
            </div>

          </div>
        </div>

      </section>
      {/* Mobile app marketing finish*/}
      {/*  Business Reach The Pinnacle start */}
            <section className="pinacle_start">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2>Let’s Help Your Business Reach The Pinnacle Of Success With Our Marketing Efforts</h2>
                      <p>With our proven marketing strategies and expert team, we will elevate your business to new heights of success and help you reach the pinnacle of your industry.”</p>
                  </div>
                </div>

              </div>

            </section>
      {/*  Business Reach The Pinnacle finish */}
      <Contactus />
      <Footer />
    </React.Fragment>
  );
};
export default GrowthandMarketing;
