import React, { useState } from "react";
import Header from "../components/Header";
import "./GroceryDelivery.css";
import Footer from "../components/Footer";
import herobg from "../assest/image/grocessary/1.webp";
import grocerymarket1 from "../assest/image/grocessary/logo1.png";
import grocerymarket2 from "../assest/image/grocessary/logo2.png";
import grocerymarket3 from "../assest/image/grocessary/logo3.png";
import grocerymarket4 from "../assest/image/grocessary/4.png";
import grocerymarket5 from "../assest/image/grocessary/5.png";
import grocerymarket6 from "../assest/image/grocessary/6.png";
import grocerymarket7 from "../assest/image/grocessary/7.png";
import grocerymarket8 from "../assest/image/grocessary/8.png";
import grocerymarket9 from "../assest/image/grocessary/9.png";
import grocerymarket10 from "../assest/image/grocessary/10.png";
import Contactus from "../components/Contactus";

const groceryData = [
  {
    imgSrc: grocerymarket1,
    imgAlt: "Grocery Marketplaces",
    title: "Grocery Marketplaces",
    description:
      "By automating dispatch, delivery, and tracking with a completely customized grocery delivery software, you can multiply your marketplace earnings.",
  },
  {
    imgSrc: grocerymarket2,
    imgAlt: "Single/Multi Grocery Stores",
    title: "Single/Multi Grocery Stores",
    description:
      "With the help of a personalized website and incredibly user-friendly mobile apps, you can let your consumers shop online from your single and multiple grocery stores.",
  },
  {
    imgSrc: grocerymarket3,
    imgAlt: "Big Basket-like Grocery App",
    title: "Big Basket-like Grocery App",
    description:
      "Build a Big Basket-like turnkey online grocery delivery app development for your region with real-time tracking & advanced analytics.",
  },
];

const GroceryDelivery = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const accordionData = [
    { id: 1, title: "Easy Login", content: "Provide a seamless login experience allowing users to access their accounts effortlessly through social media or email." },
    { id: 2, title: "Advanced Search", content: "Empower users with a powerful search tool to quickly locate their desired products with filters for category, brand, and price." },
    { id: 3, title: "Schedule Booking", content: "Enable customers to select a convenient delivery time, ensuring their groceries arrive when they need them the most." },
    { id: 4, title: "Push Notifications & Alerts", content: "Keep customers informed with real-time updates on their order status and important notifications about promotions and new products." },
    { id: 5, title: "Order Tracking", content: "Allow customers to track their deliveries in real time on an interactive map, providing peace of mind and transparency." },
    { id: 6, title: "Secure Payments", content: "Offer a variety of secure payment options to ensure a smooth checkout process, including credit cards, digital wallets, and more." },
    { id: 7, title: "Manage at Single Place", content: "Get a unique & powerful dashboard to manage all your orders & deliveries." },
    { id: 8, title: "Monitor Deliveries", content: "Assign drivers and keep track of every delivery detail in real time." },
    { id: 9, title: "Instant Updates", content: "Receive notifications for each order and effectively streamline your grocery delivery processes." },
    { id: 10, title: "Product Listing", content: "Add, update, or remove products from the category list with prices based on stock." },
    { id: 11, title: "Discount & Offers", content: "Improve your customers' experience by providing them with coupons and discount codes." },
    { id: 12, title: "Easy Onboarding", content: "Easy and convenient onboarding for grocery delivery personnel." },
    { id: 13, title: "Quick Order Notification", content: "Ensure on-time grocery delivery with immediate order notifications to the driver's smartphone." },
    { id: 14, title: "Route Optimization", content: "Give drivers the option of using the shortest and fastest routes to deliver groceries to customers." },
    { id: 15, title: "Delivery Status & Details", content: "Provide complete information including customer details, delivery location, order status, etc." },
    { id: 16, title: "Order Tracking", content: "Allow agents to communicate and modify their availability at any moment via their app." },
    { id: 17, title: "Secure Payments", content: "Allow employees to monitor their earnings each day based on the number of deliveries and working hours." },
  ];
  const additionalBenefitsData = [
    {
      imgSrc: grocerymarket7,
      imgAlt: "Fully-Customized Solution",
      title: "Boost Your Brand with Fully-Customized Solution",
      description: "Develop personalized grocery store apps to increase customer awareness of your business.",
    },
    {
      imgSrc: grocerymarket8,
      imgAlt: "Route Optimization",
      title: "Reduce Delivery Cost with Route Optimization",
      description: "By giving delivery personnel the shortest and fastest delivery routes to take, clients can receive their groceries for less money.",
    },
    {
      imgSrc: grocerymarket9,
      imgAlt: "Fully-Customized Solution",
      title: "Boost Your Brand with Fully-Customized Solution",
      description: "Develop personalized grocery store apps to increase customer awareness of your business.",
    },
    {
      imgSrc: grocerymarket10,
      imgAlt: "Route Optimization",
      title: "Reduce Delivery Cost with Route Optimization",
      description: "By giving delivery personnel the shortest and fastest delivery routes to take, clients can receive their groceries for less money.",
    },
  ];
  

  return (
    <React.Fragment>
      <Header />
      {/* Custom Grocery Start */}
      <section className="grocerybg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Start using your custom grocery delivery app.</h1>
              <p>Make Online Grocery Shopping Easy For Your Customers By Developing Your Own App Like Instacart</p>
              <img src={herobg} alt="Hero Background" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* Business Model Start */}
      <section className="business_model">
        <div className="container">
          <h2 className="heading_business">Business Models That We Back</h2>
          <div className="row">
            {groceryData.map((grocery, index) => (
              <div className="col-md-4" key={index}>
                <div className="groccsary_market">
                  <img src={grocery.imgSrc} alt={grocery.imgAlt} className="img-fluid" />
                  <h2>{grocery.title}</h2>
                  <p>{grocery.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Business Model Finish */}
      {/* Business Reach The Pinnacle Start */}
      <section className="pinacle_start">
        <div className="container text-center">
          <h2>Utilize the internet to deliver customers’ orders for groceries</h2>
          <button className="btn text-white px-5 py-3 fs-5">Get in Touch</button>
        </div>
      </section>
      {/* Business Reach The Pinnacle Finish */}
      {/* Customer Web Apps Start */}
      <section className="customer_web">
        <div className="container-fluid">
          <h2 className="heading_webapps">Customer Web & Apps</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Delivery Agent App</h2>
              {accordionData.slice(0, 6).map((item) => (
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
              <img src={grocerymarket4} alt="Delivery Agent App" className="img-fluid w-75 mx-auto d-block" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={grocerymarket5} alt="Admin Dashboard" className="img-fluid w-75 mx-auto d-block" />
            </div>
            <div className="col-md-6">
              <h1>Admin Dashboard</h1>
              {accordionData.slice(6, 11).map((item) => (
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
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Delivery Agent App</h2>
              {accordionData.slice(11).map((item) => (
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
              <img src={grocerymarket6} alt="Delivery Agent App" className="img-fluid w-75 mx-auto d-block" />
            </div>
          </div>
        </div>
      </section>
      {/* Customer Web Apps Finish */}
      {/* Additional Benefit For You Start */}
      <section className="additional_grocessary">
        <div className="container">
          <div className="row">
              <div className="col-md-12">
                <div className="heading_add pb-5">
                  <h1 className="text-center ">Additional Benefits You Get</h1>
                </div>
              </div>
          </div>
          <div className="row">
      {additionalBenefitsData.map((benefit, index) => (
        <div className="col-md-6" key={index}>
          <div className="feature_additional d-flex align-items-center">
            <img src={benefit.imgSrc} alt={benefit.imgAlt} className="img-fluid w-50" />
            <div className="feature_txt ps-3">
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
      </section>
      {/* Additional Benefit For You Finish */}
      <section className="driven_quality mb-3">
        <div className="container">
          <div className="row align-items-center py-2">
            <div className="col-lg-7 col-md-6">
              <div className="driven_txt">
                <h2 className="text-white fw-bold">
                Get Started With Your Online Grocery Delivery Business & Ease Your Customers From Corona Effect
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

      {/* why choose us Grossery start */}
          <section className="grossery_whychoose">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="haeding_grossery text-center">
                    <h1 className="text-white fw-bold">Why Choose Us</h1>
                    <p className="text-white">We are aware of how the Corona Outbreak has affected people’s lives and companies.<br></br> We stand firmly with your grocery business and make sure to protect your expansion by moving it online.</p>
                   
                  </div>
                </div>
              </div>
              <div className="row g-3">
  <div className="col-12 col-md-4">
    <div className="circle_groccery text-center bg-white p-4 rounded">
      <box-icon name='check-circle'></box-icon>
      <h4>Highly Competitive Pricing Models</h4>
    </div>
  </div>
  <div className="col-12 col-md-4">
    <div className="circle_groccery text-center bg-white p-4 rounded">
      <box-icon name='check-circle'></box-icon>
      <h4>Complete Pre-built Online Grocery Delivery App Solution</h4>
    </div>
  </div>
  <div className="col-12 col-md-4">
    <div className="circle_groccery text-center bg-white p-4 rounded">
      <box-icon name='check-circle'></box-icon>
      <h4>Digital Proof of Delivery for Agents</h4>
    </div>
  </div>
  <div className="col-12 col-md-4">
    <div className="circle_groccery text-center bg-white p-4 rounded">
      <box-icon name='check-circle'></box-icon>
      <h4>Fully-Customized Customer, Driver & Admin Apps</h4>
    </div>
  </div>
  <div className="col-12 col-md-4">
    <div className="circle_groccery text-center bg-white p-4 rounded">
      <box-icon name='check-circle'></box-icon>
      <h4>Reviews, Ratings & Social Media Integration</h4>
    </div>
  </div>
</div>

            </div>

          </section>
      {/* why choosr us grossery finish */}




      <section className="driven_quality mb-3">
        <div className="container">
          <div className="row align-items-center py-2">
            <div className="col-lg-12 col-md-12">
              <div className="driven_txt">
                <h2 className="text-white fw-bold">
                Let’s Help Your Grocery Business Lead Through The Corona Effect Smoothly
                </h2>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/*  */}
      <Contactus/>
     <Footer/>
    </React.Fragment>
  );
};

export default GroceryDelivery;
