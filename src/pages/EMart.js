import React from "react";
import "./Emart.css";
import Header from "../components/Header";
import emartimg from "../assest/image/emart/hero.png";
import emartimg1 from "../assest/image/emart/1.png";
import emartimg2 from "../assest/image/emart/2.png";
import emartimg3 from "../assest/image/emart/3.png";
import emartimg4 from "../assest/image/emart/4.png";
import emartimg5 from "../assest/image/emart/5.png";
import emartimg6 from "../assest/image/emart/6.png";
import emartimg7 from "../assest/image/emart/7.png";
import emartimg8 from "../assest/image/emart/8.png";
import emartimg9 from "../assest/image/emart/9.png";
import emartimg10 from "../assest/image/emart/10.png";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

const marketplaces = [
  {
    img: emartimg2,
    title: "Niche Marketplace",
    description:
      "Launch an online store to market niche goods or services to people around the world.",
  },
  {
    img: emartimg3,
    title: "Horizontal Marketplace",
    description:
      "Launch a multi-product online marketplace using B2B or B2C business strategies.",
  },
  {
    img: emartimg4,
    title: "B2B Marketplace",
    description:
      "Make a unique store to sell diverse merchants’ services on your marketplace.",
  },
];
const features = [
  {
    img: emartimg5,
    heading: "Feature-Rich",
    title: "Ecommerce Website",
    description:
      "Get feature-rich and user-friendly marketplace websites for e-commerce, space and product rentals, peer-to-peer online platforms, and product sales.",
  },
  {
    img: emartimg6,
    heading: "Intuitive",
    title: "Mobile Apps",
    description:
      "Mobile apps for iOS and Android that are both highly functional and easy to use for your online marketplace.",
  },
  {
    img: emartimg7,
    heading: "Advanced",
    title: "Vendor Panel",
    description:
      "Simple to use merchant panel that allows suppliers to track orders, order information, transactions, and consumers who cannot reach them.",
  },
  {
    img: emartimg8,
    heading: "Integrated",
    title: "Admin Dashboard",
    description:
      "One powerful, easy-to-use admin dashboard for managing all of your orders, suppliers, and clients.",
  },
  {
    img: emartimg9,
    heading: "Advanced",
    title: "Vendor Panel",
    description:
      "Simple to use merchant panel that allows suppliers to track orders, order information, transactions, and consumers who cannot reach them.",
  },
];
const featuresemart = [
    {
      id: 1,
      title: "Orders & Checkout",
      description: "Get features like order tracking, guest checkout, and cart recovery. Customers can reorder any goods using the built-in store credit system.",
    },
    {
      id: 2,
      title: "Mcommerce Ready",
      description: "Get features like cart recovery, guest checkout, and order tracking. The built-in store credit system allows customers to reorder any item.",
    },
    {
      id: 3,
      title: "Easy Returns & Refunds",
      description: "Increase customer confidence by providing a simple return and refund process. In addition to administration, vendors can handle refunds directly.",
    },
    {
      id: 4,
      title: "Multiple Payments",
      description: "Accept a variety of payments, including PayPal, Amazon Pay, wallets, and credit and debit cards. Payment gateways with integrated SSL certification that are very safe.",
    },
    {
      id: 5,
      title: "Shipping & Logistics",
      description: "Absolutely no setup fees and agreements with numerous international delivery partners. System-based creation and printing of shipping labels.",
    },
    {
      id: 6,
      title: "Discounts & Coupons",
      description: "Send out numerous emails with discounts and product promotions. Offer clients combinations, bulk discounts, and customer loyalty programmes to delight them.",
    },
  ];
  const featureslocation = [
    {
      id: 1,
      icon: 'map-pin',
      title: "GeoLocation Detection",
    },
    {
      id: 2,
      icon: 'code-alt',
      title: "Super Fast Hosting",
    },
    {
      id: 3,
      icon: 'compass',
      title: "Multiple Custom Themes",
    },
    {
      id: 4,
      icon: 'map-pin',
      title: "Custom Email & SMS Gateway",
    },
    {
      id: 5,
      icon: 'code-alt',
      title: "Extensive Backend",
    },
    {
      id: 6,
      icon: 'compass',
      title: "Custom Discounts",
    },
  ]

let EMart = () => {
  return (
    <React.Fragment>
      <Header />
      {/* hero Emart start */}
      <section className="emart_hero">
        <div className="container">
          <div className="row">
            <h1 className="text-center my-5 py-5 text-white">
              Create A Super Stunning Multi-Vendor Ecommerce Store For You
            </h1>
          </div>
          <div className="" data-aos="fade-down" data-aos-duration="3000">
            <img src={emartimg} alt="img" className="img-fluid " />
          </div>
        </div>
      </section>

      {/* hero Emart finish */}
      {/* what we maker start */}
      <section className="what_wemaker">
        <div className="container">
          <h1 className="text-center fw-bold mb-5">
            What Makes Us Different From Our Competitors
          </h1>
          <div className="row align-items-center bg-info p-4">
            <div className="col-md-6">
              <div className="whatmakertxt">
                <h2>Create Your Own Dream Online Store Quickly</h2>
                <button className="btn text-white">Get started</button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={emartimg1} alt="image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* what we maker finish */}
      {/* choose we ecoomerce start */}
      <section className="choose_wemart bg-dark text-white">
        <div className="container">
          <h1 className="text-center fw-bold py-5 ">
            Choose Which Ecommerce Solution Suits Your Needs
          </h1>
          <div className="row align-items-center">
            {marketplaces.map((marketplace, index) => (
              <div className="col-md-4" key={index}>
                <div className="emart_card">
                  <img
                    src={marketplace.img}
                    alt={marketplace.title}
                    className="img-fluid"
                  />
                  <h3>{marketplace.title}</h3>
                  <p>{marketplace.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* choose we ecoomerce finish */}
      {/* smart, Effective & Economical  start */}
      <section className="smart_effective">
        <div className="container">
          <h1 className="text-center fw-bold">
            A Smart, Effective & Economical Way to Build Your Ecommerce Store
          </h1>
          <p className="text-center fs-5">
            The Benefits of Our Unique Ecommerce Marketplace Suite
          </p>
          <div className="row align-items-center">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                {/* First half - Image or Text */}
                {index % 2 === 0 ? (
                  <div className="col-md-6">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="img-fluid"
                    />
                  </div>
                ) : (
                  <div className="col-md-6">
                    <div className="emart_txt">
                      <h3>{feature.heading}</h3>
                      <h1>{feature.title}</h1>
                      <p>{feature.description}</p>
                      <button className="btn text-white">Free Demo</button>
                    </div>
                  </div>
                )}

                {/* Second half - Text or Image */}
                {index % 2 === 0 ? (
                  <div className="col-md-6">
                    <div className="emart_txt">
                      <h3>{feature.heading}</h3>
                      <h1>{feature.title}</h1>
                      <p>{feature.description}</p>
                      <button className="btn text-white">Free Demo</button>
                    </div>
                  </div>
                ) : (
                  <div className="col-md-6">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="img-fluid"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* smart, Effective & Economical  finish */}
      {/*  Business Reach The Pinnacle start */}
      <section className="pinacle_start">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>
                Let’s Help Your Business Reach The Pinnacle Of Success With Our
                Marketing Efforts
              </h2>
              <button className="btn btn-success btn-lg text-white">
                Request for Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*  Business Reach The Pinnacle finish */}

      {/* Fully-Customized Ecommerce start */}
      <section className="incorpted_poweful">
        <div className="container">
          <h1 className="text-center fw-bold mb-5">
            A Fully-Customized Ecommerce Store Incorporated with Powerful
            Features
          </h1>
          <div className="row">
      {featuresemart.map((featuresemart) => (
        <div className="col-md-4" key={featuresemart.id}>
          <div className="order_chek">
            <box-icon type='solid' name='badge-check'></box-icon>
            <h2>{featuresemart.title}</h2>
            <p>{featuresemart.description}</p>
          </div>
        </div>
      ))}
    </div>
        </div>
      </section>
      {/* Fully-Customized Ecommerce finish */}
      {/* Advanced Features start */}
        <section className="advanced_feature">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h2>Advanced Features You’ll Fall in Love With</h2>
                        <div className="row">
      {featureslocation.map((featureslocation) => (
        <div className="col-md-4" key={featureslocation.id}>
          <div className="geo_location">
            <box-icon type='solid' name={featureslocation.icon}></box-icon>
            <h4>{featureslocation.title}</h4>
          </div>
        </div>
      ))}
    </div>
                    </div>
                    <div className="col-md-5">
                        <img src={emartimg10} alt="img" className="img-fluid w-50 d-block m-auto" />
                    </div>
                </div>
            </div>

        </section>
      {/* Advanced Features finish */}
      <Contactus/>
      <Footer/>
    </React.Fragment>
  );
};
export default EMart;
