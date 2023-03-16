import React, { useEffect, useState } from "react";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginInfoCheck from "../loginInfoUtitlity/loginInfoCheck";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showSigninModal, setshowSigninModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [display, setDisplay] = useState('none');
  const [loginValue, setLoginValue] = useState('');
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const handleToggleClick = () => {
    setToggle(!toggle)
  }

  const handleLoginClick = (event) => {
    setshowSigninModal(!showSigninModal);
    setLoginValue(event.target.value)
    console.log(event.target.value);
  }
  const handleDisplayClick = () => {
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none')
    }
  }
  const handleMobiledisplayclick = () => {
    setToggle(!toggle);
    if (display === 'none') {
      setDisplay('block');

    } else {
      setDisplay('none')
    }
  }

  const menuHandler = (event) => {
    let dorpdownMenu = document.getElementsByClassName("menu-collapse")[0];
    let hamburger = document.getElementsByClassName("hamburger")[0];

    if (dorpdownMenu.classList.contains("menu-active")) {
      dorpdownMenu.classList.add("menu-inactive");
      dorpdownMenu.classList.remove("menu-active");
      document.getElementsByTagName("body")[0].style.overflow = "visible";

      if (hamburger.classList.contains("ham-burger-active")) {
        hamburger.classList.remove("ham-burger-active");
      }
    } else {
      dorpdownMenu.classList.remove("menu-inactive");
      dorpdownMenu.classList.add("menu-active");
      document.getElementsByTagName("body")[0].style.overflow = "hidden";

      if (!hamburger.classList.contains("ham-burger-active")) {
        hamburger.classList.add("ham-burger-active");
      }
    }
  }
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  return (
    <>
      <div className="container-fluid bg-light header-main">
        <div className="header d-flex justify-content-between">
          <div className="logo-section">
            <a href="/">
              <img className="header-logo" src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="items-section d-flex align-items-center justify-content-end w-100">
            <ul className="header-main-menu mb-0 d-flex align-items-center h-100 mb-0">
              <a href="">
                <li className="mx-2 menu-item">Vacational Rental Management
                  <span></span>
                </li>
              </a>
              <a href="">
                <li className="mx-2 menu-item">White Glove Concierge
                  <span></span>
                </li>
              </a>
              <a href="">
                <li className="mx-2 menu-item">Language
                  <span></span>
                </li>
              </a>
              <a href="">
                <li className="mx-2 menu-item">Currency
                  <span></span>
                </li>
              </a>
              <a href="">
                <li className="mx-2 menu-item">Help
                  <span></span>
                </li>
              </a>
            </ul>
            <div className="menu-profile d-flex">
              <LoginInfoCheck/>
            </div>
          </div>
          <div className="menu-dropdown">
            <div className="hamburger" onClick={menuHandler}>
              <span>

              </span>
              <span>

              </span>
              <span>

              </span>
            </div>
          </div>
        </div>
        <div className="menu-collapse">
          <ul className="header-main-menu mb-0 d-flex flex-column h-100 mb-0 pb-3">
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">Vacational Rental Management
                <span></span>
              </li>
            </a>
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">White Glove Concierge
                <span></span>
              </li>
            </a>
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">Language
                <span></span>
              </li>
            </a>
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">Currency
                <span></span>
              </li>
            </a>
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">Help
                <span></span>
              </li>
            </a>
            <div className="menu-profile d-flex">
              <LoginInfoCheck/>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;