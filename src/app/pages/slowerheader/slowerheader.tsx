import React from "react";
import SupplyLocation from "../../assets/banner1.png";
import Image from "next/image";
import Style from "./slowerheader.module.css";

const Slowerheader = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-md-5">
        <div className="col-md-6 col-12 mt-md-5 d-lg-flex justify-content-center">
          <div className="col-md-9 col-12">
            <p className={`${Style.headingName} fw-bold text-light`}>
              Empowering Supply Chain and Value Chain Excellence
            </p>
            <p className={`${Style.subHeadingName} fs-6 text-light`}>
              As a digital platform, Solwer delivers comprehensive solutions to
              strengthen supply chains and value chains. Our innovation fosters
              smarter manufacturing, sustainable mobility, and transparency for
              enhanced customer trust.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-12 mt-3 d-flex justify-content-center">
          <Image src={SupplyLocation} alt="Supplylocation" className={Style.supplyLocationImage} />
        </div>
      </div>
    </div>
  );
};

export default Slowerheader;
