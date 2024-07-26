import React from "react";
import Header from "../components/Header";
import '../App.css';
import Footer from "../components/Footer";

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
      boxShadow : "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
      padding:"10px"
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
                <h6>Grow Your Business With<span> Our Expertise</span> </h6>
                <p>We understand the importance of approaching each work <br></br> integrally and believe in the power of simple.</p>
              </div>
            </div>
          </div>
          <div className="row">
                <div className="col-md-3 ">
                    <div className="text-center reach_location">
                        <div className="me-3">
                            <i className='bx bx-map bx-lg'></i>
                        </div>
                        <div>
                            <h3>Office Address</h3>
                            <p className="mb-3">
                            <a
  className="text-decoration-none"
  href="https://www.google.com/maps/place/SCF+NO+81,+PHASE-11,+SECTOR+65,+Mohali,+India,+Punjab+region"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/125px-Flag_of_India.svg.png"
    alt="img"
    className="img-fluid"
    style={{ width: "25px" }}
  />
  <span className="ps-2 fs-6"> 377 , 1st Floor, Bmm, Phase 11, Sector 65, Sahibzada Ajit Singh Nagar, Punjab 160062</span>
 
</a><br></br>
<a
  className="text-decoration-none mt-4"
  href="https://www.google.com/maps/place/SCF+NO+81,+PHASE-11,+SECTOR+65,+Mohali,+India,+Punjab+region"
  target="_blank"
  rel="noopener noreferrer"
>
  <img 
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAwFBMVEUBIWn////kACsAIWnjABjuiI/vlpbujpIAH2gAAFnKzNjLytbDx9XiAAAAAF8AAF3jAB8AHGcACGE2H2SHjKnrbXPqXWf4ztH619sAGGZ+g6Pu7/MAAFTkACTrACfZCDI9QXj96OkYJWrrdXv2w8jsgIMAE2TiAAvl5uz84OEAAE9uc5e5vMzoU17qSVneho7XACIyOnU6LWyTmLJcYYxNVoVITX8AADvU2OL1tr3q1NnaWWnpx802EF1hapKmq8GhthSDAAAEyklEQVRoge1YDVPbOBCVIt+h+IhlqyagODkSBxyTGAoNSd32Cv//X50kf0S25VhcnZm2xxsyAbx62n1aaVcGF1cwRzChDgY6oKEN4Zk1kLDOILSHSGuIHToJ4N2tOxi4o/ElcN1xSR/7oYP5sOyn+CA9ed0IIOyEPqdezqyBawmngTtwVwfv4wmjTe+NPMeUTWK4uLUE9fhSsIHbkStCULyfNugNyDGdcq8Xy5GlsIF8rlE2l9Te96Q45uRcEE8KIh096ABEKFKlivaAYmSqOcIU+DqWCdDPGU8cRZyjnmPqlFrX4m9RSzwkBHeTY0Ky0W0rh5R1Xqlzh7n2beRl8lnNnMtmb2RoRTU+f6vmXGv9ipW7pVzvyIca7WV4WnIhp4h3VdUa+lEt14pM1RgHPj8UmuR8o7c7oyRp+UEUK2FeKmGu6+TrTEa32OiFjJiiyqGgom2BNudV8vNNbaMfEkAFGNawXnPvebgC9wclq+QQXl1IC3Xx1+s6FzhvIEkCCBc3Al/uWsgXX+Tzw+MgSZpMAJqi6rkRTkv+pynuZxn57N54CLBMkXNzdtMRKzA4Hf5+J//dyE+ain8Y4uyh2EQPZ6ZjfuGz5a8m7MPjq0uOm5s2cn4wCwNx8toaIkBqmJJJWlKPLVERspKk9fzyYTRajWbLBS8WfGgN1YYT0yGvQwX1hay+S+7XpF5DeRde0I9Hs4G1uhX0Q9qs+2X9d0T3dBjk5oP8abNAi06h4QTv0mrXh6JQZ8W5pOY12nJluLyia/oW2SmU9CtpfVd2aUUHUHQtXruxjlzrjBTHq/X3WUOkCdORYbb0ithx6jKOlotqY5S37qqRmy0QoV1dLiW6BCivDwiTUPF67PL5Zxdi/jC/ABxr/nl+NUdnchI+mtKa1u5KPgRKO3ms+edxAzVusVqWjJtS5cHV+BDWsNpOHr8T8d1RY5Hacwd1c0a19e68zWEa6eIHxXxWVa03XnK1K3cLahvdZ5rW3eSSy7Vn9cQEleTTXHBNyUFzt1jg67fHx+vr629fg6x11wGRJAg+CjOOx49BkJAWQ3EoBDn+uQffv38Q2M/nlVOh+s7Ae5rPP33I8Wk+f/I0RsUJNc+x34P8tuh5nv51SB6x8hh3mhY4YtUHmrG1/2pkpNq/Q4ufRvNTZpc3n5+OnW639G0jzDVE0zieohNp7j1B+NS3LhHLzhLxhsXPdMGMGQ3tjI297KhsBAg/1W0iS76ze2G9yMJ2MJ1gJ8JEFAGCI8fjjenOzPXO0BwuB0ye1xtBvlk/J/zLd3o6l9BUduyBLGGxrJPp1IzbILXYvqy8GYI96y8ViV8l90n3GGNgaqvctrZH+M/kw51KvhuakndrjiK2rYgebFmE+tGcTZ9jWEP8Mu0jzxHZ23Vqqfu+pTGqjgbHYsPeq45a4FW2Lz8iCw43m42/Tez0wJrayXbC/x3+cM5gFkXUIcPP5ZIGn4fEoRFjfeUjwsobCNx+T26MAx3CyS+2F7RJItOc9VyJInEk2o4jMmcTGQ8zA92KoxBjcUC+tUp3ATkJTCNeP70oha/mZ7mZ5jSNQ1nYWBintF/NMUvDfL+zMO0tCTMgEJY9hRf2nYoIH/7EqF9Z/n8w0/wNRu+ad+JX1fxfy5SdFv8wHUEAAAAASUVORK5CYII="
    alt="Location Icon" 
    style={{ width: '30px' }} 
  />
  <span className="ps-2">Level 1, 73 Malop Street, Geelong, VIC 3214</span>
  
</a>

                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 ">
                    <div className="text-center reach_location">
                        <div className="me-3">
                            <i className='bx bx-phone bx-lg'></i>
                        </div>
                        <div>
                            <h3>Telephone Number</h3>
                            <p className="mb-0">
                                <a className="text-decoration-none" href="tel:61455-254-491">
                                    (+61) 386036202
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 ">
                    <div className="text-center reach_location">
                        <div className="me-3">
                            <i className='bx bx-envelope bx-lg'></i>
                        </div>
                        <div>
                            <h3>Mail Address</h3>
                            <p className="mb-0">
                                <a className="text-decoration-none" href="mailto:Sales@kbitsolutions.com.au">
                                    Sales@kbitsolutions.com.au
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 ">
                    <div className="text-center reach_location">
                        <div className="me-3">
                            <i className='bx bx-chat bx-lg'></i>
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
      <Footer/>
    </React.Fragment>
  );
};

export default Contact;
