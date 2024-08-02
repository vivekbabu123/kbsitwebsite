import React from "react";
import "./EnterpriseSoftwareDevelopment.css";
import Header from "../components/Header.js";
import Contactus from "../components/Contactus.js";
import Footer from "../components/Footer.js";
import Slider from "react-slick"; // Make sure to import Slider here
import herobanner from "../assest/image/mobiledevelopment/bannner.png";
import enhance from "../assest/image/mobiledevelopment/a1.png";
import increase from "../assest/image/mobiledevelopment/a2.png";
import enhanceing from "../assest/image/mobiledevelopment/a3.png";
import efficence from "../assest/image/mobiledevelopment/a4.png";
import reduce from "../assest/image/mobiledevelopment/a5.png";
import producer from "../assest/image/mobiledevelopment/a6.png";
import crm from "../assest/image/mobiledevelopment/b11.png";
import service_plan from "../assest/image/mobiledevelopment/b2.png";
import financial_management from "../assest/image/mobiledevelopment/b2.png";
import gps from "../assest/image/mobiledevelopment/b3.png";
import mobility from "../assest/image/mobiledevelopment/b5.png";
import analytics from "../assest/image/mobiledevelopment/b6.png";
import bpe from "../assest/image/mobiledevelopment/b7.png";
import enterprise_solution from "../assest/image/mobiledevelopment/b.png";
import real_time_data from "../assest/image/mobiledevelopment/b9.png";
import hr from "../assest/image/mobiledevelopment/b10.png";
import bitcoin from "../assest/image/webdevelopment/bitcoin.jpg";
import stock from "../assest/image/webdevelopment/stock.jpg";
import analysis from "../assest/image/webdevelopment/analysis.jpg";
import enterpslide1 from "../assest/image/mobiledevelopment/white-blue1.png";
import enterpslide2 from "../assest/image/mobiledevelopment/white-blue2.png";
import enterpslide3 from "../assest/image/mobiledevelopment/white-blue3.png";
import testominal2 from "../assest/image/mobiledevelopment/grey_testominal.png";

// Testimonials array
const testimonials = [
  {
    image: enterpslide1,
    description:
      "With a system designed to meet your needs, you can manage your digital assets simply and quickly.",
    title: "CMS Solutions: Create & Manage Digital Content",
    position: "(Sr IT Director at Instrek & ID Design Ltd)",
  },
  {
    image: enterpslide2,
    description:
      "To expand income opportunities, eliminate inefficient workflows and improve the effectiveness of internal and customer-facing processes.",
    title: "BPMS Solutions: Automate Business Processes",
    position: "",
  },
  {
    image: enterpslide3,
    description:
      "With unique solutions to streamline each relationship-related procedure, you may effectively increase revenue.",
    title: "CRM Solutions: Improved Customer Relationships",
    position: "",
  },
];
const testimonials2 = [
  {
    title: "Ideation",
    description: "Reviewing the business scope. Completing the app idea.",
  },
  {
    title: "UI/UX Designing",
    description: "Finishing up the user interface. Wireframing.",
  },
  {
    title: "Development",
    description: "Creating the application code. Analytical advancement.",
  },
  {
    title: "Testing",
    description: "Testing many devices. Testing the UI/UX.",
  },
  {
    title: "Launch & Marketing",
    description:
      "Performance evaluation and improvement. Publish on appropriate platforms.",
  },
];

// Featured works array
const featuredWorks = [
  { imgSrc: bitcoin, title: "Bitcoin Insider" },
  { imgSrc: stock, title: "Business of App" },
  { imgSrc: analysis, title: "Digital NYC" },
];

// Choose custom solutions array
const chooseCustom = [
  {
    title: "Enhanced Business Efficiency",
    description:
      "Better coordination, easier report exchange, and improved decision-making skills",
    imageUrl: enhance,
  },
  {
    title: "Increased Productivity Overall",
    description:
      "No matter where you are, having access to the right information at the right time leads to higher productivity.",
    imageUrl: increase,
  },
  {
    title: "Enhancing Communication",
    description:
      "Real-time data and information that is available to the entire organisation will improve communication.",
    imageUrl: enhanceing,
  },
  {
    title: "Operational Efficiency",
    description:
      "Streamlined processes that enhance the overall productivity of the organization.",
    imageUrl: efficence,
  },
  {
    title: "Reduced Operational Costs",
    description:
      "Encourage access to applications & information via self-owned devices to cut on support costs.",
    imageUrl: reduce,
  },
  {
    title: "Get Rid of Any Unnecessary Procedures",
    description:
      "Enterprise software reduces redundant processes and improves worker performance.",
    imageUrl: producer,
  },
];

// Additional features array
const additionalFeatures = [
  { title: "Customer Relationship Management", imageUrl: crm },
  { title: "Service Planning & Scheduling", imageUrl: service_plan },
  { title: "Financial Management", imageUrl: financial_management },
  { title: "PoI & GPS Tracking", imageUrl: gps },
  { title: "Mobility Optimization", imageUrl: mobility },
  { title: "Analytics", imageUrl: analytics },
  { title: "Business Process Enrichment", imageUrl: bpe },
  { title: "Enterprise Solution", imageUrl: enterprise_solution },
  { title: "Real Time Data Processing", imageUrl: real_time_data },
  { title: "Human Resources Management", imageUrl: hr },
];

// FlipBox component
const FlipBox = ({ type, name, title, frontContent, backContent }) => (
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
              <box-icon
                type={type}
                name={name}
                size="50px"
                color="#fff"
              ></box-icon>
            </div>
            <p className="card-text">{backContent}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main component
const EnterpriseSoftwareDevelopment = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <React.Fragment>
      <Header />

      {/* Enterprises hero start */}
      <section className="hero_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero_txt">
                <h2>Enterprise Software Development Company</h2>
                <p>
                  Automate Your Company Operations To Many Times Increase
                  Productivity
                </p>
                <button className="btn text-white">Book a Free Demo</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero_img">
                <img src={herobanner} alt="Hero Banner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enterprises hero finish */}

      {/* Why choose custom enterprises start */}
      <section className="custom_software">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="custom_heading text-center">
                <h1>
                  Why Choose Custom Software Solutions To Accelerate Your
                  Business Growth?
                </h1>
              </div>
            </div>
          </div>

          {/* First Section */}
          <div className="row">
            {chooseCustom.slice(0, 3).map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4 h-100">
                <div className="software_solutions text-center">
                  <img
                    decoding="async"
                    width="140"
                    height="126"
                    src={item.imageUrl}
                    className="img-fluid"
                    alt={item.title}
                  />
                  <h5 className="mt-3">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Section */}
          <div className="row">
            {chooseCustom.slice(3, 6).map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4 h-100">
                <div className="software_solutions text-center">
                  <img
                    decoding="async"
                    width="140"
                    height="126"
                    src={item.imageUrl}
                    className="img-fluid"
                    alt={item.title}
                  />
                  <h5 className="mt-3">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="additional_features">
        <div className="container">
          <div className="row">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="col-md-3 mb-4 h-100">
                <div className="feature_solutions text-center">
                  <img
                    src={feature.imageUrl}
                    className="img-fluid"
                    alt={feature.title}
                  />
                  <h5 className="mt-3">{feature.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get custom software section */}
      <section className="driven_quality mb-3">
        <div className="container">
          <div className="row align-items-center py-2">
            <div className="col-lg-7 col-md-6">
              <div className="driven_txt">
                <h2 className="text-white fw-bold">
                  Get custom software instead of lagging behind ready-made
                  solutions to double efficiency.
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="driven_btn text-center">
                <button className="text-white btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality work section */}
      <section className="quality_work">
        <div className="container">
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
        </div>
      </section>

      {/* Why choose Enterprises software development start */}
      <section className="why_enterpriseschoose">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="enterpriseswhy_heading">
                <h2>Why Choose Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="heading_whydevelopment pt-3">
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
                backContent="We offer a minimalistic setup to ensure your website loads faster"
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
      {/* why choose Enterprises software development finish */}

      {/* Testimonial Carousel */}
      <section className="testimonial-carousel">
        <div className="container">
          <h1 className="testonimal_heading pb-4">
            Experience Next Generation Enterprise Software Development Services
          </h1>
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="item--inner d-flex justify-content-around"
              >
                <div className="item--image">
                  <img
                    decoding="async"
                    src={item.image}
                    width={88}
                    height={88}
                    alt={item.title}
                  />
                  <div className="item--icon">“</div>
                </div>
                <div className="item--meta">
                  <div className="item--description">{item.description}</div>
                  <h3 className="item--title">{item.title}</h3>
                  <div className="item--position">
                    <span>{item.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* testomonial second part */}
      <section className="testomonial_second">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
            
                    <div className="testimonial-widget-container">
                      <div
                        id="testimonial-carousel"
                        className="testimonial-slider ct-slick-slider"
                      >
                        <div className="carousel-inner">
                          <Slider {...settings}>
                            {testimonials2.map((item, index) => (
                              <div
                                className="testimonial-item"
                                data-wow-duration="1.2s"
                                key={index}
                              >
                                <div className="testimonial-icon">
                                  <box-icon
                                    type="solid"
                                    name="quote-alt-right"
                                    size="72px"
                                  ></box-icon>
                                </div>

                                <div className="testimonial-description display-6">
                                  {item.description}
                                </div>
                            
                                  <div className="testimonial-meta">
                                    <h2 className="testimonial-title">
                                      {item.title}
                                    </h2>
                                    
                                  </div>
                                </div>
                           
                            ))}
                          </Slider>
                        </div>
                       
                      </div>
                    </div>
                  </div>
             
            <div className="col-md-6">
              <div className="testominal_2 text-center">
                <img src={testominal2} alt="img" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testominal second part */}

      <Contactus />
      <Footer />
    </React.Fragment>
  );
};

export default EnterpriseSoftwareDevelopment;
