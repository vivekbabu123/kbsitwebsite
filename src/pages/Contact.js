import React from "react";
import Header from "../components/Header";
import "../App.css";
import Footer from "../components/Footer";
import CountryFlag from 'react-country-flag';

let Contact = () => {
  return (
    <React.Fragment>
      <Header />
      {/*  contact heading start */}
      <section className="contact_heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="map-container">
                <iframe
                  loading="lazy"
                  src="https://maps.google.com/maps?q=melbourn&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
                  title="melbourn"
                  aria-label="melbourn"
                  style={{
                    width: "100%",
                    height: "500px",
                    border: "10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                    padding: "10px",
                  }}
                ></iframe>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <form className="container mt-5">
                <div className="row mb-3">
                  <div className="col-lg-6 col-md-6">
                    <label htmlFor="name" className="form-label">
                      Name (required)
                    </label>
                    <input
                      id="name"
                      size="40"
                      className="form-control"
                      aria-required="true"
                      placeholder="Your name*"
                      type="text"
                      name="your-name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email address (required)
                    </label>
                    <input
                      id="email"
                      size="40"
                      className="form-control"
                      aria-required="true"
                      placeholder="Email*"
                      type="email"
                      name="your-email"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-6 col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      className="form-control"
                      placeholder="Your phone"
                      type="text"
                      name="your-phone"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <label htmlFor="service" className="form-label">
                      Services (required)
                    </label>
                    <select
                      id="service"
                      className="form-select"
                      aria-required="true"
                      name="your-service"
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="Success Fullfill">Success Fullfill</option>
                      <option value="StartUp Business">StartUp Business</option>
                      <option value="Business Growth">Business Growth</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    cols="30"
                    rows="6"
                    className="form-control"
                    aria-required="true"
                    placeholder="Type message*"
                    name="your-message"
                    required
                  ></textarea>
                </div>
                <div className="form_btn">
                  <button type="submit" className="btn">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Contact heading finish */}
      {/* Reach us start */}
      <section className="Reach_us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-rach text-center">
                <h1>Reach Us</h1>
                <h6>
                  Grow Your Business With<span> Our Expertise</span>{" "}
                </h6>
                <p>
                  We understand the importance of approaching each work{" "}
                  <br></br> integrally and believe in the power of simple.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 col-xl-3 ">
              <div className="reach_location text-center">
                <div className="me-3">
                  <i className="bx bx-map bx-lg"></i>
                </div>
                <div>
                  <h3>Office Address</h3>
                  <div className="mb-3">
  <div className="address-item">
    <a
      className="text-decoration-none"
      href="https://www.google.com/maps/place/SCF+NO+81,+PHASE-11,+SECTOR+65,+Mohali,+India,+Punjab+region"
      target="_blank"
      rel="noopener noreferrer"
    >
      <CountryFlag countryCode="IN" svg style={{ width: '2em', height: '2em' }} />
      <span className="ps-2 fs-6">
        377, 1st Floor, Bmm, Phase 11, Sector 65, Sahibzada Ajit Singh Nagar, Punjab 160062
      </span>
    </a>
  </div>

  <div className="address-item">
    <a
      className="text-decoration-none"
      href="https://www.google.com/maps/place/SCF+NO+81,+PHASE-11,+SECTOR+65,+Mohali,+India,+Punjab+region"
      target="_blank"
      rel="noopener noreferrer"
    >
      <CountryFlag countryCode="AU" svg style={{ width: '2em', height: '2em' }} />
      <span className="ps-2">
        Level 1, 73 Malop Street, Geelong, VIC 3214
      </span>
    </a>
  </div>
</div>

                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3 ">
              <div className="text-center reach_location">
                <div className="me-3">
                  <i className="bx bx-phone bx-lg"></i>
                </div>
                <div>
                  <h3>Telephone Number</h3>
                  <p className="mb-0">
                    <a
                      className="text-decoration-none"
                      href="tel:61455-254-491"
                    >
                      (+61) 386036202
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3 ">
              <div className="text-center reach_location">
                <div className="me-3">
                  <i className="bx bx-envelope bx-lg"></i>
                </div>
                <div>
                  <h3>Mail Address</h3>
                  <p className="mb-0">
                    <a
                      className="text-decoration-none"
                      href="mailto:Sales@kbitsolutions.com.au"
                    >
                      Sales@kbitsolutions.com.au
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 col-xl-3 ">
              <div className="text-center reach_location">
                <div className="me-3">
                  <i className="bx bx-chat bx-lg"></i>
                </div>
                <div>
                  <h3>Live Chat</h3>
                  <p className="mb-0">
                    <a className="text-decoration-none" href="#">
                      Real-time Solutions for Real-time Success
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reach us finish */}
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
