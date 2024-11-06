import React from "react";
import Style from "./mobility.module.css";
import Image from "next/image";
import MobileImage1 from "../assets/mobileimage1.png";
import MobileImage2 from "../assets/mobileimage2.png";
import MobileImage3 from "../assets/mobileimage3.png";

const Mobility = () => {
  return (
    <div className={`${Style.mobilityContainer} container-fluid`}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 mb-3">
          <div
            className={`${Style.mobilityHeading} fw-bold text-center mt-md-5`}
          >
            {" "}
            Seamless Access to the Mobility Aftermarket
          </div>
        </div>
        <div>
          <div className={`${Style.mobilitySubHeading} m-auto text-md-center`}>
            Our super app connects customers with service providers, including
            repair shops, car dealers,
            <p>
              {" "}
              and car washes, offering transparent pricing and cross-selling
              opportunities.
            </p>
          </div>
          <div
            className={`${Style.mobilityBtnHeading} d-flex justify-content-center`}
          >
            <button
              className={`${Style.mobilityBtn} border-0 text-white rounded-3 mb-3`}
            >
              Join Our Marketplace
            </button>
          </div>
        </div>
      </div>

      {/* mobility image */}
      <div className="row">
        <div className="d-none d-md-flex justify-content-center mt-5">
          {/* MobileImage1 */}
          <div className="d-flex flex-column px-3">
            <Image src={MobileImage1} alt="vehicleRepair" />
            <div className={`${Style.vehicleBtn} rounded-3 mx-md-4`}>
              <p className="text-center">Vehicle Repair</p>
            </div>
          </div>

          {/* MobileImage2 */}
          <div className="d-flex flex-column px-3 mt-5">
            <Image src={MobileImage2} alt="vehicleFinance" />
            <div className={`${Style.vehicleBtn} rounded-3  mx-md-4 mb-md-5`}>
              <p className="text-center">Vehicle Finance</p>
            </div>
          </div>

          {/* MobileImage3 */}
          <div className="d-flex flex-column px-3">
            <Image src={MobileImage3} alt="vehicleManagment" />
            <div className={`${Style.vehicleBtn} rounded  mx-md-4`}>
              <p className="text-center">Vehicle Managment</p>
            </div>
          </div>
        </div>
      </div>

      {/* small screen slider */}
      <div className="row d-none">
        <div className="col-12">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src={MobileImage1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <Image src={MobileImage2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <Image src={MobileImage3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobility;
