import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import service1 from '../assest/image/2.webp';
import service2 from '../assest/image/Cream-Real3_service.webp'
import bear from '../assest/image/beer.webp';
import wine from '../assest/image/wine.webp';
import whisky from '../assest/image/whiskey.webp';
import vodka from '../assest/image/vodka.webp';
import Tquila from '../assest/image/tequila.webp';
import Rum from '../assest/image/rum.webp';
import Gin from '../assest/image/Gin.webp';
import cognac from '../assest/image/conac.webp';
import brandy from '../assest/image/brandy.webp';
import extra from '../assest/image/extras.webp';
import address from '../assest/image/service_home.png';
import wine_bottle from '../assest/image/pepsi.webp';
import delivered from '../assest/image/delivered.webp';

let images = [
    { src: bear, alt: 'Bear', name : 'Bear'},
    { src: wine, alt: 'Wine' , name : 'Wine' },
    { src: whisky, alt: 'Whisky' , name : 'Whisky' },
    { src: vodka, alt: 'Vodka' , name: 'Vodka'},
    { src: Tquila, alt: 'Tequila' , name: 'Tequila' },
    { src: Rum, alt: 'Rum', name: 'Rum' },
    { src: Gin, alt: 'Gin' , name: 'Gin' },
    { src: cognac, alt: 'Cognac', name: 'Cognac' },
    { src: brandy, alt: 'Brandy' , name: 'Brandy' },
    { src: extra, alt: 'Extra', name: 'Extra' },
  ];
 let Servicecard = [
    {
        id: 1,
        src: address,
        title: "Enter your address",
        alt: "image",
        
    },
    {
        id:2,
        src :wine_bottle,
        title: "Shop items you like",
    }
    ,{
        id:3,
        src :delivered,
        title: "Shop items you likeGet your items delivered",
    }
 ] ;

let ServicesGrid = () =>{
    return(
        <React.Fragment>
            <Header/>
            {/* hero image start */}
                <section className="hero_servicegrid">
                    <div className="container-fluid px-0">
                        <div className="row">
                            <div className="col-12">
                            <img src={service1} alt="image" className="img-fluid" />

                 </div>
                        </div>
                    </div>

                </section>
                <section className="hero_service2">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-12">
                                <img src={service2} alt="image" className="img-fluid" />
                 </div>
                        </div>
                    </div>

                </section>
            {/* hero image finish */}

            {/* start bottles */}
            <section className="wine_bottles bg-dark">
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {images.map((image, index) => (
            <div className="col" key={index}>
              <div className="p-3 border">
                <img src={image.src} alt={image.alt} className="img-fluid" />
                <h2 className="text-white text-center">{image.name}</h2>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
            {/* finish bottles */}
          {/* card service start */}
                <section className="card_service">
                    <div className="container">
                        <div className="row">
                        {Servicecard.map((card) => (
                            <div className="col-md-4" key={card.id}>
                                <div className="card border-0">
                                    <img src={card.src} alt={card.alt} className="card-img-top" />
                                    <div className="card-body">
                                        <h2 className="card-title text-center">{card.title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}

                        </div>
                    </div>

                </section>
          {/* card service finish */}
          <Footer/>



        </React.Fragment>
    );
};
export default ServicesGrid;