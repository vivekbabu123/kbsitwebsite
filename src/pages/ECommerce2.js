import React from "react";
import Header from "../components/Header";
import "./ECommerce2.css";
import ecommercehero1 from "../assest/image/ecommerce2/ecomsales.jpg";
import ecommercehero2 from "../assest/image/ecommerce2/online_store.png";
import ecommercehero3 from "../assest/image/ecommerce2/onlinemobile.png";
import Contactus from "../components/Contactus";
import Fotter from "../components/Footer";
import "boxicons";
import Footer from "../components/Footer";

const cardData = [
  {
    icon: "cube",
    title: "Start a store Immediately",
    description:
      "You may launch your online store in less than a week thanks to our ecommerce platform development solution.",
  },
  {
    icon: "target-lock",
    title: "No coding required",
    description:
      "We create it so you don’t need to be a coding expert to administer or update the market.",
  },
  {
    icon: "bulb",
    title: "24*7 Robust Support",
    description:
      "Technical help available 24/7 to guarantee that your issues are answered right away.",
  },
  {
    icon: "code-alt",
    title: "Full customized store",
    description:
      "Use Flixibility's app development services to customize your online store.",
  },
  {
    icon: "extension",
    title: "Full secured solution",
    description:
      "Our strong data protection system makes sure no one may access your important data without your knowledge.",
  },
];

const contentData = [
  {
    imgSrc: ecommercehero2,
    imgAlt: "Ecommerce Website",
    title: "Ecommerce Website",
    subtitle: "Dynamic",
    description:
      "Get a feature-rich e-commerce website that is easy to use to sell a variety of things that customers need while they are cooped up at home.",
    imgPosition: "left",
  },
  {
    imgSrc: ecommercehero3,
    imgAlt: "Mobile Apps",
    title: "Mobile Apps",
    subtitle: "Intuitive",
    description:
      "Launch full-featured, advanced ecommerce mobile apps for iOS and Android right away to protect your company from the Covid-19 effect.",
    imgPosition: "right",
  },
  {
    imgSrc: ecommercehero2,
    imgAlt: "Vendor Panel",
    title: "Vendor Panel",
    subtitle: "Advanced",
    description:
      "Simple to use merchant panel that allows suppliers to track orders, order information, transactions, and consumers who cannot reach them.",
    imgPosition: "left",
  },
  {
    imgSrc: ecommercehero3,
    imgAlt: "Powerful Admin Dashboard",
    title: "Powerful Admin Dashboard",
    subtitle: "Powerful",
    description:
      "With the aid of a potent admin panel that allows you to monitor and maintain control of your organization from a bird’s eye view, you can make your company coronavirus-proof.",
    imgPosition: "right",
  },
];

const featureData = {
  mobileApp: [
    {
      icon: 'cube',
      title: 'Scalability & Customization',
      description: 'A unique source code allowed your online store to expand at the same rate as your brand.',
    },
    {
      icon: 'target-lock',
      title: 'Social Media Integration',
      description: 'By allowing users to log in and register using their social network accounts, you may increase brand awareness.',
    },
    {
      icon: 'code-alt',
      title: 'Push Notifications',
      description: 'Continually reminds clients about new items, discounts, deals, and offers in order to increase sales.',
    },
    {
      icon: 'extension',
      title: 'Filters & Search Options',
      description: 'Utilize sophisticated filters and search functionality to make the search results as relevant to their needs as feasible.',
    },
  ],
  website: [
    {
      icon: 'cube',
      title: 'Interactive Interface',
      description: 'A website that adjusts your business identity and effectively conveys the essence of your products.',
    },
    {
      icon: 'target-lock',
      title: 'Product Navigation',
      description: 'Discover a simple navigation system that makes it easier to browse across various categories and products.',
    },
    {
      icon: 'code-alt',
      title: 'Hassle-free Shopping',
      description: 'Offering a smooth purchasing experience are features like geolocation support and completely integrated cart and checkout sites.',
    },
    {
      icon: 'extension',
      title: 'Featured Products',
      description: 'To draw more people and increase sales, draw attention to the things that are on sale, clearance, or new.',
    },
  ],
  adminPanel: [
    {
      icon: 'cube',
      title: 'Multi-store Functionality',
      description: 'The ability to add as many stores as needed will be advantageous to vendors and admin.',
    },
    {
      icon: 'target-lock',
      title: 'Order & User Management',
      description: 'Order management, from placement through delivery, is streamlined by managing buyers, sellers, and affiliates.',
    },
    {
      icon: 'code-alt',
      title: 'Reporting and Analytics',
      description: 'Get immediate information about customers, sales, transactions, and return customers on a daily, weekly, and monthly basis.',
    },
    {
      icon: 'extension',
      title: 'Rewards & Discounts',
      description: 'Take advantage of every chance you get to captivate and hook your audience with occasional discounts and deals.',
    },
  ],
};

const ECommerce2 = () => {
  return (
    <React.Fragment>
      <Header />
      {/* Start hero ecommerce */}
      <section className="hero_commerce">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="heading_commerce">
                <h2>Launch Your Online Marketplace Quickly</h2>
                <p>Kickstart your online sales with our platform's rapid setup and customizable features. Get your marketplace live in days, with seamless product management, secure payment integration, and 24/7 support. Experience a user-friendly, mobile-optimized design and scalable solutions tailored to your business needs. Start now and capture the online market effortlessly!

</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="flex-fill mx-2">
                <img
                  src={ecommercehero1}
                  alt="Marketplace illustration"
                  className="img-fluid opacity-75"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Finish hero ecommerce */}

      {/* Enterprises grade tech suite start */}
      <section className="Enterprises_grade">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="enterprise_heading">
                <h2>
                  Using An Enterprise-Grade Tech Suite, Launch An Online
                  Ecommerce Business
                </h2>
              </div>
            </div>
          </div>

          {contentData.map((item, index) => (
            <div className="row mt-4 align-items-center" key={index}>
              {item.imgPosition === "left" ? (
                <>
                  <div className="col-md-6">
                    <div className="ecom_webimg">
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="ecom_txt">
                      <h5>{item.subtitle}</h5>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <div className="ecom_txt">
                      <h5>{item.subtitle}</h5>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="ecom_webimg">
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Enterprises grade tech suite finish */}

      {/* Custom mobile apps start */}
      <section className="mobileecomm bg-dark text-white">
        <div className="container">
          <div className="heading_mobilecom text-center">
            <h1>
              Create Custom Mobile Apps That Produce the Best Results Using
              Online Ecommerce Marketplace
            </h1>
            <button className="btn">Get in Touch</button>
          </div>
        </div>
      </section>
      {/* Custom mobile apps finish */}

      {/* Why choose start */}
      <section className="why_ecomm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="why_chooseheading text-center">
                <h1>Why Choose Us</h1>
                <p>
                  We are the industry leaders among entrepreneurs worldwide,
                  <br /> renowned for developing beautiful eCommerce mobile apps
                  and websites that aim to establish distinctive marketplaces.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {cardData.map((card, index) => (
              <div key={index} className={`col-md-${index < 3 ? 4 : 6}`}>
                <div className="whycardecom align-items-center">
                  <box-icon
                    name={card.icon}
                    className="card-icon"
                    size="36px"
                    color="#34AD2F"
                  ></box-icon>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why choose finish */}

      <section className="mobileecomm bg-primary text-white">
        <div className="container">
          <div className="heading_mobilecom">
            <h1>
              Create a marketplace with seamless features to boost business
              proficiency and seize growth opportunities.
            </h1>
          </div>
        </div>
      </section>

      {/* Best-in-Class Features Start */}
      <section className="infeaturse">
        <div className="container">
          <div className="row">
            <div className="heading_mobilecom">
              <h1>Best-in-Class Features For Your Online Ecommerce Store</h1>
            </div>
          </div>

          {/* Mobile App Features */}
          <div className="row mt-4 align-items-center">
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="mobile_app">
                <img src={ecommercehero3} alt="Mobile App Features" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="mobile_apptxt">
                <h1>Mobile App Features</h1>
              </div>
              <div className="row">
                {featureData.mobileApp.map((feature, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="card">
                      <div className="mobile_card">
                        <box-icon name={feature.icon} className="card-icon" size="36px" color="#34AD2F"></box-icon>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Website Features */}
          <div className="row mt-4 align-items-center">
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="mobile_apptxt">
                <h1>Website Features</h1>
              </div>
              <div className="row">
                {featureData.website.map((feature, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="card">
                      <div className="mobile_card">
                        <box-icon name={feature.icon} className="card-icon" size="36px" color="#34AD2F"></box-icon>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="mobile_app">
                <img src={ecommercehero3} alt="Website Features" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* Admin Panel Features */}
          <div className="row mt-4 align-items-center">
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="mobile_app">
                <img src={ecommercehero3} alt="Admin Panel Features" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="mobile_apptxt">
                <h1>Admin Panel Features</h1>
              </div>
              <div className="row">
                {featureData.adminPanel.map((feature, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="card">
                      <div className="mobile_card">
                        <box-icon name={feature.icon} className="card-icon" size="36px" color="#34AD2F"></box-icon>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Best-in-Class Features Finish */}
      <Contactus/>
      <Footer/>
    </React.Fragment>
  );
};

export default ECommerce2;
