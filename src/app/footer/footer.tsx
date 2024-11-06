import React from "react";
import Image from "next/image";
import Style from "./footer.module.css";
import FooterImage from "../assets/footerimage1.png";
import FooterLogo from "../assets/footerlogo.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";
import Youtube from "../assets/YouTube.png";
import Twitter from "../assets/Twitter.png";
import UpQuote from "../assets/leftquote.png";
import DownQuote from "../assets/rightquote.png";

const Footer = () => {
  return (
    <>
      <div className={`${Style.footerContainer} container-fluid my-md-1`}>
        <div className="row">
          <div className="col-12">
            <div
              className={`${Style.footerHeader} fw-bold text-center text-white mt-5 mb-1`}
            >
              Our Commitment to a Sustainable Future
            </div>
            <div
              className={`${Style.footerSubHeading} mb-md-5 mb-4 m-auto text-center text-white`}
            >
              <Image src={UpQuote} alt="upquote" className="me-2 d-none d-md-inline"/>
              At Solwer, our mission is to create a better world through lean
              and clean innovation, providing digital solutions to optimize
              operations and reduce environmental impact.
              <Image src={DownQuote} alt="downquote" className="ms-2 d-none d-md-inline"/>
            </div>
          </div>
          <div className="col-12 col-md-12 mb-5 d-md-flex justify-content-md-center">
            <Image
              src={FooterImage}
              alt="FooterImage"
              className={Style.footerCenterImage}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-12 d-flex mb-3 mt-4">
          <div className="col-6 col-md-6">
            <Image src={FooterLogo} alt="footerlogo" />
          </div>
          <div className="col-md-4 d-none d-md-inline-flex justify-content-md-end">
          <div className="col-4">
            <p>Privacy Policy</p>
          </div>
          <div className="col-5">
            <p>Terms & Conditions</p>
          </div>
          <div className="col-3">
            <p>Contact</p>
          </div>
        </div>
          <div className="col-6 col-md-2 d-flex justify-content-md-start">
            <div className="col-3 col-md-2">
              <Image src={Youtube} alt="youtube" />
            </div>
            <div className="col-3 col-md-2">
              <Image src={Twitter} alt="twitter" />
            </div>
            <div className="col-3 col-md-2">
              <Image src={Instagram} alt="instagram" />
            </div>
            <div className="col-3 col-md-2">
              <Image src={LinkedIn} alt="linkedin" />
            </div>
          </div>
        </div>
        <hr className="d-md-none" />
        <div className="col-12 d-flex d-md-none">
          <div className="col-4">
            <p>Privacy Policy</p>
          </div>
          <div className="col-5">
            <p>Terms & Conditions</p>
          </div>
          <div className="col-3">
            <p>Contact</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
