import React from "react";
import Header from "../components/Header";
import "./blockchain.css";
import heroitem from "../assest/image/blockchain/blockchain.gif";
import multichain from "../assest/image/blockchain/a1.png";
import openchain from "../assest/image/blockchain/a2.png";
import eos from "../assest/image/blockchain/a3.png";
import stellar from "../assest/image/blockchain/a4.png";
import startis from "../assest/image/blockchain/a5.png";
import hyperledger from "../assest/image/blockchain/a6.png";
import coin1 from "../assest/image/blockchain/b1.jpg";
import coin2 from "../assest/image/blockchain/b2.jpg";
import coin3 from "../assest/image/blockchain/b3.jpg";
import coin4 from "../assest/image/blockchain/b4.png";
import coin5 from "../assest/image/blockchain/b5.jpg";
import coin6 from "../assest/image/blockchain/b6.jpg";
import coin7 from "../assest/image/blockchain/b7.jpg";
import coin8 from "../assest/image/blockchain/b8.jpg";
import coin9 from "../assest/image/blockchain/b9.png";
import SimpleSlider from "../components/SimpleSlider";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import heroitem2 from "../assest/image/blockchain/blockchain1.gif";

let blockchainData = [
  { imgSrc: multichain, title: "MultiChain" },
  { imgSrc: openchain, title: "OpenChain" },
  { imgSrc: eos, title: "EOS" },
  { imgSrc: stellar, title: "Stellar" },
  { imgSrc: startis, title: "Startis" },
  { imgSrc: hyperledger, title: "Hyperledger" },
];
const tokenData = [
  { imgSrc: coin1, title: "Stablecoin Development" },
  { imgSrc: coin2, title: "Security Token Offering" },
  { imgSrc: coin3, title: "Blockchain Based MLM Software Development" },
  { imgSrc: coin4, title: "Binance-like Exchange Development" },
  { imgSrc: coin5, title: "White Label Wallet Development" },
  { imgSrc: coin6, title: "White Label Exchange Development" },
  { imgSrc: coin7, title: "Coin Development" },
  { imgSrc: coin8, title: "Smart Contract Development" },
  { imgSrc: coin9, title: "Blockchain Consulting" },
];

let BlockChain = () => {
  return (
    <React.Fragment>
      <Header />
      {/* Hero blockchain start */}
      <section className="blockchain_hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="blockchainhero_txt">
                <h1>Envisioning Blockchain-Powered World</h1>
                <p>
                  Safe, Sustainable Blockchain Solutions Let You Connect Into
                  The Decentralized Ecosystem
                </p>
                <button className="btn">Get Started</button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={heroitem}
                alt="Blockchain illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero blockchain finish */}
      {/* stack we deploy start */}
      <section className="stack_deploy">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading_stack pb-5">
                <h2>
                  Blockchain Tech Stack We Deploy To Decentralize Your Business
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blockchainData.map((blockchain, index) => (
              <div className="col-md-4 mb-5" key={index}>
                <div className="multicard d-flex justify-content-evenly align-items-center">
                  <img
                    src={blockchain.imgSrc}
                    alt={blockchain.title}
                    className="img-fluid"
                  />
                  <h4>{blockchain.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* stack we deploy finish */}
      {/* quality drivn bussiness start */}
      <section className="quality_driven">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="quality_driventxt d-flex align-items-center justify-content-between">
                <h2>
                  For Quality-Driven & Business-Specific Web <br /> Development
                  Services, Reach Us Out
                </h2>
                <button className="btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {tokenData.map((token, index) => (
              <div className="col-md-4 mb-4" key={index}>
                {" "}
                {/* Added mb-4 for margin-bottom */}
                <div className="tocken_offering">
                  <img
                    src={token.imgSrc}
                    alt={token.title}
                    className="img-fluid"
                  />
                  <h4>{token.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* qulaity driven businesss finish */}
      {/* Notch web application start */}
      <section className="notch_web">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="notch_web-heading">
                <h1 className="text-center pt-5">
                  Technologies To Build Top-Notch Web Solutions
                </h1>
              </div>
            </div>
          </div>
          <div className="row g-3">
            {" "}
           
            <div className="col step">
              {" "}
             
              <div className="step-icon">
                <box-icon name="check" color="white"></box-icon>
              </div>
              <div className="step-item2">
                <div className="step-number">01</div>
                <div className="step-description">Designing</div>
              </div>
            </div>
            <div className="col step">
              <div className="step-icon">
                <box-icon name="pencil" color="white"></box-icon>
              </div>
              <div className="step-item2">
                <div className="step-number">02</div>
                <div className="step-description">Web Framework</div>
              </div>
            </div>
            <div className="col step">
              <div className="step-icon">
                <box-icon name="data" color="white"></box-icon>
              </div>
              <div className="step-item2">
                <div className="step-number">03</div>
                <div className="step-description">Databases</div>
              </div>
            </div>
            <div className="col step">
              <div className="step-icon">
                <box-icon name="link" color="white"></box-icon>
              </div>
              <div className="step-item2">
                <div className="step-number">04</div>
                <div className="step-description">Platforms</div>
              </div>
            </div>
            <div className="col step">
              <div className="step-icon">
                <box-icon name="link" color="white"></box-icon>
              </div>
              <div className="step-item2">
                <div className="step-number">05</div>
                <div className="step-description">Additional Services</div>{" "}
                {/* Changed title to ensure unique numbering */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Noteh web application finish */}
      {/* Enterprise Blockchain Development Services Can start */}
      <section className="enterprises_blockchain bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="enterprises_heading">
                        <h1>Enterprise Blockchain Development Services Can Help You Explore The World Of Decentralised Applications.</h1>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="trust_1">
                        <h1>Trust #1 Blockchain Development Company</h1>
                        <p>We’re a team of highly qualified & skilled blockchain developers, having the expertise & experience to deliver blockchain solutions at enterprise scale.</p>
                            <button className="btn">Get Started</button>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="trust_2">
                        <img src={heroitem2} alt="image" className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {/* Enterprise Blockchain Development Services Can fnish */}
      <SimpleSlider />

      <Contactus />
      <Footer />
    </React.Fragment>
  );
};

export default BlockChain;
