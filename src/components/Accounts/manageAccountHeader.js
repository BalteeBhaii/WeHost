import React, { useEffect, useState } from "react";
import LoginInfoCheck from "../Navigation/loginInfoUtitlity/loginInfoCheck";
import SignIn from "../signIn/signin";
import SignUp from "../signIn/signUp";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";


const ManageAccountHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [showSigninModal, setshowSigninModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [display, setDisplay] = useState('none');
  const [loginValue, setLoginValue] = useState('');

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

  const menuHandler = () => {
    let dorpdownMenu = document.getElementsByClassName("menu-collapse")[0];

    if (dorpdownMenu.classList.contains("menu-active")) {
      dorpdownMenu.classList.add("menu-inactive");
      dorpdownMenu.classList.remove("menu-active");
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    } else {
      dorpdownMenu.classList.remove("menu-inactive");
      dorpdownMenu.classList.add("menu-active");
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  }

  return (
    <>
      <div className="container-fluid bg-light header-main">
        <div className="header d-flex">
          <div className="logo-section">
            <a href="/">
              <img className="header-logo" src="/images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="items-section d-flex align-items-center justify-content-end w-100">
            <div className="menu-profile">
              <LoginInfoCheck/>
            </div>
          </div>
          <div className="menu-dropdown">
            <i className="bi bi-list menu-toggle" onClick={menuHandler}></i>
          </div>
        </div>
        <div className="menu-collapse">
          <ul className="header-main-menu mb-0 d-flex flex-column h-100 mb-0 pb-3">
            <a href="">
              <li className="mx-2 menu-item menu-mbl-item mb-3">Vocational Rental Management
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
            <div className="menu-profile">
              <LoginInfoCheck/>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ManageAccountHeader;