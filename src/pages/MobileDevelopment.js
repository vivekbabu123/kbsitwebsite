import React from "react";
import "./mobiledevelopment.css";
import Header from "../components/Header";
import herobanner from "../assest/image/mobiledevelopment/bannner.png";
import bitcoin from "../assest/image/webdevelopment/bitcoin.jpg";
import stock from "../assest/image/webdevelopment/stock.jpg";
import analysis from "../assest/image/webdevelopment/analysis.jpg";
import ecommerce  from "../assest/image/webdevelopment/Ecommerce.png";
import food from "../assest/image/webdevelopment/food.png";
import realstate from "../assest/image/webdevelopment/real.png";
import educationlearning from "../assest/image/webdevelopment/Navy1.png";
import blockchain from "../assest/image/webdevelopment/analysis.jpg";
import blueapp from "../assest/image/webdevelopment/Blueapp.png";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";





let cardsData = [
    {
      iconType: "logo",
      iconName: "apple",
      title: "iOS App Development",
    },
    {
      iconType: "logo",
      iconName: "android",
      title: "Android App Development",
    },
    {
      iconType: "",
      iconName: "slideshow",
      title: "Web App Development",
    },
    {
      iconType: "logo",
      iconName: "react",
      title: "Hybrid-Native App Development",
    },
    {
      iconType: "",
      iconName: "credit-card",
      title: "Multiple Payment",
    },
    {
      iconType: "",
      iconName: "globe",
      title: "Multi-Language",
    },
    {
      iconType: "",
      iconName: "chart",
      title: "Advanced Analytics",
    },
    {
      iconType: "",
      iconName: "mobile",
      title: "Mobile Friendly",
    },
    {
      iconType: "solid",
      iconName: "discount",
      title: "Discounts & Promo",
    },
    {
      iconType: "",
      iconName: "map",
      title: "Geo Location",
    },
    {
      iconType: "",
      iconName: "star",
      title: "Reviews & Ratings",
    },
    {
      iconType: "",
      iconName: "bell",
      title: "Push Notification",
    },
  ];
  
let featuredWorks = [
    {
      imgSrc: bitcoin,
      title: "Bitcoin Insider",
    },
    {
      imgSrc: stock,
      title: "Business of App",
    },
    {
      imgSrc: analysis,
      title: "Digital NYC",
    },
  ];
  
  let customizedServices = [
    {
      imgSrc: ecommerce,
      title: "Ecommerce & Marketplace Solution",
    },
    {
      imgSrc: food,
      title: "Food & Beverage Solution",
    },
    {
      imgSrc: realstate,
      title: "Real Estate Solution",
    },
    {
      imgSrc: educationlearning,
      title: "Education & Learning",
    },
    {
      imgSrc: blockchain,
      title: "Blockchain Development",
    },
    {
      imgSrc: blueapp,
      title: "On-Demand App Solution",
    },
  ];
  let services = [
    {
      icon: 'bx bx-analyse',
      title: 'Free Cost -Analysis',
      description: 'Receive free cost estimates and great suggestions on your mobile app development concept from professionals in the field.',
    },
    {
      icon: 'bx bx-shield',
      title: 'Super Skilled Developers',
      description: 'Expert developers with the technical skills to handle any complexity degree of app development projects.',
    },
    {
      icon: 'bx bx-palette',
      title: 'Beautiful App Design',
      description: 'Beautiful designs for your business apps are created by our dedicated in-house design studio.',
    },
    {
      icon: 'bx bx-check-shield',
      title: 'Superior Quality',
      description: 'Our thorough quality assurance and testing procedures guarantee that the apps are of the finest quality and error-free.',
    },
    {
      icon: 'bx bx-mobile-alt',
      title: 'Easy To Use App',
      description: 'We design incredibly functional & user-friendly apps. Obtain trustworthy app development for your company.',
    },
    {
      icon: 'bx bx-customize',
      title: 'Fully Customized App',
      description: 'Have your apps created the way you want. Create apps that are tailored to your company\'s needs.',
    },
    {
      icon: 'bx bx-support',
      title: 'Hand Holding Approach',
      description: 'Get accurate sector insights with the right direction. Let industry professionals guide you to success.',
    },
    {
      icon: 'bx bx-headphone',
      title: '24*7 Customer Support',
      description: 'You will always receive technical support thanks to our devoted customer service, which is available round-the-clock.',
    },
  ];
  

let MobileDevelopment = () => {
  return (
    <React.Fragment>
      <Header />
      {/* Hero Banner development start */}
      <section className="hero_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero_txt">
                <h2>Experience A World-Class Mobile App Development Service</h2>
                <p>
                  Create Cheap, User-Friendly, and Feature-Rich Mobile
                  Applications For Your Company
                </p>
                <button className="btn text-white">Book a Free Demo</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero_img">
                <img src={herobanner} alt="image" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Banner develop finish */}
      {/* Vast Mobile App Development start */}
      <section className="vast_mobile">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_vast">
                <h2>Vast Mobile App Development Services We Offer</h2>
              </div>
            </div>
          </div>

          <div className="row">
          {cardsData.slice(0, 4).map((card, index) => (
              <div
                className="col-md-3"
                data-aos={index % 2 === 0 ? "flip-down" : "flip-right"} // Alternates between flip-down and flip-right
                key={index}
              >
                <div className="vast_card">
                  <div className="apple_icon">
                    <box-icon
                      type={card.iconType}
                      name={card.iconName}
                      size="80px"
                      color="#fff"
                    ></box-icon>
                    <h2>{card.title}</h2>
                  </div>
                  <div className="apple_btn">
                    <span>
                      <box-icon
                        name="chevron-right"
                        size="80px"
                        color="#8BC541"
                      ></box-icon>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
            <div className="row pt-4 business_heading align-items-center">
                <div className="col-md-8">
                    <div className="bn_txt">
                        <h2>Take Your Business to Next Level With Our Mobile App Development Service</h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bn_bun text-center">
                        <button className="btn text-white">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* Vast Mobile App Development finish */}
                {/* Our Quality work get start */}
                <section className="quality_work">
      <div className="row">
        <div className="col-12">
          <div className="quality_heading text-center pb-4">
            <h2>Our Quality Works Get Featured</h2>
          </div>
        </div>
        <div className="row">
          {featuredWorks.map((work, index) => (
            <div className="col-md-4" key={index}>
              <div className="bitcoin_insider">
                <img src={work.imgSrc} alt="img" className="img-fluid" />
                <h2>{work.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row py-5">
        <div className="col-12">
          <div className="quality_heading text-center pb-4">
            <h3>Fully Customized Mobile App Development Services For Your Business</h3>
          </div>
        </div>
        <div className="row">
          {customizedServices.slice(0, 3).map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="bitcoin_insider">
                <img src={service.imgSrc} alt="img" className="img-fluid" />
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          {customizedServices.slice(3).map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="bitcoin_insider">
                <img src={service.imgSrc} alt="img" className="img-fluid" />
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
                     </section>
                {/* Our quality work get finish */}

                <section className="vast_mobile">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_vast">
                <h2>A Complete Feature-Suite To Build Your Custom Mobile Apps</h2>
              </div>
            </div>
          </div>

          <div className="row">
          {cardsData.slice(4).map((card, index) => (
              <div
                className="col-md-3"
                data-aos={index % 2 === 0 ? "flip-down" : "flip-right"} // Alternates between flip-down and flip-right
                key={index}
              >
                <div className="vast_card ">
                  <div className="apple_icon">
                    <box-icon
                      type={card.iconType}
                      name={card.iconName}
                      size="80px"
                      color="#fff"
                    ></box-icon>
                    <h2>{card.title}</h2>
                  </div>
                  <div className="apple_btn">
                    <span>
                      <box-icon
                        name="chevron-right"
                        size="80px"
                        color="#8BC541"
                      ></box-icon>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
            

        </div>
      </section>
      <section className="why_choose py-5">
      <div className="col-12">
              <div className="heading_vast">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="icon-container mb-3">
                  <i className={`bx ${service.icon} bx-lg`}></i>
                </div>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Contactus/>
    <Footer/>

    </React.Fragment>
  );
};
export default MobileDevelopment;
