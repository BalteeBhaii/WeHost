import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
// import "./style.css";
//import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import logo from "../../Assets/logo.png";

const Footer = () => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.screen.width <= 575) {
        let elements = document.querySelectorAll(".footer-bottom-items-container");
        for (let i = 0; i < elements.length; i++) {
          if (elements[i].classList.contains("p-0")) {
            elements[i].classList.remove("p-0");
          }
        }
      }
    });
  }, []);

  const mblDropdownHandler = (event) => {
    let icon = event.target.getElementsByClassName("footer-item-header-mbl-icon")[0];
    console.log(icon.style.transform);
    if (icon.style.transform === "" || icon.style.transform === "rotate(0deg)") {
      icon.style.transform = "rotate(-180deg)";
    } else {
      icon.style.transform = "rotate(0deg)";
    }
  }

  return (
    <>
      <footer>
        <div
          className="container section prefooter mt-4 pb-0 px-0"
          style={{ backgroundColor: "#D1EFF6" }}
        >
          <div className="p-2">
            <h3 className="inquirysection text-center p-2 pt-3">
              For inquires and queries do send us mail or any other issue. Feel
              Free to contact us
            </h3>


            <form className="d-flex mb-4 w-75 mx-auto justify-content-between mailsm">
              <div className="input-group px-3 py-2 rounded-1 bg-white">
                <i className="bi bi-envelope input-group-text bg-transparent border-0 text-mute footer-mail-icon"></i>
                <input
                  type="email"
                  id="form5Exam"
                  className="form-control border-0 shadow-none"
                  placeholder="Your Mail"
                />
              </div>

              <button type="submit" className="prefooter-submit-button btn text-white ms-2 px-4">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer */}
        <div className="footer-bottom-main py-4 mt-2">
          <div className="container">
            {/* Logo Section */}
            <div className="footer-logo-section">
              <img className="footer-bottom-logo" src="/images/logo.png" alt="logo" />
            </div>
            {/* Items Section */}
            <div className="footer-items-section mt-5">
              <div className="row">
                <div className="footer-bottom-items-container col-lg-3 p-0">
                  {/* For Pc */}
                  <h3 className="footer-item-header mb-0">FOR OWNERS<i className="bi bi-chevron-down footer-item-header-mbl-icon"></i></h3>
                  <div className="footer-bottom-items d-flex flex-column mt-4">
                    <Link className="footer-bottom-item mb-3">Property Management</Link>
                    <Link className="footer-bottom-item mb-3">How We Work Together</Link>
                    <Link className="footer-bottom-item mb-3">Lower Fees</Link>
                    <Link to='/listing/white' className="footer-bottom-item mb-3">White Glove Concierge</Link>
                    <Link className="footer-bottom-item mb-3">New to Vacation Rental?</Link>
                    <Link className="footer-bottom-item mb-3">Real Estate Services</Link>
                    <Link className="footer-bottom-item mb-3">Owner Login</Link>
                  </div>
                  {/*  */}
                  {/* For Mobile */}
                  <div className="footer-bottom-mbl-dropdown py-2">
                    <h3 className="footer-item-header-mbl d-flex justify-content-between mb-0" onClick={mblDropdownHandler} data-bs-toggle="collapse" data-bs-target="#ownersCollpase">FOR OWNERS<i className="bi bi-chevron-down footer-item-header-mbl-icon"></i></h3>
                    <div className="collapse" id="ownersCollpase">
                      <div className="d-flex flex-column mt-3">
                        <Link className="footer-bottom-item mb-2">Property Management</Link>
                        <Link className="footer-bottom-item mb-2">Lower Fees</Link>
                        <Link className="footer-bottom-item mb-2">How We Work Together</Link>
                        <Link className="footer-bottom-item mb-2">Lower Fees</Link>
                        <Link to='/listing/white' className="footer-bottom-item mb-2">White Glove Concierge</Link>
                        <Link className="footer-bottom-item mb-2">New to Vacation Rental?</Link>
                        <Link className="footer-bottom-item mb-2">Real Estate Services</Link>
                        <Link className="footer-bottom-item mb-2">Owner Login</Link>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="footer-bottom-items-container col-lg-3 p-0">
                  {/* For Pc */}
                  <h3 className="footer-item-header mb-0">FOR GUESTS<i className="bi bi-chevron-down footer-item-header-mbl-icon"></i></h3>
                  <div className="footer-bottom-items d-flex flex-column mt-4">
                    <Link className="footer-bottom-item mb-3">Explore Vacation Rentals</Link>
                    <Link className="footer-bottom-item mb-3">Our Rest Easy Promise</Link>
                    <Link to='/listing/white' className="footer-bottom-item mb-3">White Glove Concierge</Link>
                    <Link className="footer-bottom-item mb-3">Guest Login</Link>
                  </div>
                  {/*  */}
                  {/* For Mobile */}
                  <div className="footer-bottom-mbl-dropdown py-2">
                    <h3 className="footer-item-header-mbl d-flex justify-content-between mb-0" onClick={mblDropdownHandler} data-bs-toggle="collapse" data-bs-target="#guestsCollapse">FOR GUESTS<i className="bi bi-chevron-down footer-item-header-mbl-icon"></i></h3>
                    <div className="collapse" id="guestsCollapse">
                      <div className="d-flex flex-column mt-3">
                        <Link className="footer-bottom-item mb-2">Explore Vacation Rentals</Link>
                        <Link className="footer-bottom-item mb-2">Our Rest Easy Promise</Link>
                        <Link to='/listing/white' className="footer-bottom-item mb-2">White Glove Concierge</Link>
                        <Link className="footer-bottom-item mb-2">Guest Login</Link>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="footer-bottom-items-container col-lg-3 p-0">
                  {/* For Pc */}
                  <h3 className="footer-item-header mb-0">HOSTINGS<i className="bi bi-chevron-down footer-item-header-mbl-icon"></i></h3>
                  <div className="footer-bottom-items d-flex flex-column mt-4">
                    <Link className="footer-bottom-item mb-3">Try Hosting</Link>
                    <Link className="footer-bottom-item mb-3">Lower Fees</Link>
                    <Link to='/listing/white' className="footer-bottom-item mb-3">White Glove Concierge</Link>
                    <Link className="footer-bottom-item mb-3">weCover fot Hosts</Link>
                    <Link className="footer-bottom-item mb-3">Explore Hosting Resources</Link>
                    <Link className="footer-bottom-item mb-3">Visit Our Community Forum</Link>
                    <Link className="footer-bottom-item mb-3">How to Host Responsibly</Link>
                    <Link className="footer-bottom-item mb-3">Host Login</Link>
                  </div>
                  {/*  */}
                  {/* For Mobile */}
                  <div className="footer-bottom-mbl-dropdown py-2">
                    <h3 className="footer-item-header-mbl d-flex justify-content-between mb-0" onClick={mblDropdownHandler} data-bs-toggle="collapse" data-bs-target="#hostingCollapse">HOSTINGS<i className="bi bi-chevron-down footer-item-header-mbl-icon"></i></h3>
                    <div className="collapse" id="hostingCollapse">
                      <div className="d-flex flex-column mt-3">
                        <Link className="footer-bottom-item mb-2">Try Hosting</Link>
                        <Link className="footer-bottom-item mb-2">Lower Fees</Link>
                        <Link to='/listing/white' className="footer-bottom-item mb-2">White Glove Concierge</Link>
                        <Link className="footer-bottom-item mb-2">weCover fot Hosts</Link>
                        <Link className="footer-bottom-item mb-2">Explore Hosting Resources</Link>
                        <Link className="footer-bottom-item mb-2">Visit Our Community Forum</Link>
                        <Link className="footer-bottom-item mb-2">How to Host Responsibly</Link>
                        <Link className="footer-bottom-item mb-2">Host Login</Link>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="footer-bottom-items-container col-lg-3 p-0">
                  {/* For Pc */}
                  <h3 className="footer-item-header mb-0">COMMUNITY<i className="bi bi-chevron-down footer-item-header-mbl-icon"></i></h3>
                  <div className="footer-bottom-items d-flex flex-column mt-4">
                    <Link className="footer-bottom-item mb-3">Support Ukraine Refugees</Link>
                    <Link className="footer-bottom-item mb-3">Combating Discrimination</Link>
                  </div>
                  {/*  */}
                  {/* For Mobile */}
                  <div className="footer-bottom-mbl-dropdown py-2">
                    <h3 className="footer-item-header-mbl d-flex justify-content-between mb-0" onClick={mblDropdownHandler} data-bs-toggle="collapse" data-bs-target="#communityCollapse">COMMUNITY<i className="bi bi-chevron-down footer-item-header-mbl-icon"></i></h3>
                    <div className="collapse" id="communityCollapse">
                      <div className="d-flex flex-column mt-3">
                        <Link className="footer-bottom-item mb-2">Support Ukraine Refugees</Link>
                        <Link className="footer-bottom-item mb-2">Combating Discrimination</Link>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="footer-bottom-items-container d-lg-none p-0">
                  {/* For Mobile */}
                  <div className="footer-bottom-mbl-dropdown py-2">
                    <h3 className="footer-item-header-mbl d-flex justify-content-between mb-0" onClick={mblDropdownHandler} data-bs-toggle="collapse" data-bs-target="#supportCollapse">SUPPORT<i className="bi bi-chevron-down footer-item-header-mbl-icon"></i></h3>
                    <div className="collapse" id="supportCollapse">
                      <div className="d-flex flex-column mt-3">
                        <Link className="footer-bottom-item mb-3">Whie Glove Concierge</Link>
                        <Link className="footer-bottom-item mb-3">Support and Contact</Link>
                        <Link className="footer-bottom-item mb-3">Help Center</Link>
                        <Link className="footer-bottom-item mb-3">weCover</Link>
                        <Link className="footer-bottom-item mb-3">Safety Information</Link>
                        <Link className="footer-bottom-item mb-3">Cancellation options</Link>
                        <Link className="footer-bottom-item mb-3">Our COVID-19 Response</Link>
                        <Link className="footer-bottom-item mb-3">Supporting people with disabilities</Link>
                        <Link className="footer-bottom-item mb-3">Tips & Articles</Link>
                        <Link className="footer-bottom-item mb-3">Report a neighborhood concern</Link>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="footer-bottom-items-container d-lg-none p-0">
                  {/* For Mobile */}
                  <div className="footer-bottom-mbl-dropdown py-2">
                    <h3 className="footer-item-header-mbl d-flex justify-content-between mb-0" onClick={mblDropdownHandler} data-bs-toggle="collapse" data-bs-target="#aboutCollapse">ABOUT<i className="bi bi-chevron-down footer-item-header-mbl-icon"></i></h3>
                    <div className="collapse" id="aboutCollapse">
                      <div className="d-flex flex-column mt-3">
                        <Link className="footer-bottom-item mb-3">Our Story</Link>
                        <Link className="footer-bottom-item mb-3">Social Responsibility</Link>
                        <Link className="footer-bottom-item mb-3">Our People</Link>
                        <Link className="footer-bottom-item mb-3">Newsroom</Link>
                        <Link className="footer-bottom-item mb-3">Careers</Link>
                        <Link className="footer-bottom-item mb-3">Partner With Us</Link>
                        <Link className="footer-bottom-item mb-3">Partner Login</Link>
                        <Link className="footer-bottom-item mb-3">New features</Link>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Bottom Section */}
          <div className="footer-bottom-2nd-section my-4">
            <hr className="text-secondary" />
            <div className="container py-4">
              <div className="row">
                <div className="footer-bottom-2nd-icons d-flex flex-column col-lg-4 col-md-12">
                <h3 className="footer-item-header-2nd mb-0">INVESTORS</h3>
                  <div className="d-flex mt-4">
                    <i className="bi bi-facebook footer-bottom-2nd-icon"></i>
                    <i className="bi bi-instagram footer-bottom-2nd-icon"></i>
                    <i className="bi bi-twitter footer-bottom-2nd-icon"></i>
                    <i className="bi bi-linkedin footer-bottom-2nd-icon"></i>
                  </div>
                  <div className="mt-4 d-flex flex-column">
                    <span className="footer-bottom-item mb-2">© weHosttravel / © weHost. All Rights Reserved 2023.</span>
                  <h3 className="footer-item-header-2nd mt-2">Disclaimer</h3>
                    <span className="footer-bottom-item footer-bottom-item-disclaimer mb-3 ">All the weHost Homes and Travel Experiences referenced on the weHost Newsroom and weHost Platform are intended solely to encourage, inspire and illustrate. weHost doesn’t recommend or endorse any specific Home(s) and/or Experience(s) listings on the weHost platform.</span>
                    <Link className="footer-bottom-item mb-3">Terms of Use</Link>
                    <Link className="footer-bottom-item mb-3">Privacy Policy</Link>
                    <Link className="footer-bottom-item mb-3">Do Not Sell my Personal Information</Link>
                    <Link className="footer-bottom-item mb-3">Cookie Settings</Link>
                  </div>
                </div>
                <div className="footer-bottom-2nd-icons d-flex flex-column col-md-4 footer-bottom-2nd-mbl-hide">
                  <h3 className="footer-item-header-2nd mb-0">SUPPORT</h3>
                  <div className="footer-bottom-2nd-items d-flex flex-column mt-4">
                    <Link className="footer-bottom-item mb-3">Whie Glove Concierge</Link>
                    <Link className="footer-bottom-item mb-3">Support and Contact</Link>
                    <Link className="footer-bottom-item mb-3">Help Center</Link>
                    <Link className="footer-bottom-item mb-3">weCover</Link>
                    <Link className="footer-bottom-item mb-3">Safety Information</Link>
                    <Link className="footer-bottom-item mb-3">Cancellation options</Link>
                    <Link className="footer-bottom-item mb-3">Our COVID-19 Response</Link>
                    <Link className="footer-bottom-item mb-3">Supporting people with disabilities</Link>
                    <Link className="footer-bottom-item mb-3">Tips & Articles</Link>
                    <Link className="footer-bottom-item mb-3">Report a neighborhood concern</Link>
                  </div>
                </div>
                <div className="footer-bottom-2nd-icons d-flex flex-column col-md-4 footer-bottom-2nd-mbl-hide">
                  <h3 className="footer-item-header-2nd mb-0">ABOUT</h3>
                  <div className="footer-bottom-2nd-items d-flex flex-column mt-4">
                    <Link className="footer-bottom-item mb-3">Our Story</Link>
                    <Link className="footer-bottom-item mb-3">Social Responsibility</Link>
                    <Link className="footer-bottom-item mb-3">Our People</Link>
                    <Link className="footer-bottom-item mb-3">Newsroom</Link>
                    <Link className="footer-bottom-item mb-3">Careers</Link>
                    <Link className="footer-bottom-item mb-3">Partner With Us</Link>
                    <Link className="footer-bottom-item mb-3">Partner Login</Link>
                    <Link className="footer-bottom-item mb-3">New features</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
