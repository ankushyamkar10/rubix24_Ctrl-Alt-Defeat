import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      // className="mt-16"
    >
      <div class="footer-newsletter hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
            </div>
            <div class="col-lg-6">
              <form action="" method="post" className="">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-top">
        <div class="container">
          <div class="row flex items-center justify-between">
            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our services</h4>
              <ul>
                <li>
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    class="active "
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    to="/resources_requests"
                  >
                    Network
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    to="/predict"
                  >
                    Predict
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    to="/social_media"
                  >
                    Threats
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    to="/disaster"
                  >
                    Disaster
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    to="/plan"
                  >
                    #GetReady
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <address>
                DIRECTORATE GENERAL, NATIONAL DISASTER RESPONSE FORCE
                <div className="mt-2">
                  6th FLOOR, NDCC.II BUILDING, JAI SINGH ROAD{" "}
                </div>
                <div className="mt-2">NEW DELHI-IIOOOI</div>
                <br />
                <strong>TELEFAX No :</strong> 011-23438091, 011-23438136
                <br />
                <strong>EMAIL ID :</strong> hq.ndrf@nic.in
                <br />
              </address>
            </div>

            <div class="col-lg-3 col-md-6 footer-info">
              <h3>About CTRL+ALT+DEFEAT</h3>
              <p>
                Welcome to our Disaster Management System—a cutting-edge
                platform designed to enhance preparedness and
                response to emergencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
