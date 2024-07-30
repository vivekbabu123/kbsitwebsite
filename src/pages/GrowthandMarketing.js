import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contactus from "../components/Contactus";
import growhero from '../assest/image/digital_hero.png'
import './growmarket.css';

let GrowthandMarketing = () =>{
    return(
        <React.Fragment>
            <Header/>
            {/* Digital marketing Services start*/}
                <section className='digit_market'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="digit_text">
                                <h2>Digital Marketing Services</h2>
                                <p><span> Increasing the Digital Footprint of Companies</span>
                                We provide complete internet marketing solutions to help your business become digital</p>
                                <button className="btn">Click here</button>
                                </div>
                                

                            </div>
                            <div className="col-md-6">
                                <div className="grow_img">
                                    <img src={growhero} alt="img" className="img-fluid"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            {/* Digital marketing Services finish */}
            <Contactus/>
            <Footer/>
        </React.Fragment>
    );
};
export default GrowthandMarketing;