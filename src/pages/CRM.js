import React from "react";
import "./crm.css";
import Header from "../components/Header";
import crm_img from "../assest/image/crm/herocrm.png";
import crm_img1 from "../assest/image/crm/salecrm.png";
import crm_img2 from "../assest/image/crm/educrm.png";
import crm_img3 from "../assest/image/crm/realestatecrm.png";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

const crmData = [
  {
    id: 1,
    img: crm_img1,
    title: "Sale CRM",
  },
  {
    id: 2,
    img: crm_img2,
    title: "Education CRM",
  },
  {
    id: 3,
    img: crm_img3,
    title: "Real Estate CRM",
  },
];
const cardData = [
  {
    icon: "badge-check",
    title: "Usability",
    description:
      "It's not exciting to take time off from running a small company or lean startup to learn a new, complicated platform. Simpleness and ease of use should be the deciding considerations; the best platform is one that feels intuitive and provides simple access to and interpretation of information.",
  },
  {
    icon: "badge-check",
    title: "Customization",
    description:
      "As a small company, you probably don't follow a manual and instead choose to do things your way. In light of this, we advise searching for customization features so you can adapt CRM software to your unique company requirements..",
  },
  {
    icon: "badge-check",
    title: "Automation",
    description:
      "You can spend more time concentrating on meaningful, mentally stimulating work by automating repetitive chores. Data entry, client emails and follow-ups, and information area updating should all have automation features.",
  },
  {
    icon: "badge-check",
    title: "Vendor customer support",
    description:
      "Most likely, you don't have an IT staff of your own. This calls for you to ensure that the CRM you select is supported by an excellent customer support staff, one that will be available to reduce the learning curve of the product, respond to any persistent questions, and swiftly fix technical issues.",
  },
  {
    icon: "badge-check",
    title: "Affordable pricing",
    description:
      "For SMBs and companies looking for CRM tools, cost clearly makes or breaks the deal. When there aren't many people available to help, you want to make sure that every dollar you spend is worthwhile. If you have a limited budget or are unsure whether this type of software will be helpful to you,",
  },
];
const leadsData = [
    {
        id: 1,
        icon: 'user-voice',
        text: 'Provide leads and clients',
    },
    {
        id: 2,
        icon: 'user-voice',
        text: 'Focus sales teams on the hottest prospects',
    },
    {
        id: 3,
        icon: 'user-voice',
        text: 'Monitor, analyze, and improve results',
    },
    {
        id: 4,
        icon: 'user-voice',
        text: 'Shorten the sales cycle',
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
              <box-icon
                type={type}
                name={name}
                size="50px"
                color="#fff"
              ></box-icon>
            </div>
            <p className="card-text">{backContent}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

let CRM = () => {
  return (
    <>
      <Header />
      <section className="crm_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="crm_herotxt">
                <h2>CRM… Get Your CRM Here.</h2>
                <a href="#">
                  {" "}
                  <button className="btn text-white">Get Started</button>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="crm_img">
                <img src={crm_img} alt="img" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card Crm start */}
      <section className="card_crm">
        <div className="container">
          <div className="row">
            {crmData.map((crm) => (
              <div className="col-md-4" key={crm.id}>
                <div className="sales_crm text-center">
                  <img
                    src={crm.img}
                    alt={crm.title}
                    className="img-fluid w-75"
                  />
                  <h2>{crm.title}</h2>
                  <button className="btn text-white">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* card crm finish */}
      {/* small need Crm start */}
      <section className="sales_need">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sales_needtxt">
                <h2 className="text-center">
                  Why your small business needs CRM
                </h2>
                <p>
                  Platforms for customer interaction management come in a
                  variety of forms. CRM software used to be aimed at businesses
                  on the corporate level. That’s not the situation anymore.
                </p>
                <p>
                  A CRM platform can now be implemented by small companies
                  without costing them an arm and a leg. This is fantastic news
                  because it means that you can boost sales by double-digit
                  percentage points by implementing a CRM system.
                </p>
                <p>
                  Workflow simplification within a single programs makes daily
                  tasks easier and frees up resources for expansion. CRM offers
                  a clearly defined set of procedures to increase deal closure,
                  complete duties promptly, and minimize misunderstandings.
                </p>
                <p>
                  You can improve your sales process by using tools like lead
                  management and sales funnels. You can streamline your process
                  by creating a sales pipeline. Tools for opportunity management
                  help you spot potential future sales, while tools for customer
                  support help you improve the customer experience, understand
                  your audience, and lower churn so your business can scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* small need Crm finish */}
      {/* small business CRM  start */}
      <section className="small_bussinescrm">
        <div className="container">
          <h2 className="heading_crm text-center">
            Things to look for in small business CRM software
          </h2>
          <div className="row">
            {cardData.map((card, index) => (
              <div key={index} className={`col-md-${index < 3 ? 4 : 6}`}>
                <div className="whycardecom align-items-center">
                  <box-icon
                    name={card.icon}
                    className="card-icon"
                    size="36px"
                    color="#34AD2F"
                  ></box-icon>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* small business CRM  finish */}
      {/* crm solution start */}
      <section className="crm_sloution">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="crm_solutionexpensive d-flex justify-content-around align-items-center p-4 bg-primary rounded-pill">
                <h2 className="text-center text-white fw-bold">
                  Develop your company with a small business CRM solution{" "}
                  <br></br>that is inexpensive.
                </h2>
                <button className="btn text-white"> Conatct us! </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* crm solution finish */}
      {/* benefit crm start */}
      <section className="benefit_crm">
        <div className="container">
          <h2 className="heading_benfit text-center">
            How can you benefit from a CRM for small business?
          </h2>
          <div className="row">
            <FlipBox
              type="solid"
              name="receipt"
              title="360-degree view of the customer  "
              frontContent="Teams from sales and marketing are given a shared understanding of customers and access to the complete sales process."
              backContent="Teams from sales and marketing are given a shared understanding of customers and access to the complete sales process."
            />
            <FlipBox
              type="solid"
              name="badge-dollar"
              title="Qualify leads"
              frontContent="Identify the leads that are most likely to convert into sales with the aid of predictive contact scoring, which can hasten the qualification process."
              backContent="Identify the leads that are most likely to convert into sales with the aid of predictive contact scoring, which can hasten the qualification process."
            />
            <FlipBox
              type="solid"
              name="low-vision"
              title="Visibility"
              frontContent="With a visible deal pipeline, you can monitor each step of your sales process and improve your forecasting."
              backContent="With a visible deal pipeline, you can monitor each step of your sales process and improve your forecasting."
            />
            <FlipBox
              type="solid"
              name="file-find"
              title="Adapt easily"
              frontContent="Easy to use and quick to set up, giving you more time to hire and train salespeople."
              backContent="Easy to use and quick to set up, giving you more time to hire and train salespeople."
            />
            <FlipBox
              type="solid"
              name="virus"
              title=" Automate routine tasks "
              frontContent="By automating operations like sending emails and inserting data into the CRM, you may increase team productivity."
              backContent="By automating operations like sending emails and inserting data into the CRM, you may increase team productivity."
            />
          </div>
        </div>
      </section>
      {/* benefit crm finish */}
      {/* what does system do start */}
      <section className="system_do">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="system_txt">
                <h1 className="text-center fw-bold pb-3">
                  What Does a CRM System Do?
                </h1>
                <p>
                  The primary purpose of any customer information system,
                  including CRM software, is contact management. A CRM’s main
                  function is to organize and maintain all data for all types of
                  contacts, from leads to business partners.
                </p>
                <h4 className="fw-bold">
                  Well, so this sounds a little bit like a spreadsheet, you
                  might be thinking. What can’t a spreadsheet do that a CRM can?
                </h4>
                <h2>Upgrade Your CRM</h2>
                <p>
                  A spreadsheet is great if you have under 100 contacts or
                  you’re tracking only static info like name, email address,
                  phone number, company name, website, etc. A spreadsheet can’t
                  compete with a CRM in tracking more complex, dynamic data like
                  what emails a contact has opened, what pages they’ve visited
                  on your website or their last purchase date. Your CRM is
                  always updating automatically as your leads and customers take
                  action, while data in a spreadsheet becomes stale the second
                  you stop manually adding to it.
                </p>
                <p>
                  With lead scoring, the best CRM software quickly identifies
                  how warm or cold a lead actually is. In accordance with the
                  parameters you establish, points are added to a lead record
                  for significant actions your lead completes (such as
                  submitting a form or clicking a link) so your sales staff can
                  determine which leads are the most hot off the press. Without
                  a CRM, lead scoring is all but impossible.
                </p>
                <h1 className="text-center fw-bold py-4">
                  What a CRM Doesn’t Do
                </h1>
                <p>
                  Code processes like production, warehousing, shipping,
                  engineering, or finance are not intended to be assisted by
                  CRMs.
                </p>
                <p>
                  Naturally, CRM technologies cannot control what they are
                  unable to observe. So, it reduces the efficacy of the system
                  for the entire team if people work leads or deals outside of
                  it.
                </p>
                <p>
                  Some CRM applications are only used for data management. To
                  help entrepreneurs manage their entire business more
                  effectively, an all-in-one CRM system also provides crucial
                  functions like landing pages, quotes, and invoicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* what does system do finish */}
      {/* crm plateform start */}
      <section className="crm_plateform">
        <div className="container">
          <h2 className="crm_platefrm text-center">
            Examples of How a CRM Platform Works
          </h2>
          <p className="crm_text text-center">
            A strong CRM does more than just gather data; it also assists you in
            using it to:
          </p>
          <div className="row">
            {leadsData.map(lead => (
                <div className="col-md-6 col-lg-3 col-xl-3" key={lead.id}>
                    <div className="leads_client d-flex justify-content-around align-items-center">
                        <box-icon type="solid" size="40px" color="#fff" name={lead.icon}></box-icon>
                        <h4>{lead.text}</h4>
                    </div>
                </div>
            ))}
        </div>
        </div>
      </section>
      {/* crm platefroem finish */}
      {/* market start */}
      <section className="market_crm">
        <div className="container">
            <div className="row">
            <h2 className="crm_platefrm text-center">
            Marketing
          </h2>
          <p className="crm_text text-center">
          CRM in marketing frequently changes the game since it provides strong insights, options for personalization, and opportunities for testing that eventually enhance sales.
          </p>
                <div className="col-12">
                    <div className="book_crm bg-dark text-center p-5 text-white">
                        <h2 className="fw-bold">Book a Consultation to know more about CRM</h2>
                        <p>The best way to fully understand how to use CRM software to organize and grow your business is to use one.</p>
                            <button className="btn text-white">Contact us</button>
                    </div>
                </div>
            </div>
        </div>

      </section>
      {/* market finish */}
      <Contactus/>
      <Footer/>
    </>
  );
};

export default CRM;
