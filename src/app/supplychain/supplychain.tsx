import React from "react";
import Image from "next/image";
import banner from "../assets/supplychain.png";
import oval from "../assets/Oval.png";
import palyfill from "../assets/play-fill.png";
import Style from "./supplychain.module.css";

const Supplychain = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
      <div className="position-relative rounded-3 overflow-hidden">
        <Image
          src={banner}
          alt="Transform"
          className="img-fluid"
          width={1048}
          height={586}
        />
        <div
          className={`${Style.supplychainBox} position-absolute text-center`}
        >
          <p className={`${Style.supplychainText} fw-bold`}>
            Transforms supply chains and value chains
          </p>
        </div>
        <div>
          <div className={`${Style.supplychainOval} position-absolute`}>
            <Image
              src={oval}
              alt="logo"
              className="img-fluid"
              width={114}
              height={114}
            />
          </div>
          <div className={`${Style.supplychainPlayfill} position-absolute`}>
            <Image
              src={palyfill}
              alt="logo"
              className="img-fluid"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplychain;
