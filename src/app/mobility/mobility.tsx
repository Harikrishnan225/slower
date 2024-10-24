import React from "react";
import Style from "./mobility.module.css";
import Image from "next/image";
import MobileImage1 from "../assets/mobileimage1.png";
import MobileImage2 from "../assets/mobileimage2.png";
import MobileImage3 from "../assets/mobileimage3.png";

const Mobility = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 mb-3">
        <div className={`${Style.mobilityHeading} fw-bold text-md-center`}> Seamless Access to the Mobility Aftermarket</div>
      </div>
      <div>
      <div className={`${Style.mobilitySubHeading} m-auto`}>
          Our super app connects customers with service providers, including
          repair shops, car dealers,
          <p> and car washes, offering transparent
          pricing and cross-selling opportunities.</p>
        </div>
        <div className={`${Style.mobilityBtnHeading} d-flex justify-content-center`}> 
            <button className={`${Style.mobilityBtn} border-0 text-white rounded w-25`}>Join Our Marketplace</button>
        </div>
      </div>
      </div>
      <div className="d-flex justify-content-around mt-5">
        <div>
        <Image 
        src={MobileImage1}
        alt="vehivleRepair"
        />
        </div>
        
        <div>
        <Image 
        src={MobileImage2}
        alt="vehivleFinance"
        />
        </div>
        <div>
        <Image 
        src={MobileImage3}
        alt="vehivleManagment"
        />
        </div>
      </div>
    </div>
  );
};

export default Mobility;
