import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from '../assest/image/New-Project-49-1.webp';             
import client2 from '../assest/image/New-Project-50-1.webp';             
import client3 from '../assest/image/New-Project-51-1.webp';             
import client4 from '../assest/image/New-Project-52.webp';             
import client5 from '../assest/image/New-Project-53-1.webp';             

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container">
      <div className="row">
        <Slider {...settings}>
          <div className="col">
            <img src={client1} alt="Client 1" className="img-fluid" />
          </div>
          <div className="col">
            <img src={client2} alt="Client 2" className="img-fluid" />
          </div>
          <div className="col">
            <img src={client3} alt="Client 3" className="img-fluid" />
          </div>
          <div className="col">
            <img src={client4} alt="Client 4" className="img-fluid" />
          </div>
          <div className="col">
            <img src={client5} alt="Client 5" className="img-fluid" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
