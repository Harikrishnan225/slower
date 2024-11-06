import React from "react";
import Style from "./ai_powered.module.css";
import Image from "next/image";
import Download from "../assets/download-icon.png";
import CheckFill from "../assets/check-fill.png";
import DigitalImage from "../assets/digitalimage.png";

const Ai_Powered = () => {
  return (
    <div className="container my-5">
      <div className="row mt-3 mb-3">
        <div className="col-12 col-md-8 m-auto">
          <div className={`${Style.ai_header} text-center fw-bold my-md-4`}>
            AI-Powered Vehicle Digital Inspection
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12 d-flex">
          <div className="col-12 col-md-6 d-none d-md-flex justify-content-center align-items-center">
            <Image
              src={DigitalImage}
              alt="Digital Image"
              className="img-fluid d-none d-md-block mb-md-5"
            />
          </div>
          <div className="col-12 col-md-6 lh-lg mx-lg-5">
            <div
              className={`${Style.ai_subheading} w-100 text-center text-md-start`}
            >
              Our platform revolutionizes vehicle inspection by automating
              valuation processes with advanced image recognition and machine
              learning.
            </div>
            <div className="row">
              <div className="col-12 col-md-6 d-block d-md-flex justify-content-center align-items-center">
                <Image
                  src={DigitalImage}
                  alt="Digital Image"
                  className="img-fluid d-block d-md-none"
                />
              </div>
            </div>

            {/* for medium screen */}
            <div className="col-md-6 d-none d-md-block">
              <div className="d-flex justify-content-md-start flex-wrap">
                <div className="fw-bold mx-md-3">
                  <Image src={CheckFill} alt="Improved Data Management" />
                  Improved data management
                </div>
                <div className="fw-bold mx-md-3">
                  <Image src={CheckFill} alt="Transparency" />
                  Transparency
                </div>
                <div className="fw-bold mx-3">
                  <Image src={CheckFill} alt="Refined Reports" />
                  Refined Reports
                </div>
                <div className="fw-bold mx-md-3">
                  <Image src={CheckFill} alt="Speedand Efficiency" />
                  Speed and Efficiency
                </div>
              </div>
            </div>

            {/* for mobile screen */}
            <div className="col-12 d-md-none">
              <div className="row">
                <div className="d-flex">
                  <div className="fw-bolded me-1">
                    <Image src={CheckFill} alt="Improved Data Management" />
                    Improved data management
                  </div>
                  <div className="fw-bolded">
                    <Image src={CheckFill} alt="Transparency" />
                    Transparency
                  </div>
                </div>
                  <div className="d-flex">
                    <div className="fw-bolded me-3">
                      <Image src={CheckFill} alt="Refined Reports" />
                      Refined Reports
                    </div>
                    <div className="fw-bolded">
                      <Image src={CheckFill} alt="Speedand Efficiency" />
                      Speed and Efficiency
                    </div>
                  </div>
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-center justify-content-md-start">
              <button
                className={`${Style.ai_downloadBtn} border-0 text-white rounded w-50  p-2`}
              >
                <Image src={Download} alt="Download Brochure" />
                Download Product Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ai_Powered;
