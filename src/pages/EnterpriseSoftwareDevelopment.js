import React from "react";
import "./EnterpriseSoftwareDevelopment.css";
import Header from "../components/Header.js";
import Contactus from "../components/Contactus.js";
import Footer from "../components/Footer.js";
import herobanner from "../assest/image/mobiledevelopment/bannner.png";
import enhance from "../assest/image/mobiledevelopment/a1.png";
import increase from "../assest/image/mobiledevelopment/a2.png";
import enhanceing from "../assest/image/mobiledevelopment/a3.png";
import efficence from "../assest/image/mobiledevelopment/a4.png";
import reduce from "../assest/image/mobiledevelopment/a5.png";
import producer from "../assest/image/mobiledevelopment/a6.png";

const choosecustom = [
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

const EnterpriseSoftwareDevelopment = () => {
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
          <div className="row">
            {/* First Section */}
            <section className="row ">
              {choosecustom.slice(0, 3).map((item, index) => (
                <div key={index} className="col-md-4 mb-4 h-100">
                  <div className="software_solutions text-center">
                    <img
                      decoding="async"
                      width="140"
                      height="126"
                      src={item.imageUrl}
                      className="img-fluid"
                      alt={item.title}
                    />
                    <h5 className="mt-3">
                      {item.title}
                    </h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Second Section */}
            <div className="row">
              {choosecustom.slice(3, 6).map((item, index) => (
                <div key={index} className="col-md-4 mb-4 h-100">
                  <div className="software_solutions text-center">
                    <img
                      decoding="async"
                      width="140"
                      height="126"
                      src={item.imageUrl}
                      className="img-fluid"
                      alt={item.title}
                    />
                    <h5 className="mt-3">
                      {item.title}
                    </h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="crm">

                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose custom enterprises finish */}
      <Contactus/>
      <Footer/>
   


    </React.Fragment>
  );
};

export default EnterpriseSoftwareDevelopment;
