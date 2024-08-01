import React from "react";
import Header from "../components/Header";
import './VideoItems.css';
import video1 from '../assest/image/video/1.png';
import video2 from '../assest/image/video/2.png';
import video3 from '../assest/image/video/3.png';
import video4 from '../assest/image/video/4.png';
import video5 from '../assest/image/video/5.png';
import video6 from '../assest/image/video/6.png';
import video7 from '../assest/image/video/7.png';
import Footer from "../components/Footer";


let videoData = [
    {
        id: 1,
        src: video1,
        title: "Create Your Own Super App",
        alt: "image",
        buttonText: "Watch Demo"
    },
    {
        id: 2,
        src: video2,
        title: "Education Agent CRM| All Panel Demo Video",
        alt: "another image",
        buttonText: "Watch Demo"
    },
    {
        id: 3,
        src: video3,
        title: "Real Estate CRM| All Panel Demo Video",
        alt: "yet another image",
        buttonText: "Watch Demo"
    },
    {
        id: 4,
        src: video4,
        title: "Delivery App| All Panel Demo Video",
        alt: "yet another image",
        buttonText: "Watch Demo"
    },
    {
        id: 5,
        src: video5,
        title: "Sale CRM| All Panel Demo Video",
        alt: "yet another image",
        buttonText: "Watch Demo"
    },
    {
        id: 6,
        src: video6,
        title: "Sale CRM| All Panel Demo Video",
        alt: "yet another image",
        buttonText: "Watch Demo"
    }
    ,
    {
        id: 7,
        src: video7,
        title: "Delivery App| All Panel Demo Video",
        alt: "yet another image",
        buttonText: "Watch Demo"
    },
    {
        id: 8,
        src: video6,
        title: "Sale CRM| All Panel Demo Video",
        alt: "yet another image",
        buttonText: "Watch Demo"
    }
    ,
    {
        id: 9,
        src: video6,
        title: "Sale CRM| All Panel Demo Video",
        alt: "yet another image",
        buttonText: "Watch Demo"
    }
    
    
  
    
   
];

const Video = () => {
    return (
        <React.Fragment>
           <Header/>

           {/* start Video Items  */}
           <section className="Video_content">
            <div className="container">
                <div className="row">
                    {videoData.map((video) => (
                        <div key={video.id} className="col-lg-4 col-md-4">
                            <div className="video_card">
                                <img src={video.src} alt={video.alt} className="img-fluid" />
                            </div>
                            <div className="video_txt mb-3">
                                <h4>{video.title}</h4>
                                <button>{video.buttonText}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
           {/* Finish Video Itmems */}
           <Footer/>
        </React.Fragment>
    );
};

export default Video
;

