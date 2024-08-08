import React from "react";
import Contactimage from "../assest/image/ithelpdesk.png";

let Contactus = () => {
  return (
    <React.Fragment>
      <section className="contact_us py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="contact_title">
                <h6>Contact Us</h6>
                <h1>It’s very easy to <span>contact </span> us</h1>
              </div>
              <div className="item">
                <h4>Australia</h4>
                <h5>
                  Level 1, office 2, 73 Malop<br />
                  Street Geelong, Victoria, Australia
                </h5>
                <p>
                  <a className="footerEmailer" href="mailto:Sales@kbitsolutions.com.au">
                  <box-icon type='solid' name='envelope'></box-icon>Sales@kbitsolutions.com.au
                  </a>
                </p>
                <p>
                  <a className="footerTel" href="tel:+61455254491">
                  <box-icon type='solid' name='phone-call'></box-icon> +61455 254 491
                  </a>
                </p>
              </div>
              <div className="item">
                <h4>India</h4>
                <h5>
                  377, 1st Floor, BMM, Phase 11, Sector 65,<br />
                  Sahibzada Ajit Singh Nagar, Punjab 160062
                </h5>
                <p>
                  <a className="footerEmailer" href="mailto:Sales@kbitsolutions.com.au">
                  <box-icon type='solid' name='envelope'></box-icon> Sales@kbitsolutions.com.au
                  </a>
                </p>
                <p>
                  <a className="footerTel" href="tel:+61455254491">
                  <box-icon type='solid' name='phone-call'></box-icon> +61455 254 491
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center">
             <img src={Contactimage} alt="image" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contactus;
