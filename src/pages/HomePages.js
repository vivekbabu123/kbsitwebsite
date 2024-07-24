import React from "react";
 import Header from "../components/Header";
 import './Homepage.css';


 import Footer from "../components/Footer";
 import hero1 from "../assest/image/New-Project-49-1.webp";
 import hero2 from "../assest/image/New-Project-50-1.webp";
 import hero3 from "../assest/image/New-Project-51-1.webp";
 import hero4 from "../assest/image/New-Project-52.webp";
 import hero5 from "../assest/image/New-Project-53-1.webp";
 import partner1 from "../assest/image/partnersico@3x.png";
 import partner2 from "../assest/image/ctaimg-2-768x625.webp";
 import attractiv1 from "../assest/image/vector-smart-object-copy@2x.png";
 import attractiv2 from "../assest/image/retainlytics@2x.png";
 import attractiv3 from "../assest/image/customize@2x.png";
 import attractiv4 from "../assest/image/scalable@2x.png";
 import user from "../assest/image/5-d-51-b-1589-c-copy@3x.png";
import SimpleSlider from "../components/SimpleSlider";



    let HomePages = () =>{
        return(
          <React.Fragment>
            <Header/>
            {/* hero start */}
              <section className="hero">
                <div className="container">
                  <div className="row">
                  <div className="hero_content">
                        <h1>Transforming The Way You <br/>
                            <span>
                            Launch. Run Grow Your 
                            </span> <br/>
                            Business Digitally</h1>
                            <h6>Accelerating growth for brands like you with technology, <br/>
                            experience & innovation for a decade.</h6>
                            <button> Get Started</button>
                    </div>

                    <div className="hero_logo pt-5">
                        <img src={hero1} alt="img" className="img-fluid"/>
                        <img src={hero2} alt="img" className="img-fluid"/>
                        <img src={hero3} alt="img" className="img-fluid"/>
                        <img src={hero4} alt="img" className="img-fluid"/>
                        <img src={hero5} alt="img" className="img-fluid"/>
                  </div>
                  </div>
              
                 
                </div>

              </section>
              {/* hero finish */}
              <section className="empower_bussiness">
        <div className="container">
            <div className="row">
                <div className="empower_content">
                    <h2>We Empower Your Business With <br/> Out-Of-The-Box Digital Solutions</h2>
                    <button>Get In Touch</button>
                </div>

            </div>
        </div>

       </section>
        {/* Empower bussiness finish  */}
         {/* partnership start  */}
         <section className="partnersip">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="partnership_txt">
                            <div className="partner_heading d-flex pb-4">
                                <img src={partner1} alt="img" className="img-fluid"/>
                                <h2 className="ps-5">PARTNERSHIPS</h2>
                            </div>
                            <div className="empower_partner">
                               <h5>Empower Your Clients With Industry-Leading Technology Solution</h5>
                               <p>Collaborate with us to earn more by selling, customizing or integrating our products</p>
                               <button>Get in Touch</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="partner_img">
                            <img src={partner2} alt="img" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>

         </section>
          {/* partnertship finish  */}
          {/* <!-- card interactive design --> */}
           <section className="card_interactive mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="attractive_design d-flex justify-content-between align-items-center">
                                <div className="attractive_img">
                                    <img src={attractiv1} alt="img" className="img-fluid"/>
                                </div>
                                <div className="attractive_content">
                                    <h2>Build Interactive Designs</h2>
                                    <p>
                                    For your company, our in-house design <br/>software, Allurive, adopts a novel strategy to <br/>produce exceptional customer experiences.
                                    </p>
                                    <button>Get in Touch</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="attractive_design d-flex justify-content-between align-items-center">
                                <div className="attractive_img">
                                    <img src={attractiv2} alt="img" className="img-fluid"/>
                                </div>
                                <div className="attractive_content">
                                    <h2>Make wiser business choices</h2>
                                    <p>
                                    Utilise Retainlytics, a top-secret tool, to collect<br/>precise data and promote your brand’s <br/>personalised, customer-focused marketing.
                                    </p>
                                    <button>Get in Touch</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-3">
                        <div className="attractive_design d-flex justify-content-between align-items-center">
                                <div className="attractive_img">
                                    <img src={attractiv3} alt="img" className="img-fluid"/>
                                </div>
                                <div className="attractive_content">
                                    <h2>Enjoy Flexibility To Customize</h2>
                                    <p>
                                    Our in-house design tool, Allurive, uses a cutting - <br/>edge approach for your business to create <br/>remarkable customer experiences.
                                    </p>
                                    <button>Get in Touch</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-3">
                        <div className="attractive_design d-flex justify-content-between align-items-center">
                                <div className="attractive_img">
                                    <img src={attractiv4} alt="img" className="img-fluid"/>
                                </div>
                                <div className="attractive_content">
                                    <h2>A Robust & Scalable App</h2>
                                    <p>
                                    Greater scope of scalability help attract & <br/>manage new opportunities arising for your<br/>business in the future
                                    </p>
                                    <button>Get in Touch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           </section>
            {/* card interactive design  */}

            {/* top vetted developers start   */}
             <section className="top_vated mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="top_150 p-5">
                                <h2 className="text-white text-center border-bottom  ">650+</h2>
                                <h5 className="text-center text-white text-nowrap pt-2"> <span><box-icon 
                               name='code-alt'
                               color="#8BC541"  
                                 size="18px"
                               ></box-icon>
                               </span> Top Vetted Developers</h5>
                            </div>
                            

                        </div>
                        <div className="col-md-3">
                        <div className="top_150 p-5">
                                <h2 className="text-white text-center border-bottom  ">1500+</h2>
                                <h5 className="text-center text-white text-nowrap pt-2"> <span><box-icon
                                type='solid' 
                               name='user'
                               color="#8BC541"  
                                 size="18px"
                               ></box-icon></span> Top Vetted Developers</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="top_150 p-5">
                                <h2 className="text-white text-center border-bottom  ">100+</h2>
                                <h5 className="text-center text-white text-nowrap pt-2"> <span><box-icon 
                               name='globe'
                               color="#8BC541"  
                                 size="18px"
                               ></box-icon></span> Top Vetted Developers</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="top_150 p-5">
                                <h2 className="text-white text-center border-bottom  ">150+</h2>
                                <h5 className="text-center text-white text-nowrap pt-2"> <span><box-icon 
                               name='building'
                               color="#8BC541"  
                                 size="18px"
                               ></box-icon></span> Top Vetted Developers</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row py-5">
                          <div className="col-12">
                              <div className="free_consputatiopn d-flex justify-content-between align-items-center">
                                  <h2>Setup A Free Consultation To Know How <br/>To Take Your Ideas From Concept To <br/>Reality</h2>
                                    <button className="text-nowrap">Get In Touch</button>
                              </div>
                          </div>
                    </div>
                </div>

             </section>
             {/* client start */}
                <section className="client py-5">
                  <div className="container">
                    <div className="row">
                          <div className="client_heading pb-5">
                              <div className="main_clinet d-flex align-items-center">
                                <div className="logo_client">
                                    <img src={user} alt="user" className="img-fluid"/>
                                   </div>
                                   <div className="logo_txt ps-5">
                                      <h3 className="mb-0">CLIENTS</h3>
                                   </div>
                              </div>
                              <div className="text_client pt-3">
                                <h3 className="fw-bold">We Have Made Them Taste Success</h3>
                             </div>
                          </div>
                    </div>
                  </div>
                  <SimpleSlider/>

                </section>
             {/* client finish */}
             {/* why choose us start */}
              <section className="choose_us"> 
                <div className="container">
                  <div className="row">
                    <div className="choose_txt d-flex">
                        <h2>WHY CHOOSE US</h2>
                      
                    </div>
                    <div className="choose_bold">
                        <h1>Why Choose Our Digital Solution?</h1>
                        <p>We offer a collection of ground-breaking technologies to build unrivalled mobile experiences for your company in the future.</p>
                    </div>

                  </div>
                </div>

              </section>
             {/* why choose us finish */}
             {/* contact us start */}
                  <section className="contact_us py-2">
                    <div className="container">
                      <div className="row">
                          <div className="contact_title">
                            <h6>Contact Us</h6>
                            <h1>It’s very easy to <span>contact </span> us</h1>
                          </div>
                          <div className="row align-itmes-center">
                            <div className="col-md-6">
                 
                           <div className="">
                           <div className="item">
                              
                               <div className="container">
                                   <h4>Australia</h4>
                                   <h5>Level 1,office 2, 73Malop<br/>  street Geelong, Victoria Australia</h5>
                                   <p><a className="footerEmailer" href="mailto:Sales@kbitsolutions.com.au"><i className="fa fa-envelope-o"></i>Sales@kbitsolutions.com.au</a></p>
                                   <p><a className="footerTel" href="tel:+61455 254 491"><i className="fa fa-phone"></i> +61455 254 491</a></p>
                               </div>
                           </div>
                           <div className="item">
                               <div className="container">
                                   <h4>India</h4>
                                   <h5>377 , 1st Floor, Bmm, Phase 11, Sector 65,<br/> Sahibzada Ajit Singh Nagar, Punjab 160062</h5>
                                   <p><a className="footerEmailer" href="mailto:Sales@kbitsolutions.com.au"><i className="fa fa-envelope-o"></i> Sales@kbitsolutions.com.au</a></p>
                                   <p><a className="footerTel" href="tel:+61455 254 491"><i className="fa fa-phone"></i>+61455 254 491</a></p>
                               </div>
                           </div>
                     </div>
                            </div>
                            <div className="col-md-6">
                            <img 
                                   alt="Dubai" 
                                   width="650PX" 
                                   height="auto" 
                                   src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/uploads/2019/09/dubai.webp" 
                                   className="country-wonder lazyloaded" 
                                   decoding="async" 
                               />
                            </div>
                          </div>
                         
            
                      </div>
                    </div>

                  </section>
              {/* contact us finish */}
              <Footer/>
            </React.Fragment>
          
          
        );
    }
export default HomePages;