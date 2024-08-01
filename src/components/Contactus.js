import React from "react";

let Contactus = () => {
  return (
    <React.Fragment>
      <section className="contact_us py-2">
        <div className="container">
          <div className="row">
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
                    <i className="fa fa-envelope-o"></i> Sales@kbitsolutions.com.au
                  </a>
                </p>
                <p>
                  <a className="footerTel" href="tel:+61455254491">
                    <i className="fa fa-phone"></i> +61455 254 491
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
                    <i className="fa fa-envelope-o"></i> Sales@kbitsolutions.com.au
                  </a>
                </p>
                <p>
                  <a className="footerTel" href="tel:+61455254491">
                    <i className="fa fa-phone"></i> +61455 254 491
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                alt="Dubai"
                width="650"
                height="auto"
                src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/uploads/2019/09/dubai.webp"
                className="country-wonder lazyloaded img-fluid"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contactus;
