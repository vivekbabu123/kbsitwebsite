import React from "react";
import Header from "../components/Header";
import herosalescrm from '../assest/image/salescrm/herobg.png';
import "./Salescrm.css";
import herosalescrm1 from '../assest/image/salescrm/1.png';
import herosalescrm2 from '../assest/image/salescrm/2.webp';
import herosalescrm3 from '../assest/image/salescrm/3.webp';
import herosalescrm4 from '../assest/image/salescrm/4.webp';
import herosalescrm5 from '../assest/image/salescrm/5.webp';
import herosalescrm6 from '../assest/image/salescrm/6.webp';
import herosalescrm7 from '../assest/image/salescrm/7.webp';
import herosalescrm8 from '../assest/image/salescrm/8.webp';
import herosalescrm9 from '../assest/image/salescrm/9.webp';
import herosalescrm10 from '../assest/image/salescrm/10.webp';
import herosalescrm11 from '../assest/image/salescrm/c1.png';
import herosalescrm12 from '../assest/image/salescrm/c2.png';
import herosalescrm13 from '../assest/image/salescrm/c3.png';
import herosalescrm14 from '../assest/image/salescrm/c4.png';
import herosalescrm15 from '../assest/image/salescrm/fot.png';
import Slider from "react-slick";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";


const testimonials = [
    {
     
      description:
        "With a system designed to meet your needs, you can manage your digital assets simply and quickly.",
      title: "CMS Solutions: Create & Manage Digital Content",
      position: "(Sr IT Director at Instrek & ID Design Ltd)",
    },
    {
    
      description:
        "To expand income opportunities, eliminate inefficient workflows and improve the effectiveness of internal and customer-facing processes.",
      title: "BPMS Solutions: Automate Business Processes",
      position: "",
    },
    {
   
      description:
        "With unique solutions to streamline each relationship-related procedure, you may effectively increase revenue.",
      title: "CRM Solutions: Improved Customer Relationships",
      position: "",
    },
]
const featuressalescrm = [
    {
        title: 'Contact Management',
        description: 'Manage your contacts like a boss, with every communication and detail at your fingertips in seconds.',
    },
    {
        title: 'Subscriptions',
        description: 'Manage your customers\' memberships and subscriptions from a single interface. There will be no more spreadsheets to calculate their renewal dates.',
    },
    {
        title: 'User Engagement',
        description: 'Connect with your website visitors and increase the number of leads generated by your marketing efforts.',
    },
    {
        title: 'Invoicing',
        description: 'Quickly send invoices to your customers. All of the information is retrieved automatically from CRM.',
    },
    {
        title: 'Ticketing System',
        description: 'Better support helps to retain customers and allows them to self-resolve issues. You can provide 24x7 support with a proper ticketing system.',
    },
    {
        title: 'Marketing Automation',
        description: 'Automate your marketing and run campaigns without relying on humans. Send Email, SMS, and WhatsApp messages based on business rulesets.',
    },
    {
        title: 'Workflows',
        description: 'Let your actions start a chain reaction to update the CRM or perform actions like sending an email to user or customers.',
    },
    {
        title: 'Bulk Email Campaigns',
        description: 'Email still has the highest ROI. Use any email service provider to send bulk email campaigns directly from the CRM panel.',
    },
    {
        title: 'Bulk SMS Campaigns',
        description: 'SMS is inexpensive and has a high open rate. Use any SMS service provider to run bulk email campaigns directly from the CRM panel.',
    },
    {
        title: 'Proposals',
        description: 'Create personalized proposals for your clients and send them as a PDF attachment. You can also create templates that all employees can use.',
    },
    {
        title: 'Custom Forms',
        description: 'Create forms to your specifications and attach them to the customer\'s profile. Get the data you want and need.',
    },
    {
        title: 'Deals Management',
        description: 'Always keep your sales pipeline close at hand. There\'s no need to poll your team or search the CRM.',
    },
    {
        title: 'Daily Digest',
        description: 'On a single screen, you can see all of your tasks, missed follow-ups, and recommendations. Get sales performance charts and graphs and act on them.',
    },
    {
        title: 'Task Scheduler',
        description: 'Create and schedule tasks to receive an automatic reminder before the meeting or follow up. Meetings are no longer forgotten.',
    },
    {
        title: 'Webhooks',
        description: 'It is simple to send data to any third-party software. A straightforward approach to using one-way APIs.',
    },
    {
        title: 'Escalations',
        description: 'Custom forms and processes can help you automate approval management. Improve approval turnaround times.',
    },
];

const productivityData = [
    {
        id: 1,
        title: 'Contact Management & Profiling',
        description: 'Have you forgotten about your last communication with your customer or the quote you sent them? With a complete conversation history, you’ll always know what’s going on with the customer. All customer communications (email, SMS, ZipCalls, invoices, quotes, and tasks) will be centralized.',
        img: herosalescrm2,
        imgFirst: true,
    },
    {
        id: 2,
        title: 'Team Performance Dashboard',
        description: 'From a single dashboard, you can see how your team is performing. From their daily performance to other analytical data on a single page, management is able to make the right decision at the right time.',
        img: herosalescrm3,
        imgFirst: false,
    },
    {
        id: 3,
        title: 'Daily Digest',
        description: 'Have you missed any follow-ups? When you receive a large number of leads on a daily basis, the chances of losing old leads increase. With Daily Digest, you’ll get a clear picture of your daily tasks, missed follow ups, goals met, and a plethora of other analytical data.',
        img: herosalescrm4,
        imgFirst: true,
    },
    {
        id: 4,
        title: 'Generate Leads On Your Website',
        description: 'To generate leads on your website, you don’t need an IT team or a developer. Our two-line code will provide you with a free contact form with calling features to help you generate more leads from your website.',
        img: herosalescrm5,
        imgFirst: false,
    },
    {
        id: 5,
        title: 'File Manager',
        description: 'There are numerous documents that you send to customers and receive responses from them, such as KYC documents, proposals, RFPs, and so on. Keep them all in one place with an in-built file manager for each user.',
        img: herosalescrm6,
        imgFirst: true,
    },
    {
        id: 6,
        title: 'Custom Filters',
        description: 'Create reports based on your needs. Custom reports assist you in retrieving the data from CRM that is most important to you.',
        img: herosalescrm7,
        imgFirst: false,
    },
    {
        id: 7,
        title: 'Re-Marketing',
        description: 'Create personalized reports for targeted marketing. You can create email groups based on CRM data such as Hot Leads, In-Progress Leads, or custom tags.',
        img: herosalescrm8,
        imgFirst: true,
    },
    {
        id: 8,
        title: 'Workflows',
        description: 'Workflow allows you to automate time-consuming tasks based on actions. Sending an autoresponder email to a customer, for example, as soon as a lead is created in the CRM.',
        img: herosalescrm9,
        imgFirst: false,
    },
    {
        id: 9,
        title: 'Marketing Automation',
        description: 'Create email flows that will send emails to customers on a regular basis. You can, for example, create a flow to send a tutorial via email every alternate day or a reminder of pending service after 15 days from the last reminder.',
        img: herosalescrm10,
        imgFirst: true,
    },
    {
        id: 10,
        title: 'Task Scheduling',
        description: 'Set up reminders for the follow-up so you don’t forget. Every missed follow-up is a lost business opportunity, which is not recommended for any company.',
        img: herosalescrm10,
        imgFirst: false,
    },
];

const contactManagementData = [
    {
        id: 1,
        img: herosalescrm11,
        title: 'Contact Management',
        description: 'Manage every interaction with your customer through a simple interface. Get all communication at your fingertips.',
    },
    {
        id: 2,
        img: herosalescrm12,
        title: 'Lead Generation',
        description: 'Engage your website visitors and turn them into leads. Texting is old and boring; with ZipCall, you can communicate with them in real time.',
    },
    {
        id: 3,
        img: herosalescrm13,
        title: 'Invoicing',
        description: 'Let your team members send quotes and invoices directly from the CRM panel and save your time and convert customers faster.',
    },
    {
        id: 4,
        img: herosalescrm14,
        title: 'Helpdesk',
        description: 'Innovative financial market program Allow your customers to submit support tickets. Your team members can respond directly from their CRM panel.',
    },
];

const FlipBox = ({ type, name, title, frontContent, backContent }) => (
    <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="whycard text-center flip-box">
            <div className="flip-box-inner">
                <div className="flip-box-front">
                    <div className="card-body">
                        <div className="flip-box-icon">
                            <box-icon type={type} name={name} size="50px"></box-icon>
                        </div>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{frontContent}</p>
                    </div>
                </div>
                <div className="flip-box-back">
                    <div className="card-body">
                        <div className="flip-box-icon">
                            <box-icon type={type} name={name} size="50px" color="#fff"></box-icon>
                        </div>
                        <p className="card-text">{backContent}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const SalesCRM = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
    return (
        <React.Fragment>
            <Header />
            {/* SalesCRM Hero Start */}
            <section className="salescrm_hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="salescrm_txt">
                                <h2>We make good CRM strategies for you</h2>
                                <button className="btn text-white"> Get started</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="salescrm_img">
                                <img src={herosalescrm} alt="img" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SalesCRM Hero Finish */}

            {/* Improve Productivity Start */}
            <section className="improve_production">
                <div className="container">
                    <h2 className="improve_heading text-center">Best Sales Tools To Improve Productivity</h2>
                    {productivityData.map(item => (
                        <div className="row align-items-center pt-4" key={item.id}>
                            {item.imgFirst ? (
                                <>
                                    <div className="col-md-6">
                                        <div className="improve_img">
                                            <img src={item.img} alt={item.title} className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="improve_txt">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-md-6">
                                        <div className="improve_txt">
                                            <h4>{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="improve_img">
                                            <img src={item.img} alt={item.title} className="img-fluid" />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            {/* Improve Productivity Finish */}

            {/* Multiple Softwares Start */}
            <section className="multiple_salescrm">
                <div className="container">
                    <h2 className="improve_heading text-center">Stop Using Multiple Softwares To Manage Customers Best Sales CRM For Small Business</h2>
                    <div className="row">
                        <FlipBox
                            type="solid"
                            name='cog'
                            title="Sales"
                            frontContent=""
                            backContent="Teams from sales and marketing are given a shared understanding of customers and access to the complete sales process."
                        />
                        <FlipBox
                            type="solid"
                            name="cog"
                            title="Marketing"
                            frontContent=""
                            backContent="Sales is not a one-time interaction. You will need to nurture your leads' relationships. Intueri re-marketing automation aids in the resolution of the most pressing marketing issue."
                        />
                        <FlipBox
                            type="solid"
                            name="support"
                            title="Support"
                            frontContent=""
                            backContent="Sales is not a one-time interaction. You will need to nurture your leads' relationships. Intueri re-marketing automation aids in the resolution of the most pressing marketing issue."
                        />
                    </div>
                </div>
            </section>
            {/* Multiple Softwares Finish */}

            {/* Essential Tools Start */}
            <section className="essential_tool">
                <div className="container">
                    <h2 className="improve_heading text-center">All The Essential Tools To Run Your Business Smoothly…</h2>
                    <div className="row pt-4">
                        {contactManagementData.map(item => (
                            <div className="col-md-6 col-lg-3 col-xl-3" key={item.id}>
                                <div className="contact_management text-center">
                                    <img src={item.img} alt={item.title} className="img-fluid" />
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Essential Tools Finish */}

            {/* Best Sales Tools Start */}
            <section className="best_saletools">
                <div className="container">
                    <h2 className="improve_heading text-center">Best Sales Tools To Improve Productivity</h2>
                    <div className="row">
                        {featuressalescrm.map((featuressalescrm, index) => (
                            <div className="col-md-6 col-lg-3 col-xl-3 p-3" key={index}>
                                <div className="contact_best_tools flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>{featuressalescrm.title}</h4>
                                            <p>{featuressalescrm.description}</p>
                                            <span><box-icon name='right-arrow-alt'></box-icon></span>
                                        </div>
                                        <div className="flip-card-back">
                                        <h4>{featuressalescrm.title}</h4>
                                        <p>{featuressalescrm.description}</p>
                                        <span><box-icon name='right-arrow-alt'></box-icon></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Best Sales Tools Finish */}
            {/* contact form start */}
                        <section className="sales_ermcontact">
                            <div className="container">
                                <div className="row">
                                    <div className="serm_contact">
                                        <h2 className="text-white">Contact Form</h2>
                                        <p className="text-white">Without a website, generate leads from any platform (Social Media, Email, SMS, etc.). It's completely free!!</p>
                                        <span className="bg-white px-3 py-3 rounded-pill"><box-icon name='right-arrow-alt' size='19px'></box-icon></span>
                                    </div>

                                </div>
                            </div>

                        </section>
            {/* contact form finish */}
            <section className="testomonial_second">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
            
                    <div className="testimonial-widget-container">
                      <div
                        id="testimonial-carousel"
                        className="testimonial-slider ct-slick-slider"
                      >
                        <div className="carousel-inner">
                          <Slider {...settings}>
                            {testimonials.map((item, index) => (
                              <div
                                className="testimonial-item"
                                data-wow-duration="1.2s"
                                key={index}
                              >
                                <div className="testimonial-icon">
                                  <box-icon
                                    type="solid"
                                    name="quote-alt-right"
                                    size="72px"
                                  ></box-icon>
                                </div>

                                <div className="testimonial-description display-6">
                                  {item.description}
                                </div>
                            
                                  <div className="testimonial-meta">
                                    <h2 className="testimonial-title">
                                      {item.title}
                                    </h2>
                                    
                                  </div>
                                </div>
                           
                            ))}
                          </Slider>
                        </div>
                       
                      </div>
                    </div>
                  </div>
             
            <div className="col-md-6">
              <div className="testominal_2 text-center">
                <img src={herosalescrm15} alt="img" className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contactus/>
      <Footer/>
        </React.Fragment>
    );
};

export default SalesCRM;
