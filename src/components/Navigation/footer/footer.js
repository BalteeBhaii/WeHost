import React, { useEffect } from "react";
// import "./footer.css";
import Button from 'react-bootstrap/Button';
const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="container prefooter mt-4 pb-0 px-0"
          style={{ backgroundColor: "#D1EFF6" }}
        >
          <p className="inquirysection text-center p-2">
            For inquires and queries do send us mail or any other issue. Feel
            Free to contact us
          </p>

          <div className="d-block">
            <form className="d-flex mb-4 w-75 mx-auto justify-content-between">
              <div className="input-group border border-2 border-dark px-3 py-2 rounded-1 bg-white">
                <i className="bi bi-envelope input-group-text bg-transparent border-0 text-mute"></i>
                <input
                  type="email"
                  id="form5Exam"
                  className="form-control border-0"
                  placeholder="Your Mail"
                />
              </div>

              <button type="submit" className="btn btn-primary ms-2 px-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div
          className="container-fluid mt-2 pt-2"
          style={{ backgroundColor: "#D1EFF6" }}
        >
          <div className="row">
            <div className="col-md-3 footer-column">
              <span>
                <img src='/images/logo.svg' alt="" />
              </span>
            </div>
            <div className="col-md-3 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title ftitle ">Company</span>
                </li>
                <li className="nav-item">
                  <a className="nav-des" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-des" href="#">
                    Packages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-des" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-column">
              <ul className="nav flex-column">
                <li className="nav-des">
                  <span className="footer-title ftitle">Contact</span>
                </li>
                <li className="nav-item">
                  <a className="nav-des" href="#">
                    Help/FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-des" href="#">
                    Mail
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-des" href="#">
                    Affilates
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <span className="footer-title ftitle">More</span>
                </li>
                <li className="nav-item">
                  <span className="nav-des">
                    <i className="fas fa-phone"></i>Hot Deals
                  </span>
                </li>
                <li className="nav-item">
                  <a className="nav-des" href="#">
                    <i className="fas fa-comments"></i>Houses
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-des" href="#">
                    <i className="fas fa-envelope"></i>Mansions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <i className="fas fa-ellipsis-h"></i>
          </div>

          <div className="row text-center fcopyright">
            <div className="jutify-content-center">
              <span className="copyright">Copyright 2023 &copy; WebHost</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;