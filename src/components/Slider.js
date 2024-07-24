import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from '../assest/image/New-Project-49-1.webp';             
import client2 from '../assest/image/New-Project-50-1.webp';             
import client3 from '../assest/image/New-Project-51-1.webp';             
import client4 from '../assest/image/New-Project-52.webp';             
import client5 from '../assest/image/New-Project-53-1.webp';             

let Slider = () => {


  return (
    <React.Fragment>
        <section className="slider">
            <div className="container">
            <div class="container">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
    <img src={client1} alt="image" className="img-fluid"></img>
    </div>
    <div class="col">
    <img src={client2} alt="image" className="img-fluid"></img>
    </div>
    <div class="col">
    <img src={client3} alt="image" className="img-fluid"></img>
    </div>
    <div class="col">
    <img src={client4} alt="image" className="img-fluid"></img>
    </div>
    <div class="col">
    <img src={client5} alt="image" className="img-fluid"></img>
    </div>
     </div>
</div>
            </div>
            </section>      
    
     
    </React.Fragment>
  );
};

export default Slider;
