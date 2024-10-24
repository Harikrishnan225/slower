import React from "react";
import BackgroundImage from "../../assets/BG.png";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import Style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <Image
        src={BackgroundImage}
        alt={"backgroundimage"}
        className={`${Style.slowerBackground} z-n1 position-absolute img-responsive`}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex mt-5">
            <div className="col-md-6">
              <div className="col-md-2 mx-4">
                <Image src={Logo} alt={"Solwer"} />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="col-md-9">
                <div className={Style.navbarElements}>
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <a
                        className="nav-link text-dark fw-normal m-1"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark fw-normal m-1" href="#">
                        Video
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark fw-normal m-1" href="#">
                        Product Brochure
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark fw-normal m-1" href="#">
                        Solution
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark fw-normal m-1" href="#">
                        Our Mission
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
