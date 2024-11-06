import React from "react";
import Style from "./growth.module.css";
import Image from "next/image";
import FeatureImage from "../assets/featureimage.png";

const Growth = () => {
  return (
    <div className={`${Style.growthContainer} container-fluid`}>
      <div className="row">
        <div className="col-12 col-md-8 m-auto">
          <div
            className={`${Style.growthHeader} col-12 text-center fw-bold mt-4`}
          >
            Digital Solutions for Sustainable Growth
          </div>
          <p className={`${Style.growthSubHeading} text-center mt-2`}>
            Delivering digital solutions to optimize operations and reduce
            environmental impact
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 mb-4 d-md-flex justify-content-md-end">
          <Image
            src={FeatureImage}
            className={`${Style.featureImage} mb-md-5`}
            alt="Feature Image"
          />
        </div>
        {/* first heading */}
        <div className="col-12 col-md-6">
          <ol>
            <li className={`${Style.growthPoint} fw-bold`}>
              Integrated Manufacturing
            </li>
          </ol>
          <ul className="list-unstyled ps-4 w-100">
            <li className="mb-2">
              <p className="fw-bold d-inline">Manufacturing Management:</p>{" "}
              <span>
                Smart factories with real-time optimization and carbon tracking
              </span>
            </li>
            <li>
              <p className="fw-bold d-inline">
                Transport and Warehouse Management:
              </p>{" "}
              <span>
                Improve visibility, freshness, and feedback integration
              </span>
            </li>
          </ul>
          {/* second heading */}
          <ol start={2}>
            <li className={`${Style.growthPoint} fw-bold`}>
              Mobility Circular Economy
            </li>
          </ol>
          <ul className="list-unstyled ps-4 w-100 mb-5">
            <li className="mb-2">
              <p className="fw-bold d-inline">
                Mobility Aftermarket Super App:
              </p>{" "}
              <span>
                Connect customers to services with transparent pricing
              </span>
            </li>
            <li>
              <p className="fw-bold d-inline"> Vehicle Digital Inspection:</p>{" "}
              <span>
                Automated AI-powered vehicle inspections and valuations
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Growth;
