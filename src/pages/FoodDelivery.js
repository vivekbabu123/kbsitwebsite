import React, { useState } from "react"; // Import useState
import Header from "../components/Header";
import "./FoodDelivery.css";
import "./GroceryDelivery.css";
import fooddelivery1 from "../assest/image/fooddelivery/1.png";
import fooddelivery2 from "../assest/image/fooddelivery/2.png";
import fooddelivery3 from "../assest/image/fooddelivery/3.png";
import fooddelivery4 from "../assest/image/fooddelivery/5.png";
import fooddelivery5 from "../assest/image/fooddelivery/6.png";
import fooddelivery6 from "../assest/image/fooddelivery/7.png";
import fooddelivery7 from "../assest/image/fooddelivery/8.png";
import fooddelivery8 from "../assest/image/fooddelivery/9.png";
import fooddelivery9 from "../assest/image/fooddelivery/10.png";
import fooddelivery10 from "../assest/image/fooddelivery/1right.webp";
import fooddelivery11 from "../assest/image/fooddelivery/12.png";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

const orderData = [
  {
    id: 1,
    imgSrc: fooddelivery1,
    count: "1.5M",
    label: "Orders Processed",
  },
  {
    id: 2,
    imgSrc: fooddelivery2,
    count: "60k",
    label: "Customer Reviews",
  },
  {
    id: 3,
    imgSrc: fooddelivery3,
    count: "230 K",
    label: "Monthly Transactions",
  },
];

const foodData = [
  {
    id: 1,
    imgSrc: fooddelivery4,
    title: "Build Your Brand & Trust",
    description:
      "Over a third-party platform, a restaurant’s own branded app is preferred by 52% of customers.",
  },
  {
    id: 2,
    imgSrc: fooddelivery5,
    title: "Enjoy Commission-Free Selling",
    description:
      "Purchase your own commission-free online ordering platform to cut shipping costs by as much as 70%.",
  },
  {
    id: 3,
    imgSrc: fooddelivery6,
    title: "Customized The Ordering Experience",
    description:
      "80% more people will recognize your restaurant app thanks to the brand’s logo, colors, and other elements.",
  },
];

const restaurantData = [
  {
    id: 1,
    title: "Individual Restaurants",
    subtitle: "Create A Mobile App For Your Restaurant To Deliver Food",
    description:
      "Provide customers with a straightforward way to place food orders through your restaurant’s mobile app.",
    imgSrc: fooddelivery7,
  },
  {
    id: 2,
    title: "Chain Restaurants",
    subtitle: "A food ordering and delivery app for chains of restaurants",
    description:
      "Enhance return on investment for your chain of restaurants by developing a custom food delivery app.",
    imgSrc: fooddelivery8,
  },
  {
    id: 3,
    title: "Aggregators of Food Delivery",
    subtitle: "Create an app similar to Uber Eats for your area",
    description:
      "Start increasing your revenue by offering on-demand food delivery services similar to Uber Eats and Zomato.",
    imgSrc: fooddelivery9,
  },
];

const features = [
  {
    title: "Simplify Food Ordering",
    description:
      "Provide a branded food ordering website and app so that your clients can place orders, pay for them, and follow the delivery person in real time.",
  },
  {
    title: "Manage Your Food Business",
    description:
      "Create a food delivery application with a robust dashboard that allows you to manage the catalog, discounts, payments, ratings and reviews, and much more, all in one location.",
  },
  {
    title: "Ensure Timely Deliveries",
    description:
      "Utilize your delivery team by using an app that is simple to use and offers order notifications, route optimization, and daily earnings statistics.",
  },
];

const accordionData = [
  {
    id: 1,
    title: "Market Research Report",
    content:
      "You must verify your food business idea. Let the professionals take care of this for you.",
  },
  {
    id: 2,
    title: "Revenue Generation Model",
    content:
      "Discover your sustainable revenue model with us as we outline various methods for reducing cash flow and increasing revenue at each step of your online food business.",
  },
  {
    id: 3,
    title: "Fully Customized Technology Solution",
    content:
      "Get the most cutting-edge tech package packed with top features to support you in managing and expanding your online food ordering and delivery business.",
  },
  {
    id: 4,
    title: "Business Plan",
    content:
      "Are you prepared to make a big splash? With our experience in assisting food businesses to grow up, we can create a pitch deck that will wow investors and raise the likelihood that it will receive finance.",
  },
  {
    id: 5,
    title: "Branding & Marketing",
    content:
      "Want to create your brand buzz? We provide you with a hands-on marketing plan that creates excitement for your brand & raises your sales graph exponentially.",
  },
  {
    id: 6,
    title: "AI-Powered Analytics",
    content:
      "Utilize in-the-moment AI-driven data to uncover better growth prospects and to guide your decision-making for your food business.",
  },
];

const FoodDelivery = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <React.Fragment>
      <Header />
      {/* Technologies food solution start */}
      <section className="food_hero">
        <div className="container">
          {" "}
          {/* Fixed typo here */}
          <div className="row">
            <div className="col-md-12">
              <div className="heading_food text-center">
                <h2>
                  A Complete Technology Solution Can Power <br />
                  Your Food Business
                </h2>
                <button className="btn text-white">
                  Book Your Demo It's Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies food solution finish */}
      {/* Statistics picks us start */}
      <section className="statcistics_pickup">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="heading_statics pb-5">
                In the past six years, we have aided over nine multi-million
                dollar food startups, and the statistics speak for themselves.
              </h2>
            </div>
          </div>
          <div className="row">
            {orderData.map((order) => (
              <div className="col-md-4" key={order.id}>
                <div className="order_process d-flex align-items-center">
                  <img
                    src={order.imgSrc}
                    alt={`Image for ${order.label}`}
                    className="img-fluid w-50"
                  />
                  <div className="order_txt ps-3">
                    <h2>{order.count}</h2>
                    <p>{order.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Statistics picks us finish */}

      {/* Most downloaded start */}
      <section className="downlod_delivery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="downlod_heading">
                <h2>
                  Some of the “most downloaded” apps in the area were made by
                  us.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Most downloaded finish */}
      <section className="statcistics_pickup">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="heading_statics pb-5">
                With advanced and completely customized food delivery app
                development services, introduce your customers to a unique
                online food ordering experience.
              </h2>
            </div>
          </div>
          <div className="row">
            {foodData.map((food) => (
              <div className="col-md-4" key={food.id}>
                <div className="food_ordering">
                  <img
                    src={food.imgSrc}
                    alt={`Image for ${food.title}`}
                    className="img-fluid"
                  />
                  <div className="order_food">
                    <h3>{food.title}</h3>
                    <p>{food.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="statcistics_pickup">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="heading_statics pb-5">
                Whether you require a food restaurant app or desire to launch
                your own food marketplace similar to Uber Eats, we have you
                covered.
              </h2>
            </div>
          </div>
          <div className="row">
            {restaurantData.map((restaurant) => (
              <div className="col-md-4" key={restaurant.id}>
                <div className="individual_resrt">
                  <h2>{restaurant.title}</h2>
                  <h3>{restaurant.subtitle}</h3>
                  <p>{restaurant.description}</p>
                  <img
                    src={restaurant.imgSrc}
                    alt={`Image for ${restaurant.title}`}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample food online start */}
      <section className="food_online">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6 col-xl-6">
              {features.map((feature, index) => (
                <div
                  className="row item_foodonline align-items-center"
                  key={index}
                >
                  <div className="col-md-7">
                    <div className="simplyfy_online">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="explore text-center">
                      <h4>Explore Management Tech</h4>
                      <span className="btn">
                        <box-icon
                          type="solid"
                          color="#0d6efd"
                          name="right-arrow-square"
                        ></box-icon>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <img
                src={fooddelivery10}
                alt="Food Delivery"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Next normal days start */}
      <section className="next_normaldays bg-dark">
        <div className="container-fluid">
          <div className="row p-3">
            <h1 className="text-white">
              Prepare Your Online Restaurant For The ‘Next Normal’ With A Tech
              Suite That Has All Features To Combat COVID Adversity
            </h1>
          </div>
        </div>
      </section>
      {/* Next normal days finish */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <img src={fooddelivery11} alt="img" className="img-fluid" />
            </div>
            <div className="col-md-6">
                <h2>Not Just Technology, But Everything You Need For A Successful Food Business</h2>
              {accordionData.slice(0, 6).map((item) => (
                <div key={item.id}>
                  <button
                    className={`accordion ${
                      openIndex === item.id ? "active" : ""
                    }`}
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
        </div>
      </section>
              <section className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="food_uper text-center">
                            <h2>
                            With the help of our food delivery app development services, you can give your online food business the boost it needs.
                            </h2>
                            <button className="btn text-white">Get in Touch</button>
                        </div>
                        </div>
                    </div>
                </div>
              </section>

      {/* Sample food online finish */}
      <Contactus/>
              <Footer/>
    </React.Fragment>
  );
};

export default FoodDelivery;
