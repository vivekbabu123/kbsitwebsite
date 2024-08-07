import React, { useState } from "react"; 
import Header from "../components/Header";
import "./educationcrm.css";
import education1 from "../assest/image/educationcrm/hero.png"; 
import education2 from "../assest/image/educationcrm/1.png";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";



const cardData = [
    {
      icon: "badge-check",
      title: "Managing classes and colleges is difficult.",
      
    },
    {
      icon: "badge-check",
      title: "Handling questions from students is difficult.",
      
    },
    {
      icon: "badge-check",
      title: "Time lost equals money lost",
      
    },
    {
      icon: "badge-check",
      title: "It is difficult to remember upcoming school fees.",
    },
    {
      icon: "badge-check",
      title: "Missing query tracking is challenging",
    }
    
  ];
const EducationCRM = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    const accordionData = [
        { id: 1, title: "Tuition App" },
        { id: 2, title: "Online Training App" },
        { id: 3, title: "Language Learning App" },
        { id: 4, title: "Exam Preparation App" },
        { id: 5, title: "Education Gaming App" },
        { id: 6, title: "Learning App School & College" },
        { id: 7, title: "Assignment Tracking System" },
    ];
    const learningFeatures = [
        { id: 1, text: "Provides a 1:1 individualized learning environment." },
        { id: 2, text: "Maintain pupil safety during the COVID-19 emergency." },
        { id: 3, text: "Enables access to internet study materials for students." },
        { id: 4, text: "Improves communication between teachers and students." },
    ];
    const whyChooseUsData = [
        {
        
          title: "1. Make the application procedure as a whole better.",
       
          animation: "flip-left",
        },
        {
      
          title: "2. Prospect generation and management",
          
        },
        {
        
          title: "3. Developing a network and recommendation system",
        
          animation: "flip-left",
        },
        {
        
          title: "4. Increasing revenue",

          animation: "flip-left",
        },
      
      ];
      
const stepsTop = [
    {
      number: "01",
      description: "Inquiry From Student",
      item:
        "Student inquiries about the agency's working procedures, fee schedule, immigration process for students studying abroad, students' concerns addressed through counseling sessions, exam specifics, fees, and more.",
      icon: "check",
    },
    {
      number: "02",
      description: "Allocation to Counsellor",
      item:
        "Following the inquiry process, counselors were assigned to interested students, and only they were given access to all document management and doubt-solving information going forward.",
      icon: "pencil",
    },
    {
      number: "03",
      description: "Course Finder",
      item:
        "The course finder, which allows users to search for and register for courses at foreign colleges and universities, is the app's main feature.",
      icon: "data",
    },
  
  ];
  
  const stepsBottom = [
    {
        number: "04",
        description: "Student Application",
        item:
          "Students can use this app to update their information, such as papers, IELTS exam results, pictures, course preferences, university or college preferences, and more.",
        icon: "link",
      },

    {
      number: "05",
      description: "Fees Management",
      item:
        "Last but not least, this is where the most important information is recorded. How many students are enrolled in consulting, have their fees been paid, and is all other information managed and maintained in this location?",
      icon: "check",
    },
    {
      number: "06",
      description: "Tons of Reports",
      item:
        "The ability to obtain full monthly data on the number of students enrolled, revenue received, milestones attained, and the status of any outstanding work was one of the most important features of the software and app.",
      icon: "comment-detail",
    },
   
    
  ];
  const FlipBox = ({ type, name, title, frontContent, backContent }) => (
    <div className="col-md-6 col-lg-3 col-xl-3">
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

    return (
        <React.Fragment>
            <Header />
            {/* Education hero start */}
            <section className="hero_realstate bg-primary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="realstatehero_txt">
                                <h2>Launch Your Online Education Application In No Time!</h2>
                                <p>Live Classes | Online Assignments Video Lessons | In-App Chat</p>
                                <button className="btn">
                                    Get started
                                    <span className="ps-2">
                                        <box-icon type="solid" color="#fff" size="18px" name="rocket"></box-icon>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="realstateimg text-center">
                                <img src={education1} alt="Education Hero" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Education hero finish */}
            {/* card education start */}
            <section className="card_education">
                <div className="container">
                    <h2 className="realstate_heading text-center">
                        Create Education Apps that <br /> Transform The Learning <br /> Experience
                    </h2>
                    <div className="row learning_bg">
                        {learningFeatures.map((feature) => (
                            <div className="col-md-3" key={feature.id}>
                                <div className="learning_env text-center">
                                    <box-icon name="book-open" size="58px" color="#8BC541"></box-icon>
                                    <p>{feature.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* card education finish */}
            {/* Educational App Development For Everyone start */}
            <section className="education_app">
                <div className="container">
                <h2 className="realstate_heading text-center">
                Educational App Development For Everyone
                    </h2>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        
                            {accordionData.slice(0, 6).map((item) => (
                                <div key={item.id}>
                                    <button
                                        className={`accordion ${openIndex === item.id ? "active" : ""}`}
                                        onClick={() => toggleAccordion(item.id)}
                                    >
                                        {item.title}
                                    </button>
                                    <div className="panel" style={{ display: openIndex === item.id ? "block" : "none" }}>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-6">
                            <img src={education2} alt="Education App" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Educational App Development For Everyone finish */}
            {/* why education carm start */}
                        <section className="whyeducationcrm">
                        <h2 className="realstate_heading text-center">
                        Why Education CRM?
                    </h2>
                            <div className="container">
                            <div className="row g-3">
            {whyChooseUsData.map((item, index) => (
              <div className="col-md-3" key={index}>
                <div
                  className={`realstate_why text-white h-100`}
                  data-aos={item.animation}
                >
                  <box-icon
                    name={item.icon}
                    size="52px"
                    color="#fff"
                  ></box-icon>
                  <h2>{item.title}</h2>
              
                  <span>
                    <box-icon
                      name="chevron-right"
                      size="48px"
                      color="#fff"
                    ></box-icon>
                  </span>
                </div>
              </div>
            ))}
          </div>
                            </div>

                        </section>
            {/* why eduaction crm finish */}.
            <section className="notch_web2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="notch_web-heading">
                <h1 className="text-center pt-5">How does it work?</h1>
              </div>
            </div>
          </div>
          <div className="row g-3">
            {stepsTop.map((step, index) => (
              <div className="col step" key={index}>
                <div className="step-icon">
                  <box-icon name={step.icon} color="white"></box-icon>
                </div>
                <div className="step-item2">
                  <div className="step-number">{step.number}</div>
                  <div className="step-description">{step.description}</div>
                  <div className="step-item text-white">{step.item}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="row g-3">
            {stepsBottom.map((step, index) => (
              <div className="col step" key={index}>
                <div className="step-icon">
                  <box-icon name={step.icon} color="white"></box-icon>
                </div>
                <div className="step-item2">
                  <div className="step-number">{step.number}</div>
                  <h2>
                    <div className="step-description fw-bold">
                      {step.description}
                    </div>
                  </h2>
                  <p>
                    <div className="step-item text-white">{step.item}</div>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="small_bussinescrm">
        <div className="container">
          <h2 className="heading_crm text-center">
          Do you have problems running your education consulting business?
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

      {/* transform your concept start */}
            <section className="transfer_concept">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <h2 className="transer_heading text-white">We can transform your concept into an educational technology programme with all the bells and whistles, similar to BYJUs, Topper, and Khan Academy.</h2>

                        </div>
                    </div>
                </div>

            </section>
      {/* transform your concept finish */}
      {/* education crm flip start */}
      <section className="multiple_salescrm">
                <div className="container">
                    <h2 className="improve_heading text-center">Education CRM Is The Perfect Answer To All The Issues</h2>
                    <div className="row">
                        <FlipBox
                            type="solid"
                            name='cog'
                            title="Sales"
                            frontContent="It's difficult to find missing queries"
                            backContent="It's difficult to find missing queriesTeams from sales and marketing are given a shared understanding of customers and access to the complete sales process."
                        />
                        <FlipBox
                            type="solid"
                            name="cog"
                            title="Marketing"
                            frontContent="Fees can be easily tracked using software."
                            backContent="Fees can be easily tracked using software."
                        />
                        <FlipBox
                            type="solid"
                            name="support"
                            title="Support"
                            frontContent="Portal for simple document management"
                            backContent="Portal for simple document management"
                        />
                          <FlipBox
                            type="solid"
                            name="support"
                            title="Support"
                            frontContent="Staff is simple to manage (Branch Manager, Receptionist, Agent, Counsellor)"
                            backContent="Portal for simple document managementStaff is simple to manage (Branch Manager, Receptionist, Agent, Counsellor)"
                        />
                    </div>
                </div>
            </section>
            <section className="crm_sloution">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="crm_solutionexpensive d-flex justify-content-around align-items-center p-4 bg-primary rounded-pill">
                <h2 className="text-center text-white fw-bold">
                Our education app development services can help you launch your <br></br>branded and feature-rich tutoring marketplace.
                </h2>
                <button className="btn text-white"> Conatct us! </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* education crm flip finish */}
      <Contactus/>
      <Footer/>
        </React.Fragment>
    );
};

export default EducationCRM;
