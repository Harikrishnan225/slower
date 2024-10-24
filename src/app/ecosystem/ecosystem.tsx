import Image from "next/image";
import React from "react";
import ecosystem from "../assets/ecosystemimage.png";
import Style from "./ecosystem.module.css";

const Ecosystem = () => {
  return (
    <div className="container m-auto">
      <div className="row mt-5">
        <div className="col-md-6 col-12">
          <Image src={ecosystem} alt="ecosystem" className={Style.ecosystemImage} />
        </div>
        <div className="col-md-6 col-12 m-auto">
          <p className={`${Style.ecosystemHeading} fw-bold`}>
            Building Interconnected Ecosystems for the Future
          </p>
          <p className={`${Style.ecosystemHeading1}`}>
            <span className="fw-bold">At Solwer,</span>
            we facilitate cross-border and cross-industry data exchange to
            establish two robust ecosystems: Integrated Manufacturing and
            Mobility Circular Economy.
          </p>
          <p className={`${Style.ecosystemHeading2} mt-4`}>
            <span className="fw-bold">Our value proposition</span>&nbsp;
            provides peace of mind through a robust, risk-resistant supply
            chain, ensuring seamless operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
