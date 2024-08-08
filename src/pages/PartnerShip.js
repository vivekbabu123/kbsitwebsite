import React, { useState } from "react";
import Header from "../components/Header";
import "./partnership.css";
import heropartnerimg from "../assest/image/partnership/partner_banner.webp";
import heropartnerimg1 from "../assest/image/partnership/1.webp";
import partericon from "../assest/image/partnership/2.svg";
import partericon1 from "../assest/image/partnership/3.svg";
import partericon2 from "../assest/image/partnership/4.svg";
import partericon3 from "../assest/image/partnership/5.svg";
import partnera1 from '../assest/image/partnership/a1.webp';
import partnera2 from '../assest/image/partnership/a2.webp';
import partnera3 from '../assest/image/partnership/a3.webp';
import partnera4 from '../assest/image/partnership/a4.webp';
import partnera5 from '../assest/image/partnership/a6.webp';
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

const Partnership = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const offerings = [
    {
      img: heropartnerimg1,
      title: "Partnership Programme for Selling",
      description:
        "Join our network of partners to help the demand for our products grow as a result of the network effect. As you sell on-demand technology suites to all industries, your earning potential will grow.",
    },
  ];

  const benefits = [
    "A percentage of the profits from each pre-built or custom product sold.",
    "Access only to our CRM panel.",
    "Thorough marketing literature.",
    "Sell the solution at any price mutually agreed upon.",
  ];

  const teams = [
    {
      img: partericon,
      title: "Veteran Developers",
      description: [
        "Our talented team of programmers has years of experience creating cutting-edge app solutions.",
        "Like their creations, they’re agile in their work approach and meeting timelines."
      ]
    },
    {
      img: partericon1,
      title: "Solution-focused Team",
      description: [
        "We are aware that some clients may have specific requirements that seem insurmountable.",
        "But you can rest assured that we fulfil our promises whether it's snow, sleet, or hail."
      ]
    },
    {
      img: partericon2,
      title: "Speedy Turnaround",
      description: [
        "The Code Brew team works on each project with the goal of achieving complete client satisfaction.",
        "As soon as we are aware of the client's needs, we immediately get to work."
      ]
    },
    {
      img: partericon3,
      title: "Quality Assurance Team",
      description: [
        "We ensure that all solutions meet high-quality standards before delivery.",
        "Our team conducts thorough testing to address any issues proactively."
      ]
    }
  ];

  const advantages = [
    {
      img: partnera1,
      title: "Advantages of Adding to Our Partner Community",
      description: "Pick one of our partnership plans right away to dive into financial independence."
    },
    {
      img: partnera2,
      title: "Selling with an Edge",
      description: "Utilise the trust and brand value we have built up over the past ten years. We have only just begun, but we have already created thousands of reliable app solutions."
    },
    {
      img: partnera3,
      title: "Develop Your Sales Skills",
      description: "We think that partners advance each other. Access content that has been specially curated to help you improve your salesmanship skills."
    },
    {
      img: partnera4,
      title: "Get A Branded Website",
      description: "Expand your brand reach as you come in partnership with us. Get your personalized branded website designed exclusively for you by our experts."
    },
    {
      img: partnera5,
      title: "Committed 24 Hour Support",
      description: "Receive immediate, thorough technical and business support from our experts, who are available around-the-clock."
    },
  ];

  const accordionData = [
    {
      id: 1,
      title: "What types of partnership plans do you provide?",
      content:
        "We offer a standard and a premium partnership plan, the details of which are mentioned above. But if you want to know more or have a query, do reach out (insert form) to us.",
    },
    {
      id: 2,
      title: "Am I eligible to become a partner?",
      content:
        "No matter in which phase or industry you are as an entrepreneur or marketer, we have something that will bring value to you as a Code Brew partner",
    },
    {
      id: 3,
      title: "Is my income as a partner capped in any way?",
      content:
        "The best thing about partnering with us is that there is no cap on how much you can make through any of our partnership plans. If your marketing abilities are up to par, luck will come your way.",
    },
    {
      id: 4,
      title: "How much could a partnership earn in fees?",
      content:
        "For context, consider that the majority of our partners make twice this amount in the first three months of their partnership with us. Additionally, after paying this fee, you have lifetime access to free marketing and training courses.",
    },
    {
      id: 5,
      title: "What marketing material will be provided?",
      content:
        "All marketing literature—like brochures, PPT, etc–and product demos will be provided. You’ll also get interactive mentoring sessions. Besides, we will also fetch you region inbound leads for you to convert them easily.",
    },
   
  ];

  return (
    <React.Fragment>
      <Header />
      {/* hero partnership start */}
      <section className="hero_partnership">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="heropartnershiptxt">
                <h2>
                  A business must be started by an entrepreneur, and brand
                  building requires a partner.
                </h2>
                <p>
                  Joining our partner community is the ultimate step towards
                  developing a brand.
                </p>
                <button className="btn text-white">Get Started</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="heropartnerimg">
                <img src={heropartnerimg} alt="Hero Partnership" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero partnership finish */}

      {/* our offering and solution start */}
      <section className="offering_solution">
        <div className="container">
          <h2 className="offering_heading text-center">
            Our Offerings & Solutions
          </h2>
          <p className="offering_title text-center">
            Two partnership models that Code Brew offers create the ideal
            environment for increased revenue and brand value for all parties
            involved.
          </p>
          <div className="row align-items-center pt-4">
            {offerings.map((offering, index) => (
              <React.Fragment key={index}>
                <div className="col-md-3">
                  <div className="partner_img">
                    <img
                      src={offering.img}
                      alt={`Offering ${index + 1}`}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="partnertxt text-center">
                    <h2>{offering.title}</h2>
                    <p>{offering.description}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="row">
            {benefits.map((benefit, index) => (
              <div className="col-md-6 col-lg-3 col-xl-3" key={index}>
                <div className="offer_card h-100">
                  <box-icon
                    name="check-square"
                    color="#3eea7e"
                    size="41px"
                  ></box-icon>
                  <h5>{benefit}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="heropartnershiptxt mt-4">
            <button className="btn text-white">Get Started</button>
          </div>
        </div>
      </section>
      {/* our offering and solution finish */}

      {/* why should work kbit solution start */}
      <section className="whyshouldwork bg-dark">
        <div className="container">
          <h1 className="offering_heading text-center text-white">
            Why should you work with Kbit Solution
          </h1>
          <p className="offering_title text-center text-white">
            We’ve been in business for almost a decade now. And not without reason
          </p>
          <div className="row">
            {teams.map((team, index) => (
              <div className="col-md-6" key={index}>
                <div className="vertan_developer">
                  <img src={team.img} alt={team.title} className="img-fluid" />
                  <h2 className="text-white">{team.title}</h2>
                  {team.description.map((desc, descIndex) => (
                    <div className="vertan_check d-flex align-items-center" key={descIndex}>
                      <span>
                        <box-icon name='check' color="#3eea7e" size="60px"></box-icon>
                      </span>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* why should work kbit solution finish */}

      {/* advantage our partner community start */}
      <section className="advantagePartner_community">
        <div className="container">
          <div className="row">
            {advantages.map((advantage, index) => (
              <div className={index < 3 ? "col-md-6 col-xl-4 col-lg-4" : "col-md-6"} key={index}>
                <div className="partner_community text-center">
                  <img src={advantage.img} alt={`Advantage ${index + 1}`} className="img-fluid" />
                  <h2>{advantage.title}</h2>
                  <p>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* advantage our partner community finish */}

      {/* faq accordion start */}
      <section className="faq_accoprdian">
        <div className="container">
          <h1 className="offering_heading text-center">
            Frequently Asked Questions
          </h1>
          <div className="col-md-12">
         
            {accordionData.map((item) => (
              <div key={item.id}>
                <button
                  className={`accordion ${openIndex === item.id ? "active" : ""}`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  {item.title}
                </button>
                <div
                  className="panel"
                  style={{
                    display: openIndex === item.id ? "block" : "none",
                  }}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* faq accordion finish */}
      <Contactus/>
        <Footer/>
    </React.Fragment>
  );
};

export default Partnership;
