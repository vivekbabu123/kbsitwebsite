import React from "react";
import Header from "../components/Header";
import "../App.css";
import glasscard from '../assest/image/glass/1.webp';
import glasscard1 from '../assest/image/glass/2.webp';
import glasscard2 from '../assest/image/glass/3.jpg';
import glasscard8 from '../assest/image/glass/4.png';

import glasscard3 from '../assest/image/glass/5.png';
import glasscard4 from '../assest/image/glass//6.png';
import glasscard5 from '../assest/image/glass/7.png';
import glasscard6 from '../assest/image/glass/8.png';
import glasscard7 from '../assest/image/glass/9.png';
import glasscard9 from '../assest/image/glass/10.png';
import Footer from "../components/Footer";

const glassCards = [
    { src: glasscard, alt: "img1" },
    { src: glasscard1, alt: "img2" },
    { src: glasscard2, alt: "img3" },
];

const glassCardDetails = [
    { src: glasscard3, alt: "Spectacles", label: "Spectacles" },
    { src: glasscard4, alt: "Sunglasses", label: "Sunglasses" },
    { src: glasscard5, alt: "Kids", label: "Kids" },
    { src: glasscard6, alt: "Powered Sunglasses", label: "Powered Sunglasses" },
    { src: glasscard7, alt: "New Arrival", label: "New Arrival" },
    { src: glasscard8, alt: "Digisafe", label: "Digisafe" },
];

let Spactacles = () =>{
    return (
        <React.Fragment>
            <Header/>
            {/* hero spactless start */}
                <section className="spactless_hero">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center">Your store, Your Glasses</h2>

                        </div>
                    </div>

                </section>
                <section className="glass_card">
                <div className="container">
                    <div className="row">
                        {glassCards.map((card, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="glass_card1">
                                    <img src={card.src} alt={card.alt} className="img-fluid" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="glass_card bg-dark">
                <div className="container">
                    <div className="row">
                        {glassCardDetails.map((card, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="glass_card1">
                                    <img src={card.src} alt={card.alt} className="img-fluid" />
                                    <h1>{card.label}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* hero spactless finish */}
            {/* eye shadow start */}
                <section className="ey_shadow bg-primary">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1 className="text-white">Sunglasses are Eye Shadow</h1>
                                <button className="btn btn-dark px-5">Get Started</button>
                            </div>
                            <div className="col-md-6">
                                <img src={glasscard9} alt="img" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                </section>
            {/* eye shadow finish */}
            <Footer/>
        </React.Fragment>
    )
}
export default Spactacles;