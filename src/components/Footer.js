import React from "react";
import './Footer.css';

let Footer = () =>{
    return(
        <React.Fragment>
            
            <footer className="footer_nav py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer_haeder">
                                <h2>Industries</h2>
                            </div>
                            <div className="footer_list">
                                <ul>
                                    <li>
                                        <a href="/Industry/FoodDelivery">Food Delivery</a>
                                    </li>
                                    <li>
                                        <a href="/Industry/ECommerce2">E- Commerce Delivery</a>
                                    </li>
                                    <li>
                                        <a href="Industry/EducationCRM">Education</a>
                                    </li>
                                    <li>
                                        <a href="/Industry/RealEstateCRM">Real Estate</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="footer_haeder">
                                <h2>Services</h2>
                            </div>
                            <div className="footer_list">
                                <ul>
                                    <li>
                                        <a href="/ServicesGrid/BlockChain">Blockchain Development</a>
                                    </li>
                                    <li>
                                        <a href="/ServicesGrid/WebDevelopment">Web Development</a>
                                    </li>
                                    <li>
                                        <a href="/ServicesGrid/GrowthandMarketing">Growth & Marketing</a>
                                    </li>
                                    <li>
                                        <a href="/Industry/EMart"> E-mart</a>
                                    </li>
                                    <li>
                                        <a href="/Industry/Spactacles"> Spectacles store</a>
                                    </li>
                                    <li>
                                        <a href="/ServicesGrid">  Liquor store</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="footer_haeder">
                                <h2>Quick Links</h2>
                            </div>
                            <div className="footer_list">
                                <ul>
                                    <li>
                                        <a href="#">Why Choose Us</a>
                                    </li>
                                    <li>
                                        <a href="#">How We Work</a>
                                    </li>
                                    <li>
                                        <a href="/Industry/CRM">CRM</a>
                                    </li>
                                    <li>
                                        <a href="/Industry/SalesCRM">Sales CRM</a>
                                    </li>
                                    <li>
                                        <a href="/Industry/PartnerShip"> ParternerShip</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="footer_haeder">
                                <h2>Whatsapp Updates</h2>
                            </div>
                            <div className="footer_list">
                                <ul>
                                <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input
          type="text"
          className="form-control form-control-md"
          id="inpMobilePhone"
          name="MobilePhone"
          placeholder="Enter Your Phone Number"
         
          required
        />
         <button type="submit" className="btn mt-2 text-white fw-bold" style={{ backgroundColor: '#8BC541' }}>
  Submit
</button>

        <div className="follow_social pt-3">
            <h2>Follows On</h2>
            <a href="https://www.facebook.com/profile.php?id=100088825674471"><box-icon type='logo' name='facebook-circle'></box-icon></a>
            <a href="#"><box-icon type='logo' name='twitter'></box-icon></a>
            <a href="#"><box-icon type='logo' name='pinterest-alt'></box-icon></a>
            <a href="#"><box-icon type='logo' name='instagram'></box-icon></a>
            <a href="https://www.linkedin.com/company/90224691/admin/dashboard/"><box-icon type='logo' name='linkedin'></box-icon></a>
            <a href="#"><box-icon type='logo' name='youtube'></box-icon></a>
        </div>

    
  </div>
                                    
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </footer>
        </React.Fragment>
    );
}
export default Footer;