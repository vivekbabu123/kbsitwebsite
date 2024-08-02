import React from "react";
import Header from "../components/Header";
import "./deliveryApp.css";
import driverheroimage from "../assest/image/deliveryapp/drivingmotocycle.png";
import deliveryinastall1 from "../assest/image/deliveryapp/a1.png";
import deliveryinastall2 from "../assest/image/deliveryapp/a2.png";
import deliveryinastall3 from "../assest/image/deliveryapp/a3.png";
import deliveryinastall4 from "../assest/image/deliveryapp/a4.png";
import deliveryinastall5 from "../assest/image/deliveryapp/a6.png";
import deliveryinastall6 from "../assest/image/deliveryapp/a5.png";
import numberdeliver from "../assest/image/deliveryapp/b1.png";
import numberdeliver1 from "../assest/image/deliveryapp/b2.png";
import numberdeliver2 from "../assest/image/deliveryapp/b3.png";
import numberdeliver3 from "../assest/image/deliveryapp/b4.png";
import numberdeliver4 from "../assest/image/deliveryapp/b5.png";
import numberdeliver5 from "../assest/image/deliveryapp/b6.png";
import Footer from "../components/Footer";

let installItems = [
  { src: deliveryinastall1, title: "On-Demand Taxi Service" },
  { src: deliveryinastall2, title: "Food Delivery Service" },
  { src: deliveryinastall3, title: "Grocery Delivery Service" },
  { src: deliveryinastall4, title: "Parcel Delivery Service" },
  { src: deliveryinastall5, title: "Pharmacy Delivery Service" },
  { src: deliveryinastall6, title: "Package Delivery Service" },
];
let features = [
  {
    title: "Intuitive App Experience",
    description:
      "Create a delivery application for your clients and a delivery service management system for your company.",
  },
  {
    title: "Super Easy-to-Use",
    description:
      "In order for your consumers to order pickup and delivery services straight from the website or app, we construct delivery apps utilizing a delivery app builder.",
  },
  {
    title: "Real-time Tracking",
    description:
      "Create a delivery app to provide your customers the ability to track their orders in real time. It keeps them informed of the delivery status and provides precise ETAs.",
  },
  {
    title: "Easy Payment Methods",
    description:
      "To provide your customers the ability to track their orders in real time, create a delivery app. It gives them exact ETAs and keeps them updated on the delivery status.",
  },
];

let DeliveryApp = () => {
  return (
    <React.Fragment>
      <Header />
      {/* hero section start */}
      <section className="delivery_app">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="deliv_hero">
                <h2>
                  Launch and develop an on-demand delivery app, and your company
                  will grow by 10X.
                </h2>
                <p>
                  Utilize the growing potential of the framework for developing
                  mobile delivery apps and benefit from effective on-demand
                  delivery app development services for your company.
                </p>
              </div>
              <div className="dboy">
                <img src={driverheroimage} alt="image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* hero section finish */}

      {/* install build delivery start */}
      <section className="install_build">
        <div className="container">
          <h2 className="heading_install">
            Install Build Delivery For All Industries.
          </h2>
          <div className="row g-5">
            {installItems.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="install_item">
                  <img src={item.src} alt={item.title} className="img-fluid" />
                  <h2 className="text-center pt-2">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* delivery analysis start */}
      <section className="delivery_analysis">
        <div className="container">
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-3 co-xl-3 mb-4" key={index}>
                <div className="whycard intuitive-app">
                  <div className="card-body">
                    <h5 className="card-title">{feature.title}</h5>
                    <p className="card-text">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* delivery analysis finish */}

      {/* install build delivery finish */}

      <section class="deliverpickup">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                <div class="numberdelivery">
            <h2>01</h2> 
        </div>
        <div class="title-deliver">
            <h4>Auto Pickup And Delivery Dispatch</h4>
            <ul>
                <li>Create a delivery app builder and take use of the auto-allocation feature, which makes it simple for your delivery personnel to pick up and deliver packages.</li>
                <li>In order to accept new delivery orders, the delivery partner immediately receives a notification alert on the delivery agent app.</li>
              
            </ul>
        </div>
                </div>
                <div className="col-md-6">
                    <div className="numb_img">
                        <img src={numberdeliver} alt="img" className="img-fluid"></img>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                <div className="numb_img">
                        <img src={numberdeliver1} alt="img" className="img-fluid"></img>
                    </div>
               
                </div>
                <div className="col-md-6">
                <div class="numberdelivery">
            <h2>02</h2> 
        </div>
        <div class="title-deliver">
            <h4>Uber Like Real-Time Delivery Tracking & Alerts</h4>
            <ul>
                <li>Create a delivery app and send real-time SMS alerts at various points to keep your clients informed throughout the order delivery process.</li>
                <li>With the Uber-like delivery app builder, you can add agent monitoring and let your customers use Google Maps to get precise tracking information.</li>
              
            </ul>
        </div>
                   
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                <div class="numberdelivery">
            <h2>03</h2> 
        </div>
        <div class="title-deliver">
            <h4>Managed Deliveries & Cost-Efficient Routes</h4>
            <ul>
                <li>Utilize a fully feature-loaded dashboard in your delivery app to manage pickup and delivery requests from all sources in one location.</li>
                <li>With the use of an automated route optimization tool, an on-demand delivery app builder reduces delivery costs and saves time.</li>
              
            </ul>
        </div>
                </div>
                <div className="col-md-6">
                    <div className="numb_img">
                        <img src={numberdeliver2} alt="img" className="img-fluid"></img>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                <div className="numb_img">
                        <img src={numberdeliver3} alt="img" className="img-fluid"></img>
                    </div>
               
                </div>
                <div className="col-md-6">
                <div class="numberdelivery">
            <h2>04</h2> 
        </div>
        <div class="title-deliver">
            <h4>Advanced Analytics & Business Reports</h4>
            <ul>
                <li>Create delivery apps that enable quicker data-driven insights so that you can identify consumer behaviour and target them with more valuable items.</li>
                <li>To help you decide how to expand your on-demand delivery business, get real-time and historical performance information.</li>
              
            </ul>
        </div>
                   
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                <div class="numberdelivery">
            <h2>05</h2> 
        </div>
        <div class="title-deliver">
            <h4>Optimized Routes & Proof of Delivery</h4>
            <ul>
                <li>Create a delivery app to give your agents the most efficient routes that will allow them to reach their locations on time.</li>
                <li>The delivery agents can gather electronic delivery evidence in the form of scanned barcodes, notes, photos, and digital signatures with the help of our on-demand delivery app development.</li>
              
            </ul>
        </div>
                </div>
                <div className="col-md-6">
                    <div className="numb_img">
                        <img src={numberdeliver4} alt="img" className="img-fluid"></img>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                <div className="numb_img">
                        <img src={numberdeliver5} alt="img" className="img-fluid"></img>
                    </div>
               
                </div>
                <div className="col-md-6">
                <div class="numberdelivery">
            <h2>06</h2> 
        </div>
        <div class="title-deliver">
            <h4>In-App Chat & Rating System</h4>
            <ul>
                <li>Create a delivery app to give your agents the most efficient routes that will allow them to reach their locations on time.</li>
                <li>The delivery agents can gather electronic delivery evidence in the form of scanned barcodes, notes, photos, and digital signatures with the help of our on-demand delivery app development.</li>
              
            </ul>
        </div>
                   
                </div>
            </div>
        </div>
       
    </section>
    <section className="notch_web">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="notch_web-heading">
                <h1 className="text-center pt-5">
                How does it work?
                </h1>
              </div>
            </div>
          </div>
          <div className="row g-3">
          
           
            <div className="col step">
            
             
              <div className="step-icon">
                <box-icon name="check" color="white"></box-icon>
              </div>
              <div className="step-item2">
                <div className="step-number">01</div>
                <div className="step-description">Customer places the order</div>
              </div>
            </div>
            <div className="col step">
              <div className="step-icon">
                <box-icon name="pencil" color="white"></box-icon>
              </div>
              <div className="step-item2">
                <div className="step-number">02</div>
                <div className="step-description">Order received and a delivery agent is assigned</div>
              </div>
            </div>
            <div className="col step">
              <div className="step-icon">
                <box-icon name="data" color="white"></box-icon>
              </div>
              <div className="step-item2">
                <div className="step-number">03</div>
                <div className="step-description">Order pick-up from the location</div>
              </div>
            </div>
            <div className="col step">
              <div className="step-icon">
                <box-icon name="link" color="white"></box-icon>
              </div>
              <div className="step-item2">
                <div className="step-number">04</div>
                <div className="step-description">Delivery agent delivers the product</div>
              </div>
            </div>
            <div className="col step">
              <div className="step-icon">
                <box-icon name="link" color="white"></box-icon>
              </div>
              <div className="step-item2">
                <div className="step-number">05</div>
                <div className="step-description">Billing invoice shared with the end user</div>{" "}
             
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* customizes bussiness plan start */}
      <section className="customized_plan">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="heading">
                        <h2 className="text-center fw-bold">100% Customization Will Boost Your On-Demand Delivery App Business.</h2>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="customization">
                        <h2>100% Customization</h2>
                        <p>Integrate a variety of features for all panels, tech stack, payment gateways, UI/UX options, plugins, extensions, and more to completely customize your project.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="customization">
                        <h2>Robust & Scalable Solution</h2>
                        <p>IIncrease business growth by developing a customized, reliable digital solution that ensures long-term effectiveness and functional usability focused on app performance.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="customization">
                        <h2>Source Code & IP Rights</h2>
                        <p>Own your source code exclusively and preserve your IP rights with well-established protection measures.</p>
                    </div>
                </div>
            </div>
            <div className="book_delivey p-5 d-flex justify-content-between align-item-center ">
                <h2>Using a Customized Pickup & Delivery App, Strengthen <br/>Your On-Demand Delivery Business</h2>
                <button className="btn">BOOK DEMO</button>
            </div>
        </div>

      </section>
      {/* customizes business plan finish */}
      <Footer/>
    </React.Fragment>
  );
};

export default DeliveryApp;
