import React, { useEffect } from "react";
import { Button } from "bootstrap";
import "./style.css";
//import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import logo from "../../Assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div
          class="container prefooter mt-4 pb-0 px-0"
          style={{ backgroundColor: "#D1EFF6" }}
        >
          <div class="p-2">
          <p class="inquirysection text-center p-2">
            For inquires and queries do send us mail or any other issue. Feel
            Free to contact us
          </p>

         
            <form className="d-flex mb-4 w-75 mx-auto justify-content-between mailsm">
              <div className="input-group border border-2 border-dark px-3 py-2 rounded-1 bg-white">
                <i className="bi bi-envelope input-group-text bg-transparent border-0 text-mute"></i>
                <input
                  type="email"
                  id="form5Exam"
                  className="form-control border-0 "
                  placeholder="Your Mail"
                />
              </div>
             
              <button type="submit" className="btn btn-primary ms-2 px-4">
                Send 
              </button>
            </form>
          </div>
            {/* <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"> <i className="bi bi-envelope"></i></span>           
           <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Your Mail" aria-describedby="basic-addon2"/>
         <span class="input-group-text" id="basic-addon2">Send Mail </span>
          </div> */}
        </div>

        {/* <div>
          <button className="modal-footer-button ml-3" onClick={(Home) => Home}>
            Send Mail
          </button>
        </div> */}
        <div
          class="container-fluid mt-2 pt-2"
          style={{ backgroundColor: "#D1EFF6" }}
        >
          <div class="container">
          <div class="row">
            <div class="col-md-3 footer-column">
              <span>
                <img src={logo} alt="" />
              </span>
            </div>
            <div class="col-md-3 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title ftitle ">Company</span>
                </li>
                <li class="nav-item">
                  <a class="nav-des" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-des" href="#">
                    Packages
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-des" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 footer-column">
              <ul class="nav flex-column">
                <li class="nav-des">
                  <span class="footer-title ftitle">Contact</span>
                </li>
                <li class="nav-item">
                  <a class="nav-des" href="#">
                    Help/FAQs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-des" href="#">
                    Mail
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-des" href="#">
                    Affilates
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 footer-column">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <span class="footer-title ftitle">More</span>
                </li>
                <li class="nav-item">
                  <span class="nav-des">
                    <i class="fas fa-phone"></i>Hot Deals
                  </span>
                </li>
                <li class="nav-item">
                  <a class="nav-des" href="#">
                    <i class="fas fa-comments"></i>Houses
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-des" href="#">
                    <i class="fas fa-envelope"></i>Mansions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          </div>

          <div class="text-center">
            <i class="fas fa-ellipsis-h"></i>
          </div>

          <div class="row text-center fcopyright">
            <div class="jutify-content-center">
              <span class="copyright">Copyright 2023 &copy; WebHost</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
