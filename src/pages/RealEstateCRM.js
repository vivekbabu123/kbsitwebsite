import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import realstate1 from "../assest/image/realstate/heorealstate.webp";
import realstate2 from "../assest/image/realstate/1.png";
import realstate3 from "../assest/image/realstate/2.png";
import realstate4 from "../assest/image/realstate/3.png";
import realstate5 from "../assest/image/realstate/4.png";
import realstate6 from "../assest/image/realstate/5.png";
import realstate7 from "../assest/image/realstate/7.webp";
import Slider from "react-slick";
import realstate8 from "../assest/image/realstate/9.png";
import realstate9 from "../assest/image/realstate/10.png";
import realstate10 from "../assest/image/realstate/11.png";

import "./Realstatecrm.css";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

const testimonials3 = [
  {
    title:
      "Allow users to log in using numerous methods such as Facebook, Google, LinkedIn, and email.",
    description: "Seamless Social Login ",
  },
  {
    title:
      "Allow advanced search and filtering by property location, region covered, type, price, and so on.",
    description: "Advanced Search & Filter.",
  },
  {
    title:
      "Allow users to schedule visits for a preferred property with realtors/brokers as per their choice.",
    description: "Appointment Scheduling ",
  },
  {
    title:
      "Provide flexible & trusted payment gateways to let your users pay for their chosen property.",
    description: "ultiple Payment Gateways",
  },
];
const testimonials4 = [
    {
      title:
        "Brokers can add and manage real estate listings with images, descriptions, prices, and other details.",
      description: "Property Listing ",
    },
    {
      title:
        "According to their availability, brokers can approve or reject requests for appointment booking.",
      description: " Manage Appointments",
    },
    {
      title:
        "Give brokers a calendar view that includes all of the upcoming, recent, and prior reservations.",
      description: "Property Listing",
    },
    {
      title:
        "Take advantage of a broker who offers smooth commission/payment tracking for their specific programme.",
      description: "Manage Payments",
    },
  ];
const realStateCards = [
  {
    img: realstate2,
    title: "On-Demand Real Estate App",
    description:
      "Launch your branded real estate app, allowing users to browse, book, and pay for various properties listed.",
  },
  {
    img: realstate3,
    title: "Properties/Real Estate Brokers",
    description:
      "Create your own real estate marketplace solution to handle property listings, opening/closing hours, menus, and your staff.",
  },
  {
    img: realstate4,
    title: "Real Estate Aggregators",
    description:
      "Begin real estate aggregation services to simplify property discovery, comparison, and special offers, among other things.",
  },
];

const whyChooseUsData = [
  {
    icon: "comment-detail",
    title: "Omnichannel communication",
    description: "to capture inquiries from multiple channels",
    animation: "flip-left",
  },
  {
    icon: "campaign",
    title: "Built-in campaigns",
    description: "for sending out drip email campaigns",
    animation: "flip-right",
  },
  {
    icon: "task",
    title: "Project management",
    description: "tools to keep tabs on all your ongoing projects",
    animation: "flip-left",
  },
  {
    icon: "link",
    title: "Third-party integrations",
    description: "and APIs to improve productivity",
    animation: "flip-left",
  },
  {
    icon: "cog",
    title: "Complete customization",
    description: "to accommodate the unique processes of real estate agents",
    animation: "flip-right",
  },
  {
    icon: "user-detail",
    title: "Self-service portals",
    description:
      "to connect both sellers and buyers directly with your business",
    animation: "flip-left",
  },
];

const stepsTop = [
  {
    number: "01",
    description: "Manage leads and track their history",
    item:
      "Create leads from a variety of sources, including social media, offline marketing, business cards, and internet campaigns, and monitor their development until an opportunity arises. You can discover which prospects your team should concentrate on using CRM s lead score feature. You can program automatic email responses to nurture inquiries after they enter your funnel and encourage engagement.",
    icon: "check",
  },
  {
    number: "02",
    description: "Boost productivity with powerful automation",
    item:
      "Use predetermined workflow rules to automatically assign leads to salespeople depending on territory, industry, prospective transaction size, or even in a round-robin method. You may alert the designated sales professional each time a prospect enters your CRM funnel and give them tasks and reminders to follow up.",
    icon: "pencil",
  },
  {
    number: "03",
    description: "Artificial Intelligence to improve your bottom line",
    item:
      "It offers wise recommendations for the most effective time and day of the week to contact each consumer, allowing you to get in touch with them right away. It is beneficial to understand the usage trends of your team members and provide them with tailored automation suggestions so they can finish their recurring chores more quickly.",
    icon: "data",
  },
  {
    number: "04",
    description: "Keep your team in the loop, wherever you are.",
    item:
      "To easily share CRM records, statistics, and analytics with your teammates, create helpful Commands and Bots within your chat tools. Set up SalesSignals in CRM to get new chat notifications and send CRM to lead approvals, and reminders for events, and calls through your chat tool.",
    icon: "link",
  },
];

const stepsBottom = [
  {
    number: "05",
    description: "Centralized Document Management",
    item:
      "You have consolidated access to crucial documents, like property details, service reports, and transaction records, thanks to CRM. When you only want to provide your leads with the most recent property document, there is no need to search through all of your documents.",
    icon: "check",
  },
  {
    number: "06",
    description: "Easy invoices and bills",
    item:
      "By letting your team create and maintain quotes, invoices, price books, and bills in their accounts, CRM aids in the completion of your sales cycle. Use robust inventory management tools to control all your post-sales procedures, and use personalized email and invoice templates to distribute quotations and bills to prospects.",
    icon: "comment-detail",
  },
  {
    number: "07",
    description: "Make data-driven decisions with powerful in-built analytics",
    item:
      "You may monitor your progress towards your goals, agent activity reports, compensation adjustments, and abandoned opportunities in your pipeline with the use of CRM s analytics. You may set up revenue projections based on your areas, track lease expirations, and gauge KPIs using target meters.",
    icon: "support",
  },
  {
    number: "08",
    description: "Seamless and powerful integrations",
    item:
      "Through a single CRM interface, manage the whole sales cycle. You may obtain a unified view of any property s availability, address, house value, and comparable homes within CRM. It also enables you to extend your CRM account s integrated click-to-call, automated call recording, call logging, and analytics features.",
    icon: "check-circle",
  },
];
const CountUp = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const incrementTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);
  return (
    <div className="crm_real">
      <h2>{count}%</h2>
    </div>
  );
};


  

  
const accordionData = [
    { id: 1, title: "Comprehensive Dashboard", content: "Helping families live intelligently means we’re always working to bring our customers the latest." },
    { id: 2, title: "Manage Listings", content: "Manually add new listings, amend, and check broker requests to guarantee quality." },
    { id: 3, title: "Manage Bookings", content: "Admins can see, manage, and track booking histories as well as manually update and change reservations." },
    { id: 4, title: "Analytics & Reports", content: "Discover the metrics that matter most with real-time insights and comprehensive company reports." },
   
  ];

const RealEstateCRM = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const [openIndex, setOpenIndex] = useState(null);
  
    const toggleAccordion = (id) => {
      setOpenIndex(openIndex === id ? null : id);
    };

  return (
    <React.Fragment>
      <Header />
      {/* Hero Real Estate Section */}
      <section className="hero_realstate">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="realstatehero_txt">
                <h2>Build Your Branded Real Estate Application</h2>
                <p>
                  With the help of our real estate app development services,
                  grow your real estate company.
                </p>
                <button className="btn">
                  Get started
                  <span className="ps-2">
                    <box-icon
                      type="solid"
                      color="#fff"
                      size="18px"
                      name="rocket"
                    ></box-icon>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="realstateimg text-center">
                <img src={realstate1} alt="Real Estate" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Real Estate Section End */}

      {/* Create Real Estate App Section */}
      <section className="realstate_model">
        <div className="container">
          <h1 className="realstate_heading text-center">
            Create Online Real Estate App For Every Business Model
          </h1>
          <div className="row">
            {realStateCards.map((card, index) => (
              <div className="col-md-4" key={index}>
                <div className="realstatecard">
                  <img src={card.img} alt={card.title} className="img-fluid" />
                  <h4 className="fw-bold py-2">{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Create Real Estate App Section End */}

      {/* What is Real Estate Section */}
      <section className="whatrealstate">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="realstate_txt">
                <h2>What is a real estate CRM software?</h2>
                <p>
                  Modern sales process management, property management, and
                  automation are available for real estate agents, real estate
                  developers, and brokerage firms with CRM, which was designed
                  for real estate agencies of all sizes. With the all-in-one
                  real estate CRM software designed for your company, close more
                  deals.
                </p>
                <p>
                  The diverse needs of real estate agents and firms are catered
                  to by real estate CRM software, which aids in managing
                  interactions between buyers, sellers, agents, brokers,
                  developers, and financial institutions. The real estate CRM
                  system handles the end-to-end process management for real
                  estate companies, handling everything from handling incoming
                  requests to creating price quotes, from selling commercial
                  real estate to property management.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="realstate_img">
                <img
                  src={realstate5}
                  alt="Real Estate CRM"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of CRM for Realtors Section */}
      <section className="whatrealstate">
        <div className="container">
          <h1 className="realstate_heading text-center">
            How is CRM important for realtors?
          </h1>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="realstate_txt">
                <p>
                  It’s no surprise that 82% of new property sales come through
                  recommendations from current contacts, prior clients, family,
                  friends, or other relatives since real estate is all about
                  establishing trust. However, purchasing or selling real estate
                  firms is a drawn-out procedure that requires numerous
                  follow-ups and renegotiations. Under such circumstances,
                  deploying real estate CRM software provides realtors with an
                  effective method to manage contacts, schedule activities,
                  check their pipelines, and maintain an organization to forge
                  fruitful connections and close deals.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="realstate_img">
                <img
                  src={realstate6}
                  alt="Importance of CRM"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Importance of CRM for Realtors Section End */}

      {/* Technology Solution Section */}
      <section className="realstate_tecnolgy">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tecnolgies_realheading text-center">
                <h1>
                  Get A Complete Technology Solution To Launch, Run & Grow Your
                  Real Estate Business Online App
                </h1>
                <p>
                  With our real estate app creation services, you can provide
                  users, builders, and brokers with a powerful tool for finding
                  and selling properties.
                </p>
                <img
                  src={realstate7}
                  alt="Technology Solution"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technology Solution Section End */}

      {/* Why Choose Real Estate CRM Section */}
      <section className="whychoose_realstate">
        <div className="container">
          <h1 className="realstate_heading text-center pb-3">
            Why choose CRM for your real estate business?
          </h1>
          <div className="row g-3">
            {whyChooseUsData.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className={`realstate_why text-white`}
                  data-aos={item.animation}
                >
                  <box-icon
                    name={item.icon}
                    size="52px"
                    color="#fff"
                  ></box-icon>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span>
                    <box-icon
                      name="chevron-right"
                      size="48px"
                      color="#fff"
                    ></box-icon>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Real Estate CRM Section End */}

      {/* How It Works Section */}
      <section className="notch_web1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="notch_web-heading">
                <h1 className="text-center pt-5">How does it work?</h1>
              </div>
            </div>
          </div>
          <div className="row g-3">
            {stepsTop.map((step, index) => (
              <div className="col step" key={index}>
                <div className="step-icon">
                  <box-icon name={step.icon} color="white"></box-icon>
                </div>
                <div className="step-item2">
                  <div className="step-number">{step.number}</div>
                  <div className="step-description">{step.description}</div>
                  <div className="step-item text-white">{step.item}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="row g-3">
            {stepsBottom.map((step, index) => (
              <div className="col step" key={index}>
                <div className="step-icon">
                  <box-icon name={step.icon} color="white"></box-icon>
                </div>
                <div className="step-item2">
                  <div className="step-number">{step.number}</div>
                  <h2>
                    <div className="step-description fw-bold">
                      {step.description}
                    </div>
                  </h2>
                  <p>
                    <div className="step-item text-white">{step.item}</div>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pinacle_start my-5">
        <div className="container text-center">
          <h2>
            Become The Next Leading Name In Real Estate World With Our Advanced
            Tech Suite
          </h2>
          <button className="btn text-white bg-success px-5 py-3 fs-5">
            Get in Touch
          </button>
        </div>
      </section>

      {/* How It Works Section End */}
      {/* crm software start */}
      <section className="crm_realsoftware">
        <h2 className="realstate_heading text-center">
          Benefits of a CRM software
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="improve_item">
                <CountUp value={250} />
                <p>Improvement in lead conversion rates</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="improve_item">
                <CountUp value={41} />
                <p>Revenue increase per sales person.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="improve_item">
                <CountUp value={30} />
                <p>Improvement in customer retention rates</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="improve_item">
                <CountUp value={38} />
                <p>Increase in customer satisfaction rates</p>
              </div>
            </div>
          </div>
          <h6 className="count_food text-center">
            You have better things to do than worry about IT for your small
            business.
            <span className="text-dark"> Let’s Discuss about Project.</span>
          </h6>
        </div>
      </section>
      {/* crm software finish */}
      {/* exclusive features start */}
      <section className="exclusive_realstate">
        <div className="container">
          <h2 className="realstate_heading text-center">
            Exclusive Features For Your Online Real Estate Business
          </h2>
          <p className="text-center fs-5">
            Our real estate app developers work with you to create a
            feature-rich property listing tool.
          </p>
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="exclusiverealslider">
                <h2 className="mb-4">Real Estate User App </h2>
                <Slider {...settings}>
                  {testimonials3.map((item, index) => (
                    <div key={index} className="item--inner">
                      <div className="realdescription">
                        <h3 className="item--description fw-bold">
                          {item.description}
                        </h3>
                        <span className="realtitle">{item.title}</span>
                        <div className="item--position">
                          <span>{item.position}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-md-7">
              <div className="exclusive_img">
                <img
                  src={realstate8}
                  alt="img"
                  className="img-fluid w-75 d-block m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* exclusive features finish */}
      {/* admit start */}
      <section className="admi_realstate">
        <div className="container">
          <h2 className="realstate_heading text-center">Admin Panel</h2>
          <div className="row">
          <div className="col-md-6">
          
              {accordionData.slice(0, 2).map((item) => (
                <div key={item.id}>
                  <button
                    className={`accordion ${openIndex === item.id ? "active" : ""}`}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    {item.title}
                  </button>
                  <div className="panel" style={{ display: openIndex === item.id ? "block" : "none" }}>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              {accordionData.slice(2).map((item) => (
                <div key={item.id}>
                  <button
                    className={`accordion ${openIndex === item.id ? "active" : ""}`}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    {item.title}
                  </button>
                  <div className="panel" style={{ display: openIndex === item.id ? "block" : "none" }}>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* admin finish */}
      <section className="exclusive_realstate">
        <div className="container">
          
          <div className="row align-items-center">
          <div className="col-md-7">
              <div className="exclusive_img">
                <img
                  src={realstate9}
                  alt="img"
                  className="img-fluid w-75 d-block m-auto"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="exclusiverealslider">
                <h2 className="mb-4">Broker App/ Dashboard  </h2>
                <Slider {...settings}>
                  {testimonials4.map((item, index) => (
                    <div key={index} className="item--inner">
                      <div className="realdescription">
                        <h3 className="item--description fw-bold">
                          {item.description}
                        </h3>
                        <span className="realtitle">{item.title}</span>
                        <div className="item--position">
                          <span>{item.position}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
         
          </div>
        </div>
      </section>
      <section className="exclusive_realstate">
        <div className="container-fluid">
          
          <div className="row align-items-center">
          <div className="col-md-6">
              <div className="exclusive_img">
                <img
                  src={realstate10}
                  alt="img"
                  className="img-fluid w-75 d-block m-auto"
                />
              </div>
            </div>
            <div className="col-md-6">
                    <h2>Ready To Build Your Fully Customizable Real Estate Application?</h2>
            </div>
         
          </div>
        </div>
      </section>
      <Contactus/>
    <Footer/>
    </React.Fragment>
  );
};

export default RealEstateCRM;
