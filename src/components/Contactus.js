import React from "react";
import Contactimage from "../assest/image/ithelpdesk.png";
import Slider from "react-slick";
import "./Contactus.css";
import ReactCountryFlag from "react-country-flag";
import chd from "../assest/image/chd1.webp";
import aus from "../assest/image/aus.jpg";
import CountryFlag from "react-country-flag";

const Contactus = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
   
    customPaging: (i) => (
      <div className="custom-dot">
        <ReactCountryFlag
          countryCode={i === 0 ? "AU" : "IN"} // "AU" for Australia and "IN" for India
          svg
          style={{
            display: "block",
            width: "50px",
            height: "30px",
            margin: "0 15px", // Add margin for spacing
          }}
          title={i === 0 ? "Australia" : "India"}
        />
      </div>
    ),
  };

  return (
    <React.Fragment>
      <div className="contact-icons">
        <a href="https://www.facebook.com/profile.php?id=100088825674471" target="_blank" rel="noopener noreferrer">
          <box-icon type="logo" size="48px" color="#fff" name="facebook"></box-icon>
        </a>
        <a href="https://wa.link/3gsh74">
          <box-icon type="logo" size="48px" color="#fff" name="whatsapp"></box-icon>
        </a>
      </div>
      <div className="container py-4">
        <Slider {...settings}>
          {/* Australia Slide */}
          <div className="row d-flex p-3 align-items-center">
            <div className="col-md-6">
              <div className="contact_title">
                <h6>Contact Us</h6>
                <h1 className="mb-0">
                  It’s very easy to <span>contact </span> us
                </h1>
                <CountryFlag
                  countryCode="AU"
                  svg
                  style={{ width: "5em", height: "5em" }}
                />
              </div>
              <div className="item">
                <h5>
                  Level 1, office 2, 73 Malop
                  <br />
                  Street Geelong, Victoria, Australia
                </h5>
                <p>
                  <a className="footerEmailer" href="mailto:Sales@kbitsolutions.com.au">
                    <box-icon type="solid" name="envelope"></box-icon>
                    Sales@kbitsolutions.com.au
                  </a>
                </p>
                <p>
                  <a className="footerEmailer" href="tel:+61455254491">
                    <box-icon type="solid" name="phone-call"></box-icon> +61455 254 491
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={aus} alt="First slide" className="img-fluid rounded" />
            </div>
          </div>

          {/* India Slide */}
          <div className="row d-flex p-3 align-items-center">
            <div className="col-md-6">
              <div className="contact_title">
                <h6>Contact Us</h6>
                <h1 className="mb-0">
                  It’s very easy to <span>contact </span> us
                </h1>
                <CountryFlag
                  countryCode="IN"
                  svg
                  style={{ width: "5em", height: "5em" }}
                />
              </div>
              <div className="item">
                <h5>
                  377, 1st Floor, BMM, Phase 11, Sector 65,
                  <br />
                  Sahibzada Ajit Singh Nagar, Punjab 160062
                </h5>
                <p>
                  <a className="footerEmailer" href="mailto:Sales@kbitsolutions.com.au">
                    <box-icon type="solid" name="envelope"></box-icon>{" "}
                    Sales@kbitsolutions.com.au
                  </a>
                </p>
                <p>
                  <a className="footerEmailer" href="tel:+61455254491">
                    <box-icon type="solid" name="phone-call"></box-icon> +61455 254 491
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={chd} alt="Second slide" className="img-fluid rounded" />
            </div>
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Contactus;
